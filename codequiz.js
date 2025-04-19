function reverse(str) {
    const reversed = [];
    let charLength = str.length - 1;

    for (let i = charLength; i >= 0; i--) {
        reversed.push(str[i]);
    }

    return reversed.join('')
}
console.log(reverse("Hello!"))