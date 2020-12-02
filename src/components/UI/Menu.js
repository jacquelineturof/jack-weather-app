import React from 'react'
import { NavLink } from 'react-router-dom'
import { FcGlobe } from "react-icons/fc"
import { MENU_LINKS } from '../../config'

import Widget from '../Widget'

import classes from './Menu.module.css'

const Link = ({ to, icon, label }) => (
    <NavLink 
        to = { to } className = { classes.Link } 
        activeClassName = { classes.ActiveLink }>
        { icon }
        <p className = { classes.LinkLabel }>{ label }</p>
    </NavLink>
)

const LinksList = () => (
    <ul className = { classes.List }>
        { MENU_LINKS.map((link, index) => (
            <li>
                <Link key = { index } { ...link } />
            </li>
        ))}
    </ul>
)

const AppName = () => (
    <div className = { classes.AppNameContainer }>
        <FcGlobe size = { 36 } />
        <h5 className = { classes.AppName }>TerraSalutem</h5>
    </div>
)

const Menu = () => (
    <nav className = { classes.Menu }>
        <AppName />
        <LinksList />
        <Widget />
    </nav>
)

export default Menu