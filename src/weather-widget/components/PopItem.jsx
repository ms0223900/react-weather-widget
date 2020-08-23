import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import images from '../static/images.json'

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
  },
  popIcon: {
    width: 20,
  },
  pop: {
    paddingLeft: theme.spacing(1),
  },
}));

// 降水機率
const PopItem = ({
  pop,
}) => {
  const classes = useStyles();

  return (
      <Box
        className={classes.root}
        display={'flex'}
        alignItems={'center'}
      >
        <img 
          className={classes.popIcon}
          src={images.icons_weather_pop.src}
          title={'降雨機率'}
          alt={images.icons_weather_pop.name}
        />
        <Typography 
          className={classes.pop}
          variant={'h6'}
        >
          {`${pop} %`}
        </Typography>
      </Box>
  );
};

export default PopItem;