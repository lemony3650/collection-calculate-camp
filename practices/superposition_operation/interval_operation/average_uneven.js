'use strict';

function average_uneven(collection) {

  let col1=collection.filter(item=>item%2===1);
  let col2=col1.reduce((prev,cur)=>{
    return prev+cur;
  });
  let average=col2/col1.length;
  return average;

  // //在这里写入代码
  // var collection_a=[];
  // var  j = 0;
  // var sum=0;
  // var average = 0;
  //
  // for(var i=0;i<collection.length;i++)
  //   if(collection[i]%2!=0)
  //     collection_a[j++] = collection[i];
  //
  // for(i = 0; i < collection_a.length;i++)
  //   sum += collection_a[i];
  //
  // average = sum / collection_a.length;
  // return average;

}

module.exports = average_uneven;
