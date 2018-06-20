'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var split=[];
  while(number>0){
    split.push(number);
    number=(number*10-interval*10)/10;
  }
  split.push((split[split.length-1]*10-interval*10 )/10 );
  return split;

}

module.exports = spilt_to_zero;
