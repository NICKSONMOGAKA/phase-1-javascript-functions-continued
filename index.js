exports.saturdayFun = function(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  };
  
  exports.mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  };
  
  exports.wrapAdjective = function(highlight = '*') {
    return function(adjective) {
      return `${highlight}${adjective}${highlight}`;
    };
  };
  