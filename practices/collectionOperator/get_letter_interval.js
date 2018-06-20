'use strict';

function get_letter_interval(number_a, number_b) {
  var collection=[];
  if(number_a < number_b) {
    for(var i = 0;i < (number_b - number_a +1 );i++)
      collection[i] = String.fromCharCode(97 + i);
  }
  else if(number_a > number_b) {
    for(var j = 0;j<(number_a - number_b +1);j++)
      collection[j] = String.fromCharCode(97+number_a -1 -j);
  }
  else collection[0] = String.fromCharCode(97 + number_a-1);
  return collection;
}

module.exports = get_letter_interval;
