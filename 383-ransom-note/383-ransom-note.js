/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
 while(ransomNote.length){
    var ind = magazine.indexOf(ransomNote[0])
    if(ind >= 0){
      magazine = magazine.slice(0, ind) + magazine.slice(ind+1, magazine.length)
      ransomNote = ransomNote.slice(0, 0) + ransomNote.slice(1, ransomNote.length)
    }
    else return false
  }
  return ransomNote.length != 0 ? false : true
};

