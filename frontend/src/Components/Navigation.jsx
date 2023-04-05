import {Link} from 'react-router-dom'

function Navigation(){
    return(
        <div>
            <nav>
                <Link to="/">Dashboard</Link>
                <Link to="/about">About</Link>
                <Link to="/addEmployee">Add Employee</Link>
                <Link to='/services'>Services</Link>
            </nav>
        </div>
    );
}

export default Navigation;