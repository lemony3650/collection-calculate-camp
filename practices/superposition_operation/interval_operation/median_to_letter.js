'use strict';

function median_to_letter(collection) {

  //在这里写入代码

  var collection=[];
  var mid = 0;

  for (var i = 0; i < collection.length; i++)
    for (var j = 0; j < collection.length - i - 1; j++)
      if (collection[j] > collection[j + 1]) {
        var temp = collection[j];
        collection[j] = collection[j + 1];
        collection[j + 1] = temp;
      }

  if (collection.length % 2 != 0)
    mid = collection[parseInt(collection.length / 2)];
  else
    mid = (collection[parseInt(collection.length / 2)] + collection[parseInt(collection.length / 2) - 1]) / 2;


  if(Math.ceil(mid)<27)
    collection[0] = String.fromCharCode(97 + mid -1  );
  else
    collection[0] = String.fromCharCode(97 + ((mid-1)/26) -1) + String.fromCharCode(97 + ((mid -1)%26));

  return collection[0];
}

module.exports = median_to_letter;
