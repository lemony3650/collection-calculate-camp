'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var sum=0;
  var average = 0;

  for(var i = 0; i < collection.length;i++)
    sum += collection[i];

  average = sum / collection.length;

  average = String.fromCharCode(96 + Math.ceil(average));

  return average;

}

module.exports = average_to_letter;

