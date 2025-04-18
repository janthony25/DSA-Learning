
// Count Character Frequency
// Input: "banana"
// Output: { b:1, a:3, n:2 }

function charFrequency(str) {
    const map = {};

    for(let i = 0; i < str.length; i++) {
        const char = str[i];

        if(!map[char]) {
            map[char] = 1;
        }
        else {
            map[char]++;
        }
    }

    return map;
}

console.log(charFrequency("banana"))