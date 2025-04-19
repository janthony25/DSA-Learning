// "
// USE SET()
// 5. Longest Substring Without Repeating Characters

// ❓ Question:
// Return the length of the longest substring with no repeating characters.


// Input: ""abcabcbb""
// Output: 3"

function longestSubstring(str) {
    let longestStr = 0;
    let set = new Set();
    
    let left = 0;
    let right = 0;

    while(right < str.length) {
        const char = str[right];

        if(!set.has(char)) {
            set.add(char);
            longestStr = Math.max(longestStr, set.size);
            right++;
        }
        else {
            const char = str[left];
            set.delete(char);
            left++;
        }
    }

    return longestStr;
}

console.log(longestSubstring("abcabcbb"))