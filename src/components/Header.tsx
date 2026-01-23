import { Link } from 'react-router-dom'
import './Header.css'

interface HeaderProps {
  // We can add props later if needed
}

function Header({}: HeaderProps) {
  return (
    <header className="header">
      <nav>
        <h1>Mike's Portfolio</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header