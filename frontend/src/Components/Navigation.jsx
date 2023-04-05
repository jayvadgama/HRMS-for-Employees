import {Link} from 'react-router-dom'

function Navigation(){
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to='/services'>Services</Link>
            </nav>
        </div>
    );
}

export default Navigation;