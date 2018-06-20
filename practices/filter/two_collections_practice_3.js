'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  let result=[];
  collection_a.filter(item=>collection_b.map(itom => {
    if (item % itom === 0) result.push(item);
  }));
  return result;

  // var collection_c=[];
  // var k = 0;
  // //在这里写入代码
  // for(var i = 0; i < collection_a.length;i++)
  //   for (var j = 0; j < collection_b.length;j++)
  //     if( collection_a[i] % collection_b[j] == 0 )
  //       collection_c[k++] = collection_a[i];
  // return collection_c;
}

module.exports = choose_divisible_integer;
