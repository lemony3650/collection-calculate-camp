'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var collection_c=[];
  var k=0;

  for(var i = 0;i < collection_a.length;i++)
    collection_c[k++] = collection_a[i];
  for(i = 0; i < collection_b.length;i++)
  {
        var flag = 1;
        for(var j = 0; j < collection_c.length;j++) {
          if (collection_b[i] == collection_c[j]) {
            flag = 0;//如果B中的数据与C相同，退出不找。否则加入
            break;
          }
        }
        if (flag) collection_c[k++] = collection_b[i];
  }
  return collection_c;
}

module.exports = get_union;

