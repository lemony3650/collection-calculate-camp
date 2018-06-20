'use strict';

function double_to_one(collection) {

  return Array.prototype.concat.apply([],collection);//apply自动打散参数， concat拼接

  // var  collection_c=[];
  // var  k=0;
  // for(var i = 0 ; i < collection.length;i++) {
  //   if (collection[i].length >= 1) {
  //     for (var j = 0; j < collection[i].length; j++)
  //       collection_c[k++] = collection[i][j];
  //   }
  //   else collection_c[k++] = collection[i];
  // }
  //   return collection_c;
}

module.exports = double_to_one;
