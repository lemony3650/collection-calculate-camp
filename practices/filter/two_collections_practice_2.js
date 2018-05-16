'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var collection_c=[];
  var k = 0;
  //在这里写入代码
  for(var i = 0; i < collection_a.length;i++) {
    var flag = 1;
    for (var j = 0; j < collection_b.length; j++) {

      if (collection_a[i] == collection_b[j]) {
        flag = 0;
        break;
      }
    }
      if(flag)
        collection_c[k++] = collection_a[i];

  }
  return collection_c;
}

module.exports = choose_no_common_elements;
