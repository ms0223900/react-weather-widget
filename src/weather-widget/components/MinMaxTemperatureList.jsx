import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import TemperatureItem from './TemperatureItem';

const useStyles = makeStyles(theme => ({
  root: {
     
  },
  connector: {
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
  }
}));

const MinMaxTemperatureList = ({
  minTemperature, maxTemperature,
}) => {
  const classes = useStyles();
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <TemperatureItem temperature={minTemperature} />
      <Typography className={classes.connector}>{'-'}</Typography>
      <TemperatureItem temperature={maxTemperature} />
    </Box>
  );
};

export default MinMaxTemperatureList;