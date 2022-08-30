// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Input: ransomNote = "a", magazine = "b"
// Output: false

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Input: ransomNote = "aa", magazine = "aab"
// Output: true


function canConstruct(ransomNote, magazine) {
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
 
console.log(canConstruct('aa', 'aab'))
console.log(canConstruct('a', 'b'))