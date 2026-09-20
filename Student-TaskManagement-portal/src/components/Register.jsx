import { useState } from "react";
import {Link} from "react-router-dom"

function Register(){
     const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const [name, setName] = useState("");
     
      const handleRegister = async (event)=>{
        event.preventDefault();

        const response = await fetch("http://localhost:5000/api/register",
            {
                method: "POST",
                headers:{
                   "Content-Type" : "application/json"  
                },
                body:JSON.stringify({
                    name,
                    email,
                    password
                })
            });
            const data = await response.json();
            console.log(data);
      }

return (
    <div className="register-page">
        <h2>🤨Welcome to Student Task Portal🤨</h2>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
            <input type="text"
                placeholder="Enter your Name" 
                value={name}
                onChange={(event) =>setName(event.target.value)}
                /> <br />
                <input type="email"
                placeholder="Email" 
                value={email}
                onChange={(event) =>setEmail(event.target.value)}
                />

                <br />

                <input type="password"
                placeholder="Create your Password" 
                value={password}
                onChange={(event) =>setPassword(event.target.value)}
                />
                <button type="submit">
                    Register Now
                </button>
         </form>       
        <p>Already have an account ?<Link to="/login">--Login</Link></p>
   </div>
);

}

export default Register;