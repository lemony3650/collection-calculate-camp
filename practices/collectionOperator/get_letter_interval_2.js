'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var collection=[];
  if(number_a < number_b) {
    for(var i = 0;i < (number_b - number_a +1 );i++)
    {
      if((number_a + i)<27)
         collection[i] = String.fromCharCode(97 + number_a -1 +i );
      else
        collection[i] = String.fromCharCode(97 + ((number_a+i-1)/26) -1) + String.fromCharCode(97 + ((number_a + i-1)%26));
    }
  }
  else if(number_a > number_b) {
    for(var j = 0;j < (number_a - number_b +1 );j++)
    {
      if((number_a - j) < 27)
        collection[j] = String.fromCharCode(97 + number_a -1 -j );
      else
        collection[j] = String.fromCharCode(97 + ((number_a-j-1)/26) -1 ) + String.fromCharCode(97 + ((number_a - j-1)%26));
    }
  }
  else collection[0] = String.fromCharCode(97 + ((number_a-1)/26) -1 ) + String.fromCharCode(97 + ((number_a -1)%26));
  return collection;
}

module.exports = get_letter_interval_2;

