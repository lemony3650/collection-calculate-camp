'use strict';
var rank_asc = function(collection){

  return collection.sort().reverse();   //.sort()排序

  // for(var i=0; i<collection.length;i++)
  //   for(var j =0; j<collection.length-i-1;j++)
  //     if(collection[j]<collection[j+1])
  //     {
  //       var temp =collection[j];
  //       collection[j] = collection[j+1];
  //       collection[j+1]=temp;
  //     }
  //     return collection;
};

module.exports = rank_asc;
