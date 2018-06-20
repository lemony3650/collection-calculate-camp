'use strict';

function choose_common_elements(collection_a, collection_b) {

  return collection_a.filter(item=>collection_b.includes(item));

  // var collection_c=[];
  // var k = 0;
  // for(var i = 0; i < collection_a.length;i++)
  //   for (var j = 0; j < collection_b.length;j++)
  //     if(collection_a[i] == collection_b[j]) collection_c[k++] = collection_a[i];
  // return collection_c;
}

module.exports = choose_common_elements;
