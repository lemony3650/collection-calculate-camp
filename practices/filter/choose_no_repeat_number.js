'use strict';

function choose_no_repeat_number(collection) {
  var collection_c=[];
  var k=0;

  for(var i = 0; i < collection.length;i++)
  {
    var flag = 1;
    for(var j = 0; j < collection_c.length;j++) {
      if (collection[i] == collection_c[j]) {
        flag = 0;
        break;
      }
    }
    if (flag)
      collection_c[k++] = collection[i];
  }
  return collection_c;

  //在这里写入代码
}

module.exports = choose_no_repeat_number;
