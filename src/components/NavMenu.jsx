import React from 'react';
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
  background: var(--dark-bg);
    
  ul{
    margin: 0 auto;
    width: 100%;
    text-align: right;
    li{
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease bacground-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a{
      display: inline-block;
      font-family: 'RobotoMono Reguler';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active{
      color: var(--white);
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
  }
  @media only screen and (max-width:768px){
    .mobile-menu-icon{
      display:block;
    }
    
  }
`;


export default function NavMenu() {
  return (
    <NavMenuStyles>
      <div className="mobile-menu-icon">
        <MdMenu></MdMenu>
      </div>
      <ul>
        <div className="closeNavIcon">
          <MdClose />
        </div>
        <li>
          <NavLink to="/" exact >Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </NavMenuStyles>
  );
}
