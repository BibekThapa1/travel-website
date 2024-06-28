import React, { useState } from 'react'
import logo from "../images/logo.png"


const navbar = () => {

const [showNav, setShowNav] = useState(false)

function toggleNav(){
  setShowNav(!showNav)
}

  return (
    <>
    <div className="logo-section">
      <div className="logo px-sm-2  px-lg-3 ">
      <img src={logo} alt="" />
      <p className='px-2'> welcome to purbi nepal.</p>
      </div>
      
    </div>
     <nav className="navbar navbar-expand-sm bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand text-center" href="/" >Purbi Nepal</a>
    <button className="navbar-toggler" type="button" onClick={toggleNav} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
      <form className="d-flex " role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  <div className={`nav-links d-block d-sm-none  ${showNav?"show-nav":"d-none"}`}>
   <ul className='nav-links-ul list-unstyled'>
    <li className='p-2 pt-3  px-3'>Link1</li>
    <li className='p-2 px-3'>Link2</li>
    <li className='p-2 px-3'>Link3</li>
    <li className='p-2 px-3'>Link4</li>
   </ul>
  </div>
</nav>
    </>
  )
}

export default navbar