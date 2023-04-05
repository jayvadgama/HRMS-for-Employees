import {Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';

function RoutesTree(){
    return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path= "services" element={<Services />} />
        </Routes>
    </div>
    );
}

export default RoutesTree