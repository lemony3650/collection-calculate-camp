'use strict';

function amount_even(collection) {

  //在这里写入代码
  var collection_a=[];
  var  j = 0;
  var sum=0;


  for(var i=0;i<collection.length;i++)
    if(collection[i]%2==0)
      collection_a[j++] = collection[i];

  for(i = 0; i < collection_a.length;i++)
    sum += collection_a[i];

  return sum;

}

module.exports = amount_even;
