'use strict';
var calculate_average = function(collection){

  var collection_a=[];
  var  j = 0;
  var sum=0;
  var average = 0;

  for(var i=0;i<collection.length;i++)
    if(collection[i]%2==0)
      collection_a[j++] = collection[i];
  for(i = 0; i < collection_a.length;i++)
    sum += collection_a[i];

  average = sum / collection_a.length;

  return average;

};
module.exports = calculate_average;
