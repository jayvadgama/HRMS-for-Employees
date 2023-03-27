const express = require('express');
const fs = require('fs');
const app = express();
// This is a reusable function used to fetch a single employee,we will use it in get,update and delete routes to avoid code duplication
const getEmployee=(id)=>{
    //fetch all employees fro the json file
    const employees = JSON.parse(fs.readFileSync('./Data/employees.json'));
    //find the employees by the id passed by the request
    const employee=employees.find(emp => emp.id === id)
    return employee
}

app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.status(200).json({'message':"home"});
});


// Get all emloyees
app.get('/employees', (req, res) => {
  // Load user data from JSON file
  try{
    const employees = JSON.parse(fs.readFileSync('./Data/employees.json'));
    res.status(200).json(employees);
  }catch(err){
    res.status(500).json(err.message);
  }

});

// Get a single  emloyees
app.get('/employees/:id', (req, res) => {
    
    try{
        //get an employee using the getEmployee fuction we described above on line 5
        employee= getEmployee(req.params.id)
        //if the employee with that id doesnt exist, return a 404 error
      if(!employee) {
        res.status(404).json({"message":"Employee not found"})
      }else{
        // if the employee with the id exists, return a successful response with the employee object
        res.status(200).json(employee);
      }
    }catch(err){
        // if there are any errors instead, return the error
      res.status(500).json(err.message);
    }
  });

// Register endpoint
app.post('/employee', (req, res) => {
    try{
        const { firstName, lastName,userName } = req.body;

        let employees = [];
        if (fs.existsSync('./Data/employees.json')) {
            employees = JSON.parse(fs.readFileSync('./Data/employees.json', 'utf8'));
        }

        // Check if username is already taken
        if (employees.find(emp => emp.username === userName)) {
            return res.status(400).json({ error: 'Username is taken!' });
        }else{
            const employee = {
            id: employees.length + 1,
            username: userName,
            firstName: firstName,
            lastName: lastName
            };


            employees.push(employee);
            fs.writeFileSync('./Data/employees.json', JSON.stringify(employees));
            res.status(201).json({success:"employee record inserted"})
        }
    }catch(err){
        res.status(500).json({error:err.message})
    }
});

app.put('/employees/:id', (req, res) => {
    try{
        //get an employee using the getEmployee fuction we described above on line 5
        const employee= getEmployee(req.params.id)
        if(!employee) {
            res.status(404).json({"message":"Employee not found"})
        }
        const updatedData={
            ...employee,
            ...req.body
        }

        let employees = [];
        if (fs.existsSync('./Data/employees.json')) {
            employees = JSON.parse(fs.readFileSync('./Data/employees.json', 'utf8'));
        }
        employees.push(updatedData);
        fs.writeFileSync('./Data/employees.json', JSON.stringify(employees));
        res.status(200).json({success:"Employee details updated"})
    }catch(err){
        res.status(500).json({error:err.message})
    }
    
  
});

app.delete('/employees/:id', (req, res) => {
    try{
        const employee= getEmployee(req.params.id)
        if(!employee) {
            res.status(404).json({"message":"Employee not found"})
        }

        let employees = [];
        if (fs.existsSync('./Data/employees.json')) {
            employees = JSON.parse(fs.readFileSync('./Data/employees.json', 'utf8'));
        }
        employees.pop(employee);
        fs.writeFileSync('./Data/employees.json', JSON.stringify(employees));
        res.status(200).json({success:"Employee details deleted"})
    }catch(err){
        res.status(500).json({error:err.message})
    }
  });

app.listen(3000, () => {
  console.log('Server started on port 3000');
});