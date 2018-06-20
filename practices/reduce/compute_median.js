'use strict';

function compute_median(collection) {
 // 在这里写入代码
  let num=0;
  collection.sort(function (a,b) {return a-b>0? 1:-1;});
  if(collection.length%2===0){
    num=(parseInt(collection[collection.length/2-1])+parseInt(collection[collection.length/2]))/2;//不加parseInt会变成字符串相加，而要的是数字相加
  }
  else if(collection.length%2!==0){
    num=parseInt(collection[((collection.length-1)/2)]);
  }
  return num;

  // for(var i=0; i<collection.length;i++)
  //   for(var j =0; j<collection.length-i-1;j++)
  //     if(collection[j]>collection[j+1])
  //     {
  //       var temp =collection[j];
  //       collection[j] = collection[j+1];
  //       collection[j+1]=temp;
  //     }
  //
  // if(collection.length % 2 != 0)
  //   return collection[parseInt(collection.length/2)];
  // else
  //   return (collection[parseInt(collection.length/2)] + collection[parseInt(collection.length/2)-1])/2;
}

module.exports = compute_median;


