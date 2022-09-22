import React, { useState} from 'react';


export const NavBar = () => {

    const [isMenuOpen, setOpen] = useState(false);
    const [isColorChange, setIsColorChange] = useState(false)

    const handleMenu = () => {
        if(!isMenuOpen){
            setOpen(true)
            setIsColorChange(true)
        }else{
            setOpen(false)
            setIsColorChange(false)
        }
    }

    const clearMenu = () =>{
        setOpen(false);
        setIsColorChange(false)
    }


const body = document.querySelector("body");
if(isMenuOpen){
   body.classList.add("block-scroll")
}else{
    body.classList.remove("block-scroll")
}


  return (
    <div className={`navbar ${isMenuOpen && 'navbar navbar-bg'}`}>
        <button onClick={handleMenu}>
            {isMenuOpen
                ? <i className={`menu-icon fas fa-times ${isColorChange && 'menu-icon fas fa-times background-icon'}`}></i>
                : <i className={`menu-icon fas fa-bars ${isColorChange && 'menu-icon fas fa-bars background-icon'}`}></i>
            }
        </button>
            <ul className={`ul-navbar ${isMenuOpen && 'ul-navbar show'}`}>
                <li onClick={clearMenu}><a className="link" href="#home">Home</a></li>
                <li onClick={clearMenu}><a className="link" href="#about">About</a></li>
                <li onClick={clearMenu}><a className="link" href="#education">Education</a></li>
                <li onClick={clearMenu}><a className="link" href="#portfolio">Portfolio</a></li>
                <li onClick={clearMenu}><a className="link" href="#contact">Contact</a></li>
            </ul>
    </div>
  )

    
}
