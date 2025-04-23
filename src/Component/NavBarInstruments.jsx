import { Link } from "react-router";
import '../styleSheet/NavBarInstuments.css';

function NavBarInstruments(){

  return(
    <nav className='navBarInstrument'>
      <ul className='navBarInstrument__ul'>
        <li className='navBarInstrument__ul__li' >
          <Link to='/instrumentsPage/new' className='navBarInstrument__ul__li__a'>Add</Link>
        </li>
        <li className='navBarInstrument__ul__li' >
          <Link to='/editInstrument' className='navBarInstrument__ul__li__a'>Edit</Link>
        </li>
        <li className='navBarInstrument__ul__li' >
          <Link to='/deleteInstrument' className='navBarInstrument__ul__li__a'>Delete</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBarInstruments;