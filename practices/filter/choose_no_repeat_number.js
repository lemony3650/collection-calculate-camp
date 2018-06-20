'use strict';

function choose_no_repeat_number(collection) {

  var noRepest= Array.from(new Set(collection));//Set  没有重复的数据
  return noRepest;

  // var collection_c=[];var k=0;
  // for(var i = 0; i < collection.length;i++)
  // {
  //   var flag = 1;
  //   for(var j = 0; j < collection_c.length;j++) {
  //     if (collection[i] == collection_c[j]) {
  //       flag = 0;break;
  //     }
  //   }
  //   if (flag) collection_c[k++] = collection[i];
  // }
  // return collection_c;
}

module.exports = choose_no_repeat_number;
