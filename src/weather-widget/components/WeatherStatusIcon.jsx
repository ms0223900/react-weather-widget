import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import WeatherStatusIconHandlers from '../lib/WeatherStatusIconHandlers'
import images from '../static/images.json'

const useStyles = makeStyles(theme => ({
  root: {
    width: 100,
    margin: 'auto',
    '& img': {
      display: 'block',
      width: '100%'
    },
  }
}));

const WeatcherStatusIcon = ({
  wxName, wxValue
}) => {
  const iconNum = WeatherStatusIconHandlers.getIconNumFromWxValue(wxValue)
  const iconImage = images[`weatherStatus_icon_status_${iconNum}`]
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img 
        src={iconImage.src}
        alt={iconImage.name}
        title={wxName}
      />
    </Box>
  )
}

export default WeatcherStatusIcon