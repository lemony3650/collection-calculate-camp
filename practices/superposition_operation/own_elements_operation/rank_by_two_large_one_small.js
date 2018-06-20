'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  for(var i=0; i<collection.length;i++)
    for(var j =0; j<collection.length-i-1;j++)
      if(collection[j]>collection[j+1])
      {
        var temp =collection[j];
        collection[j] = collection[j+1];
        collection[j+1]=temp;
      }
  var temp=0;
  for(var i=0; i < collection.length/3-1;i++)
    {  temp = collection[3*i];
       collection[3*i]=collection[3*i+1];
       collection[3*i+1]=collection[3*i+2];
       collection[3*i+2]=temp
    }
    return collection;
}
module.exports = rank_by_two_large_one_small;
