import studentlogo from '../assets/student-portal.png'
import { Link } from "react-router-dom"
export default function Navbar(){
    
     const handleLogout = ()=>{
        localStorage.removeItem("token");
        console.log("Logged out sucessfully");
    }
    return (
    <nav>
        <img src={studentlogo} alt="student" style={{width:"55px",height:"55px"}} />
     <h2>Student Task Portal</h2>
     <div className="nav-links">
    <button>
        <Link to={"/"}><span>Home</span></Link>
    </button>

    <button>
        <Link to={"/tasks"}><span>Tasks</span></Link>
    </button>
    <button onClick={handleLogout}>
        Logout
    </button>
     </div>
    </nav>
    );
}
