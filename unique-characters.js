/*
  Implement an algorithm to determine if all characters in a string are unique. 
*/

function allUniqueCharsWithSet(input) {
  const uniqueChars = new Set();

  for (const c of input) {
    if (uniqueChars.has(c)) return false;
    uniqueChars.add(c);
  }

  return true;
}

function allUniqueChars(input) {
  let seen = "";

  for (const c of input) {
    // not unique if c has been seen
    if (seen.indexOf(c) > -1) return false;
    seen += c;
  }

  return true;
}

// "abc"  index of z .... -1

["abc", "absk", ""].forEach(i => {
  console.log(allUniqueChars(i) === true ? "PASS" : "FAIL");
});

["abc", "abbsk", "  "].forEach(i => {
  console.log(allUniqueChars(i) === false ? "PASS" : "FAIL");
});
