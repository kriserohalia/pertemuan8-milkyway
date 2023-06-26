import {AiFillBug} from 'react-icons/ai'
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='wrapper-header'>
        <div className='wrapper-logo'>
            <AiFillBug size={32} color='black'/> Sky Bug
        </div>
        <nav className='wrapper-nav'>
            <ul className='list-nav'>
                <li className='nav-item'>
                  <NavLink to={'/'}/>Dashboard
                </li>
                <li className='nav-item'>
                <NavLink to={'/shop'}/>Shop
                </li>
                <li className='nav-item'>
                <NavLink to= {'/about'}/>About
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header