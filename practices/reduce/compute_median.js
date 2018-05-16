'use strict';

function compute_median(collection) {
 // 在这里写入代码
  for(var i=0; i<collection.length;i++)
    for(var j =0; j<collection.length-i-1;j++)
      if(collection[j]>collection[j+1])
      {
        var temp =collection[j];
        collection[j] = collection[j+1];
        collection[j+1]=temp;
      }

  if(collection.length % 2 != 0)
    return collection[parseInt(collection.length/2)];
  else
    return (collection[parseInt(collection.length/2)] + collection[parseInt(collection.length/2)-1])/2;

}

module.exports = compute_median;


