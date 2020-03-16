/*
    Given two strings, write a method to decide if one is a permutation of the other.
*/

// tests

console.log(
    isPermutation('abc', 'cba') === true ? 'PASS' : 'FAIL',
    isPermutation('abc', 'cbaa') === false ? 'PASS' : 'FAIL',
    isPermutation('abc', 'baa') === false ? 'PASS' : 'FAIL',
    isPermutation('bacc', 'baca') === false ? 'PASS' : 'FAIL',
    isPermutation('', '') === true ? 'PASS' : 'FAIL',
    isPermutation('a', 'a') === true ? 'PASS' : 'FAIL',
    isPermutation('a', 'b') === false ? 'PASS' : 'FAIL',
    isPermutation('happy', 'hyapp') === true ? 'PASS' : 'FAIL'
);

// code

function isPermutation(text1, text2) {
    // impossible that they are permutations
    if (text1.length !== text2.length) {
        return false;
    }

    let text2_ = text2;

    for (c of text1) {
        let i = text2_.indexOf(c);
        if (i === -1) {
            return false;
        }
        // remove c from text2_
        text2_ = text2_.slice(0, i) + text2_.slice(i + 1);
    }

    return text2_ === '' ? true : false;
}
