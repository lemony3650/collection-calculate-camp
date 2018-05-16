'use strict';
var number_map_to_word_over_26 = function(collection){

  var collection_c=[];
  var j=0;

  for(var i = 0;i < collection.length ;i++)
  {
    if(collection[i] < 27)
      collection_c[j++] = String.fromCharCode(97 + collection[i] -1);
    else
      collection_c[j++] = String.fromCharCode(97 + ((collection[i]-1)/26) -1 ) + String.fromCharCode(97 + ((collection[i]-1)%26));
  }
  return collection_c;
};

module.exports = number_map_to_word_over_26;
