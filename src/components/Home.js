import React from 'react'

import Menu from './UI/Menu'
import Router from '../Router'

import classes from './Home.module.css'

const Home = () => (
    <div className = { classes.Container }> 
        <Menu />
        <Router />
    </div>
)

export default Home