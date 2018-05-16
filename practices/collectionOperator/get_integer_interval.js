'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var collection=[];

  if(number_a < number_b) {
    for(var i = 0;i < (number_b - number_a +1 );i++)
      collection[i] = number_a + i;
  }

  else if(number_a > number_b) {
    for(var j = 0;j<(number_a - number_b +1);j++)
      collection[j] = number_a - j;
  }

  else collection[0] = number_a;
  return collection;

}

module.exports = get_integer_interval;

