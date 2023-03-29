// INDEX:
// SECTION 1: functions
// SECTION 2: testing functions

//SECTION 1
// Iteration 1: Names and Input
function Iteration1(hacker1, hacker2) {
  return `The driver's name is ${hacker1} \nThe navigator's name is " + ${hacker2}`;
}

// Iteration 2: Conditionals
function Iteration2(hacker1, hacker2) {
  if (hacker1.length > hacker2.length) {
    return (
      "The driver has the longest name, it has " +
      hacker1.length +
      " characters."
    );
  } else if (hacker1.length < hacker2.length) {
    return (
      "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
    );
  } else {
    return `Wow, you both have equally long names, ${hacker1.length} characters!`;
  }
}

// Iteration 3: Loops
function Iteration3(hacker1, hacker2) {
  driverName = "";
  navigatorName = "";
  for (i = 0; i < hacker1.length; i++) {
    driverName += hacker1[i].toUpperCase() + " ";
  }
  for (letter of hacker2) {
    navigatorName = letter + navigatorName;
  }

  if (hacker1 > hacker2) {
    return `The driver's name is below. \n${driverName}\nThe navigator's name is below, reversed.\n${navigatorName}\nYo, the navigator goes first, definitely`;
  } else if (hacker1 < hacker2) {
    return `The driver's name is below.\n${driverName}\nThe navigator's name is below, reversed.\n${navigatorName}\nThe driver's name goes first`;
  } else if (hacker1 === hacker2) {
    return `The driver's name is below.\n${driverName}\nThe navigator's name is below, reversed.\n${navigatorName}\nWhat?! You both have the same name`;
  }
}

//bonus1
function bonus1_1(text) {
  text = text.replaceAll("\n", "");
  return text.split(" ").length;
}

function bonus1_2(longText) {
  let etArray = longText.split(" ");
  let etCounter = 0;
  for (i = 0; i < etArray.length; i++) {
    if (etArray[i] === "et") {
      etCounter++;
    }
  }
  return etCounter;
}

//bonus2
let phraseToCheck = "No 'x' in Nixon";
function checkPalindrome(phrase) {
  let backwardsPhrase = "";
  let originalPhrase = phrase
    .replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replaceAll(" ", "")
    .toLowerCase()
    .replaceAll("'", "");
  for (letter of originalPhrase) {
    backwardsPhrase = letter + backwardsPhrase;
  }
  if (originalPhrase === backwardsPhrase) {
    return true;
  } else {
    return false;
  }
}

//SECTION 2
let iteration1TestCases = [["john", "michael"]];
let iteration2TestCases = [
  ["joey", "peter"],
  ["joey", "pete"],
  ["peter", "joey"],
];
let iteration3TestCases = [
  ["joey", "peter"],
  ["joey", "joey"],
  ["peter", "joey"],
  ["joey", "Joey"],
];

bonus1TestCase = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus vehicula luctus. Proin id lacus nisl. Praesent luctus pulvinar leo, at sodales urna gravida quis. Vivamus dictum ipsum turpis, at dictum dui tincidunt viverra. Vivamus leo nisl, aliquet nec justo id, malesuada tincidunt neque. Ut lacus dolor, accumsan ut aliquet vitae, tincidunt sit amet ante. Etiam ullamcorper efficitur fringilla. Morbi tincidunt libero ac risus feugiat, ut facilisis nisi tristique. Aliquam congue quis tellus non porttitor. Ut in arcu vitae ex consectetur finibus et ut mauris. Nam fringilla lorem libero, eget hendrerit erat ullamcorper nec. In ac nisl orci. Integer nisl neque, bibendum ut porttitor vel, hendrerit ac orci. 
  
  Morbi leo nisi, varius nec quam in, molestie ultrices dolor. Cras eu mauris ante. Pellentesque varius ac neque nec condimentum. Donec ac elementum dui, vel faucibus nulla. Ut efficitur lobortis maximus. Duis sagittis ultrices rutrum. Donec efficitur sit amet est ac mollis. Nunc a risus sed lectus faucibus congue vel a erat. Integer ut maximus augue, sit amet ultricies est. Duis non sapien orci. Nam sem risus, vehicula in magna at, pretium interdum sem. 
  
  Quisque a fermentum dui. Proin fringilla est sed ipsum tincidunt facilisis. Sed non lorem ut nisi rutrum vestibulum. Vivamus mauris augue, commodo nec lacinia sed, luctus nec enim. Suspendisse ac sollicitudin ante. Nulla mattis vitae leo sit amet egestas. Quisque leo mauris, aliquet et odio ac, imperdiet ornare nisi. Nulla purus risus, tristique non diam ac, accumsan sollicitudin quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum tellus erat, fringilla a tortor a, lacinia aliquet metus.`,
];

bonus2TestCases = [
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "race car",
  "stack cats",
  "step on no pets",
  "taco cat",
  "put it up",
  "No 'x' in Nixon",
];

//test iteration cases function
function testIteration(testcases, IterationFunction) {
  let testCaseNumber = 1;
  for (testcase of testcases) {
    console.log(
      `Test case ${testCaseNumber}: \n${IterationFunction(
        testcase[0],
        testcase[1]
      )}`
    );
    testCaseNumber++;
  }
}

//test bonus cases funciton
function testBonus(testcases, BonusFunction) {
  let testCaseNumber = 1;
  for (testcase of testcases) {
    console.log(`Test case ${testCaseNumber}:\n${BonusFunction(testcase)}`);
    testCaseNumber++;
  }
}

//console log the test cases
console.log(
  "\n\nIteration 1 Test Cases: \nDescription: who is the driver, who is the navigator"
);
testIteration(iteration1TestCases, Iteration1);

console.log("\n\nIteration 2 Test Cases: \nDescription: which name is longer");
testIteration(iteration2TestCases, Iteration2);

console.log(
  "\n\nIteration 3 Test Cases: \nDescription: string manipulation and sorting alphabetically"
);
testIteration(iteration3TestCases, Iteration3);

console.log(
  "\n\nBonus 1 Test Cases: \nDescription: count words and count 'et' instances"
);
testBonus(bonus1TestCase, bonus1_1);
testBonus(bonus1TestCase, bonus1_2);

console.log(
  "\n\nBonus 2 Test Cases: \nDescription: check if the phrase is a palindrome"
);
testBonus(bonus2TestCases, checkPalindrome);
