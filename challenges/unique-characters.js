/*
    Implement an algorithm to determine if all characters in a string are unique. 
*/

// tests

['abc', 'absk', ''].forEach(i => {
    console.log(allUniqueChars(i) === true ? 'PASS' : 'FAIL');
});

['aabc', 'abbsk', '  '].forEach(i => {
    console.log(allUniqueChars(i) === false ? 'PASS' : 'FAIL');
});

// code

function allUniqueCharsWithSet(input) {
    const uniqueChars = new Set();

    for (const c of input) {
        if (uniqueChars.has(c)) return false;
        uniqueChars.add(c);
    }

    return true;
}

function allUniqueChars(input) {
    let seen = '';

    for (const c of input) {
        // not unique if c has been seen
        if (seen.indexOf(c) > -1) return false;
        seen += c;
    }

    return true;
}
