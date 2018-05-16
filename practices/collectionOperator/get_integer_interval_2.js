'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var collection=[];
  var collection_a=[];
  var  k = 0;

  if(number_a < number_b) {
    for(var i = 0;i < (number_b - number_a +1 );i++)
      collection[i] = number_a + i;
  }

  else if(number_a > number_b) {
    for(var j = 0;j<(number_a - number_b +1);j++)
      collection[j] = number_a - j;
  }

  else collection[0] = number_a;

  for(i=0;i<collection.length;i++)
    if(collection[i]%2==0)
      collection_a[k++] = collection[i];

  return collection_a;

}

module.exports = get_integer_interval_2;
