import { useState } from "react";

function AddEmployee(){

    const [data,setData] = useState({})
    // const [submitted,setSubmitted] = useState(false)
    const serverHost = 'http://localhost:4000'

    async function addEmployee(employee){
        const url = serverHost+'/employees';
        console.log(employee);
        const options ={
            method: 'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url,options)
        if (response.status === 200){
            // setSubmitted(true)
            console.log(response.json)
        }
    }

    const handleChange=e=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(value)
        const currentInputFieldData ={
            [name]:value
        }

        const updatedData={
            ...data,
            ...currentInputFieldData
        }

        setData(updatedData)
    }
    const handleSubmit=(e)=>{
        addEmployee(data);
        e.preventDefault();
    }

    return(
        <div>
            <h1>this is the Contact Page</h1>
            {/* { submitted? */}
            <form onSubmit={handleSubmit}>
                <label> First Name:
                <input name="firstName" type="text" onChange={handleChange}/>
                </label>
                <label> Second Name:
                <input name="secondName" type="text" onChange={handleChange}/>
                </label>
                <label> Name:
                <input name="email" type="text" onChange={handleChange}/>
                </label>
                <input type="submit" value="submit" />
            </form>
            {/* : <p>Employee Added successfully</p>
            }  */}

        </div>
    );
}

export default AddEmployee