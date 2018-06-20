'use strict';

function double_to_one(collection) {

  return Array.from(new Set(Array.prototype.concat.apply([],collection)));

  // //在这里写入代码
  // var  collection_a=[];
  // var  collection_c=[];
  // var  k=0;
  // for(var i = 0 ; i < collection.length;i++) {
  //   if (collection[i].length >= 1) {
  //     for (var j = 0; j < collection[i].length; j++)
  //       collection_c[k++] = collection[i][j];
  //   }
  //   else collection_c[k++] = collection[i];
  // }
  // k=0;
  // for(i = 0; i < collection_c.length;i++)
  // {
  //   var flag = 1;
  //   for(var j = 0; j < collection_c.length;j++) {
  //     if (collection_c[i] == collection_a[j]) {
  //       flag = 0;break;
  //     }
  //   }
  //   if (flag) collection_a[k++] = collection_c[i];
  // }
  // return collection_a;
}

module.exports = double_to_one;
