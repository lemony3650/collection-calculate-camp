'use strict';

function double_to_one(collection) {
  var  collection_c=[];
  var  k=0;
  for(var i = 0 ; i < collection.length;i++) {
    if (collection[i].length >= 1) {
      for (var j = 0; j < collection[i].length; j++)
        collection_c[k++] = collection[i][j];
    }
    else
      collection_c[k++] = collection[i];
  }
    return collection_c;

}

module.exports = double_to_one;
