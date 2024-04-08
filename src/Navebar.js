import { NavLink, Route, Routes } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import Home from './Home'
import Men from './Men'
import Women from './Women'
import Electronics from './Electronics'
import Jwellery from './Jwellery'

const Navebar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <br></br>
        <br></br>
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/men">Men's Cloth</NavLink>
            </li>
            <li>
              <NavLink to="/women">Women's Cloth</NavLink>
            </li>
            <li>
              <NavLink to="/jwellery">Jwellery</NavLink>
            </li>
            <li>
              <NavLink to="/electronics">Electronics</NavLink>
            </li>
          </ul>
        </div>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/men" element={<Men></Men>}></Route>
            <Route path="/women" element={<Women></Women>}></Route>
            <Route path="/electronics" element={<Electronics></Electronics>}></Route>
            <Route path="/jwellery" element={<Jwellery></Jwellery>}></Route>
        </Routes>
      </div>
    </nav>
  )
}

export default Navebar