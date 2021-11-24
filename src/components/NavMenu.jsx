import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md'

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: #202127;
    
  ul{
    margin: 0 auto;
    width: 100%;
    text-align: right;
    li{
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease bacground-color;
    }
    a{
      display: inline-block;
      font-family: 'RobotoMono Regular';
      margin : 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
      &:hover {
        color: bisque;
      }
    }
    .active{
      color: bisque;
    }
  }
  .mobile-menu-icon{
    position: absolute;
    right:1rem;
    top:1erm;
    width: 4rem;
    cursor:pointer;
    display:none;
    outline:none;
    *{
      pointer-events: none;
    }
  }
  .closeNavIcon{
    display:none;
  }
  @media only screen and (max-width:768px){
    padding: 0;
    .hide-item{
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon{
      display: block;
    }
    .navItems {
      --top: 1rem;
      text-align: center;
      transition: 0.3s ease transform;
      background-color: #303137;
      paddind: 2rem;
      width: 90%;
      max-width:300px;
      border-radius:8px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 5px 5px 0 auto;
        cursor: pointer;
        *{
          pointer-events: none;
        }
      }
        li{
          display: block;
          margin-bottom: 1rem; 
        }
    }
  }
`;


export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavMenuStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role='button'
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role='button'
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink to="/" exact
            onClick={() => setShowNav(!showNav)}
            role='button'
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >Home</NavLink>
        </li>
        <li>
          <NavLink to="/about"
            onClick={() => setShowNav(!showNav)}
            role='button'
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >About</NavLink>
        </li>
        <li>
          <NavLink to="/projects"
            onClick={() => setShowNav(!showNav)}
            role='button'
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contacts"
            onClick={() => setShowNav(!showNav)}
            role='button'
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >Contacts</NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
