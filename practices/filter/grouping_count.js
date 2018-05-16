'use strict';

function grouping_count(collection) {

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
}

module.exports = grouping_count;
