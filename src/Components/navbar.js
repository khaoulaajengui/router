
import { Link } from "react-router-dom";
const nav =()=>{

    return(
        <nav >
            <h1> MyApp</h1>
            <ul style={{display: 'flex', justifyContent:'space-around'}}>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                <Link to="/service">Services </Link>
                </li>

                <li>
               <Link to="/sign">Sign up</Link>
                </li>

            </ul>
        </nav>
    )
}
export default nav;