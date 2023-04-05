import { useState,useEffect } from "react";

function Dashboard(){

    const [data,setData] = useState([])

    useEffect(() => {
        fetchData();
      }, []);

    const server = 'http://localhost:4000'
    

    function fetchData(){
        const url= server + '/employees'
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }
    return(
        <div>
            <ul>
                {data.map(item=>(
                    <li key={item.id}>{item.firstName} {item.secondName} {item.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard