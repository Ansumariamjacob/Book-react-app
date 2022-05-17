import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
      <Link to='/' className="navbar-brand" >LIBRARY</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link to='/' className="nav-link active">ADD BOOK</Link>
          
        </li>
        <li className="nav-item">
            <Link to='/search' className="nav-link">SEARCH BOOK</Link>
          <a className="nav-link" href="#"></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header