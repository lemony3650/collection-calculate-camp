'use strict';

function compare_collections(collection_a, collection_b) {

  return collection_b.toString()===collection_a.toString(); //把集合变成字符串比较

  // //在这里写入代码
  // var max = collection_a.length >= collection_b.length? collection_a.length:collection_b.length;
  // for(var i = 0; i < max;i++) {
  //   if (collection_a[i] != collection_b[i]) {
  //     break;
  //     return false;
  //   }
  // }
  // return  true;
}

module.exports = compare_collections;


