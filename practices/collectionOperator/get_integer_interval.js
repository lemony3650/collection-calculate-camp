'use strict';

function get_integer_interval(number_a, number_b) {
  var collection=[];
  if(number_a < number_b) {
    for(var i = number_a;i < number_b+1;i++)
      collection.push(i);// collection[i] = number_a + i;
  }
  else if(number_a > number_b) {
    for(var i = number_a;i > number_b-1;i--)
      collection.push(i);
  }
  else collection.push(number_a);
  return collection;
}

module.exports = get_integer_interval;

