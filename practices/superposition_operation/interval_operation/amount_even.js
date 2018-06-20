'use strict';

function amount_even(collection) {
  let col1=collection.filter(item=>item%2===0);
  let col2=col1.reduce((prev,cur)=>{
    return prev+cur;
  });
  return col2;

  //在这里写入代码
  // var collection_a=[];
  // var  j = 0;
  // var sum=0;
  // for(var i=0;i<collection.length;i++)
  //   if(collection[i]%2==0)
  //     collection_a[j++] = collection[i];
  // for(i = 0; i < collection_a.length;i++)
  //   sum += collection_a[i];
  // return sum;
}

module.exports = amount_even;
