// " Are Two Strings Anagrams?

// ❓ Question:

// Check if two strings are anagrams (same letters, same frequency).

// 3. Are Two Strings Anagrams?
// ❓ Question:
// Check if two strings are anagrams (same letters, same frequency)."

function isAnagram(str1, str2) {
    const map = {};

    if (str1.length !== str2.length) return false;

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];

        if (!map[char]) {
            map[char] = 1;
        }
        else {
            map[char]++;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        const char = str2[i];

        if (!map[char]) {
            return false;
        }

        map[char]--;
    }

    return true;
}

console.log(isAnagram('asd', 'dsa'))
/*
str1: l i s t e n --- str2: silent   -> true
      0 1 2 3 4 5 
                    checking....
      a s d     ----  f s d
      0 1 2     ----  0 1 2

      map { a: 1, s: 1, d: 1}
compare     f
            listen      s i l e n t 
                        . . . . . .
     map { l: 0, i: 0, s: 0, t: 0, e: 0, n: 0 }
compare    

*/