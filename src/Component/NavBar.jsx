import { Link } from 'react-router';
import '../styleSheet/NavBar.css';

function NavBar(){
  return(
    <nav className='navBar'>
      <ul className='navBar__ul'>
        <li className='navBar__ul__li' >
          <Link to='/' className='navBar__ul__li__a'>Home</Link>
        </li>
        <li className='navBar__ul__li'>
          <Link to='/digimonsPage' className='navBar__ul__li__a'>Digimons</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;