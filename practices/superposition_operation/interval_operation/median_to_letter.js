'use strict';

function median_to_letter(collection) {
  var collection_c=[];
  var mid = 0;

  for(var i=0; i<collection.length;i++)
    for(var j =0; j<collection.length-i-1;j++)
      if(collection[j]>collection[j+1])
      {
        var temp =collection[j];
        collection[j] = collection[j+1];
        collection[j+1]=temp;
      }
  if(collection.length % 2 != 0)
    mid = collection[Math.ceil(collection.length/2)];
  else
  mid = Math.ceil((collection[parseInt(collection.length/2)] + collection[parseInt(collection.length/2)-1])/2);

  if(mid < 27)
    collection_c[0] = String.fromCharCode(97 + mid-1);
  else
    collection_c[0] = String.fromCharCode(97 + mid/26 -1 ) + String.fromCharCode(97 + ((mid-1)%26));
  return collection_c[0];
}

module.exports = median_to_letter;
