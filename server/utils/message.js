var generateMessage = (from,text )=>{
  return {
    from,
    text,
    createdAt:new Date().getTime()
  }
};

var generateLocatioMessage = (from, latitude,longitude)=>{
    return{
      from,
      url:`https://maps.googleapis.com/maps/api/geocode/json?address=${latitude},${longitude}&key=AIzaSyCnL5NGwK7rGmuhBvqKUmDSK4h6cuknAy0`,
      createdAt:new Date().getTime()
    }
};

module.exports = {generateMessage,generateLocatioMessage};
