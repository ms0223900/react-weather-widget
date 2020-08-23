import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import WeatherStatusIconHandlers from '../lib/WeatherStatusIconHandlers'
import images from '../static/images.json'

const useStyles = makeStyles(theme => ({
  root: {
    width: 100,
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
  const imageSrc = images[`weatherStatus_icon_status_${iconNum}`].src
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img 
        src={imageSrc}
        title={wxName}
      />
    </Box>
  )
}

export default WeatcherStatusIcon