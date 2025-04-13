import { Link } from "react-router";

function NavBarInstruments(){

  return(
    <ul>
      <li>
        <Link to='/addInstrument'>Add</Link>
      </li>
    </ul>
  )
}

export default NavBarInstruments;