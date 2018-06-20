'use strict';

function find_last_even(collection) {
  //在这里写入代码
  for( let i=collection.length;i>=0;i--){
    if (collection[i]%2===0) return collection[i];
  }

  // for(var i = collection.length; i > 0;i--)
  //   if(collection[i]%2 == 0) {
  //     return collection[i];
  //     break;
  //   }
}

module.exports = find_last_even;
