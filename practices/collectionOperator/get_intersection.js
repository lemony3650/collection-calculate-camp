'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  return collection_b.filter(item => collection_a.includes(item));

  // var collection_c=[];
  // var k=0;
  // for(var i = 0 ; i < collection_b.length;i++)
  //   for(var j = 0; j < collection_a.length;j++)
  //   {
  //     //A中每个与B做比较
  //     if(collection_a[j] == collection_b[i])
  //       collection_c[k++] = collection_a[j];
  //   }
  //   return collection_c;
}

module.exports = get_intersection;
