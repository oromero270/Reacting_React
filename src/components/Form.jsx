import React, {useState} from 'react';

const Form = (props) => {
    const [fistName, setFistName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Hello ${fistName} ${lastName}`);
    }

    return(
        <form onSubmit={(e)=> handleSubmit(e)}>
            <input 
                type="text"
                name="fistName"
                value={fistName}
                placeholder="OZ"
                onChange={(e)=>setFistName(e.target.value)}
            />
            <input 
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Romero"
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                type="submit" 
                value="Submit"
            />
        </form>
    )

}
export default Form;