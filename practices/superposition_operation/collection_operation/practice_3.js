'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var collection_a=[];
  var  j = 0;
  var sum=0;

  for(var i=0;i<collection.length;i++)
    if(collection[i]%2!=0)
      collection_a[j++] = collection[i]*3+5;

  for(i = 0; i < collection_a.length;i++)
    sum += collection_a[i];

  return sum;

}

module.exports = hybrid_operation_to_uneven;

