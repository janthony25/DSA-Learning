

// Valid Anagram
// Input: s = "listen", t = "silent"
// Output: true

function isAnagram(s, t) {
    const map = {};

    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if(!map[s[i]]) {
            map[char] = 1;
        }
        else {
            map[char]++;
        }
    }

    for (let i = 0; i < t.length; i++) {
        const char = t[i];

        if (!map[t[i]]) {
            return false;
        }
        else {
            map[char]--;
        }
    }

    return true;
}

console.log(isAnagram("silent", "listen"))