import {Route,Routes} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import AddEmployee from './Pages/AddEmployee';
import Services from './Pages/Services';

function RoutesTree(){
    return (
    <div>
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="about" element={<About />}/>
            <Route path="addEmployee" element={<AddEmployee />}/>
            <Route path= "services" element={<Services />} />
        </Routes>
    </div>
    );
}

export default RoutesTree