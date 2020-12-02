import React from 'react'

import classes from './ProgressBar.module.css'

const ProgressBar = ({ percentageCompleted, label  }) => {
    const fillerStyles =  {
        width: percentageCompleted  + "%" ,
        backgroundColor: '#FF6B6B',
        height: '100%',
        zIndex: '2',
        borderRadius: 'inherit'
    }

    return (
        <div className = { classes.Container  }>
            <div className = { classes.LabelContainer }>
                <p className = { classes.Label }>{ label }</p>
                <p className = { classes.Label }>{ percentageCompleted  + "%" }</p>
            </div>
            <div className = { classes.Bar }>
                <div style = { fillerStyles }></div>
            </div>
        </div>
    )
}

export default ProgressBar