import React from 'react'
import PropTypes from 'prop-types'
//import {Link} from 'react-router-dom'
const navBarStyle = {
    '--bs-scroll-height': '100px'
};
export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/*<Link className="navbar-brand" to="/">{props.title}</Link>*/}
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={navBarStyle}>
            <li className="nav-item">
              {/*<Link className="nav-link active" aria-current="page" to="/">Home</Link>*/}
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/*<li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>*/}
          </ul>
          {/*<form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>*/}
          <div className="dropdown mx-auto" style={{color:props.mode==='dark'?'white':'black'}}>
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}>
              Modes
            </button>
            <ul className="dropdown-menu" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}>
              <li><div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlfor="flexSwitchCheckDefault" >Enable dark mode</label>
              </div></li>
              <li><div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable dark mode</label>
              </div></li>
              <li><div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable dark mode</label>
              </div></li>
            </ul>
          </div>
          {/*<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable dark mode</label>
          </div>*/}
        </div>
      </div>
    </nav>
  )
}
Navbar.propTypes={
    title: PropTypes.string,
    aboutText: PropTypes.string
}
