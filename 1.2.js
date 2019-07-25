/*
Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
*/

function isPerm(text1, text2) {
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

  return text2_ === "" ? true : false;
}

// tests

console.log(
  isPerm("abc", "cba") === true ? "PASS" : "FAIL",
  isPerm("abc", "cbaa") === false ? "PASS" : "FAIL",
  isPerm("abc", "baa") === false ? "PASS" : "FAIL",
  isPerm("bacc", "baca") === false ? "PASS" : "FAIL",
  isPerm("", "") === true ? "PASS" : "FAIL",
  isPerm("a", "a") === true ? "PASS" : "FAIL",
  isPerm("a", "b") === false ? "PASS" : "FAIL",
  isPerm("happy", "hyapp") === true ? "PASS" : "FAIL"
);
