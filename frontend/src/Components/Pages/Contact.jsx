// import Clock from "../Clock";

import { useState } from "react";

function Contact(){

    const [data,setData] = useState({})
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
        console.log(data);
        e.preventDefault();
    }

    return(
        <div>
            <h1>this is the Contact Page</h1>
            <form onSubmit={handleSubmit}>
                <label> First Name:
                <input name="FirstName" type="text" onChange={handleChange}/>
                </label>
                <label> Second Name:
                <input name="SecondName" type="text" onChange={handleChange}/>
                </label>
                <label> Name:
                <input name="Major" type="text" onChange={handleChange}/>
                </label>
                <input type="submit" value="submit" />

            </form>
            {/* <Clock continent="Africa" city="Nairobi"/> <hr/>
            <Clock continent="Asia" city="Tokyo"/> <hr/>
            <Clock continent="Europe" city="London"/> <hr/>
            <Clock continent="Australia" city="Sydney"/> <hr/>  */}
        </div>
    );
}

export default Contact