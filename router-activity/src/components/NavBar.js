import {Routes,Route,NavLink,BrowserRouter} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import NotFound from './NotFound';
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
  
});
export default function NavBar(){
    return(
        <BrowserRouter>
        <nav >
            <NavLink to="/"style={navLinkStyles} >Home</NavLink>
            <NavLink to="/about"style={navLinkStyles}>About</NavLink>
            <NavLink to="/contact"style={navLinkStyles}>Contact</NavLink>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact"  element={<Contact />} />
            <Route path="*" element ={<NotFound />} />
        </Routes>

        </BrowserRouter>
    );
}