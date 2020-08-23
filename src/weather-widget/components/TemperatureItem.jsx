import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    fontWeight: 600,
    color: '#555',
  }
}));

const TemperatureItem = ({
  temperature
}) => {
  const classes = useStyles();
  return (
    <Typography className={classes.root} variant={'h6'}>
      {temperature}
      <sup>{'°'}</sup>
      {'C'}
    </Typography>
  );
};

export default TemperatureItem;