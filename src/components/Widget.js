import React from 'react'
import { IconContext } from 'react-icons'
import { 
    RiSnowyFill,
    RiCelsiusFill, 
    RiFahrenheitFill, 
    RiWindyLine 
} from "react-icons/ri"

import ProgressBar from './UI/ProgressBar'

import classes from './Widget.module.css'

/*
    The summary of today, which will have the time / date
    and an icon of the weather for today.
    @weather { string } the descriptor of today's weather,
    determines the icon
*/
const Today =  ({ weather, date }) => {
    let weatherIcon = null

    if (weather === 'snow') {
        weatherIcon = <RiSnowyFill />
    }

    return (
        <div className = { classes.Summary }>
            <IconContext.Provider value = {{ className: classes.SummaryIcon }}>
                { weatherIcon }
            </IconContext.Provider>
            <div className = { classes.DateContainer }>
                <p className = { classes.TodayLabel }>Today</p>
                <p className = { classes.Date }>{ date }</p>
            </div>
        </div>
    )
}

const Temperature = ({ temperature, isCelsius, county, country }) => (
    <div className = { classes.TemperatureContainer}>
        <h1 className = { classes.Temperature }>
            <span className = { classes.TemperatureNumber }>{ temperature }</span>
            { isCelsius ?  <RiCelsiusFill /> : <RiFahrenheitFill />  } 
        </h1>
        <h5 className = { classes.County }>{ county }</h5>
        <p className = { classes.Country }>{ country }</p>
    </div>
)

const InfoGraphicsContainer = ({ windSpeed }) => (
    <div className = { classes.InfoGraphicsContainer }>
        <ProgressBar label = "Humidity" percentageCompleted = "70" />
        <ProgressBar label = "Percipitation" percentageCompleted = "25"/>
        <div className = { classes.WindContainer }>
            <p className = { classes.WindLabel }>Wind</p>
            <RiWindyLine color = "#FF6B6B" />
            <p className = { classes.WindSpeedLabel }>{ windSpeed }</p>
        </div>
    </div>
)

const Widget = () => {
    const temperature = "35"
    const isCelsius = false
    const county = "New York"
    const country = "United States"

    return (
        <div className = { classes.Widget }>
            <Today weather = "snow" date = "Wed, 02 December" />
            <Temperature
                temperature = { temperature } 
                isCelsius = { isCelsius } 
                county = { county }
                country = { country } />
            <InfoGraphicsContainer windSpeed = "4km/h" />
        </div>
    )
}

export default Widget