import deleteicon from '../assets/dustbin.png'
import {Link} from "react-router-dom"
function Taskcard(props){
    return (
    <div className="task-card">
        <h3>{props.title}</h3>

        <p>{props.description}</p>
        
        <p><i>{props.status}</i></p>
        <button onClick={props.onToggle}>change status</button>
     <Link to={`/tasks/${props.id}`} id="view-d">
     View Details 
     </Link>
<img 
    className="delete-icon"
    src={deleteicon}
    alt="Delete-image"
    title="Delete task"
    onClick={props.onDelete}
/>    

</div>
    );
}
export default Taskcard;