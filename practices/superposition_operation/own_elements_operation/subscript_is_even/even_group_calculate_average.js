'use strict';
var even_group_calculate_average = function(collection){

  var collection_a=[];
  var j=0;
  var count=[0,0,0];
  var sum = [0,0,0];
  var average = [0,0,0];

  for(var i=0;i<collection.length;i++)
    if(collection[i]%2==0)   collection_a[j++] = collection[i];
  if(j == 0) return [0] ;

  for(var i=0;i < collection_a.length;i++)
  {
    if(parseInt(collection_a[i]/100))
    {
      sum[2] += collection_a[i];
      count[2]++;
    }
    else if(parseInt(collection_a[i]/10))
    {
      sum[1] += collection_a[i];
      count[1]++;
    }
    else {sum[0] += collection_a[i];count[0]++;}
  }
  average[0] = Math.floor(sum[0]/count[0]);
  average[1] = Math.floor(sum[1]/count[1]);
  average[2] = Math.floor(sum[2]/count[2]);
  if(count[0]==0 && count[1]==0) return average[2];
  return average;

};
module.exports = even_group_calculate_average;
