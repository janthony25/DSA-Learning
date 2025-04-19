// " // Character Frequency Counter
 // Problem:
 // Given a string, count how many times each character appears.

 // Input: hello
 // Output: { h: 1, e: 1, l: 2, o: 1 }"

 function charFreq(str) {
   const map = {};

   for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (!map[char]) {
            map[char] = 1;
        } else {
            map[char]++;
        }
   }

   return map;
 }

 console.log(charFreq("Hello"))