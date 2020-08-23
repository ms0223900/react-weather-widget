const WeatherStatusIconHandlers = {
  // iconNum: icon代碼
  getIconNumFromWxValue(wxValue) {
    const numWxValue = Number(wxValue);
    if(numWxValue === 1) 
      return 1;

    else if((numWxValue >= 2 && numWxValue <= 3) || (numWxValue >= 24 && numWxValue <= 28)) 
      return 2;

    else if(numWxValue === 8) 
      return 4;

    else if(numWxValue >= 4 && numWxValue <= 10)  
      return 3;

    else if(numWxValue === 11 || numWxValue === 12 || numWxValue === 15 || (numWxValue >= 18 && numWxValue <= 23) || numWxValue === 30 || numWxValue === 34 || (numWxValue >= 37 && numWxValue <= 39) || numWxValue === 41) 
      return 4;

    else if(numWxValue === 13 || numWxValue === 14 || (numWxValue >=29 && numWxValue <= 32)) 
      return 5;

    return 6;
  },
};

export default WeatherStatusIconHandlers;