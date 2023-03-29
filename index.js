// Iteration 1: Names and Input
function Iteration1(hacker1, hacker2) {
  console.log("The driver's name is " + hacker1);
  console.log("The navigator's name is " + hacker2);
}
console.log("Iteration 1 Test Cases");
console.log("\nTest Case 1");
Iteration1("john", "michael");

// Iteration 2: Conditionals

let hacker1 = "pete";
let hacker2 = "joey";
function Iteration2(hacker1, hacker2) {
  if (hacker1.length > hacker2.length) {
    console.log(
      "The driver has the longest name, it has " +
        hacker1.length +
        " characters."
    );
  } else if (hacker1.length < hacker2.length) {
    console.log(
      "It seems that the navigator has the longest name, it has " +
        hacker2.length +
        " characters."
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
  }
}
console.log("\n\nIteration 2 Test Cases");
console.log("\nTest case 1.");
Iteration2("joey", "peter");
console.log("\n\nTest case 2.");
Iteration2("joey", "pete");
console.log("\n\nTest case 3.");
Iteration2("peter", "joey");

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
  console.log("The driver's name is below.");
  console.log(driverName);
  console.log("The navigator's name is below, reversed.");
  console.log(navigatorName);

  if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
  } else if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
  } else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
  }
}
console.log("\n\nIteration 3 Test Cases");
console.log("\nTest case 1.");
Iteration3("joey", "peter");
console.log("\n\nTest case 2.");
Iteration3("joey", "joey");
console.log("\n\nTest case 3.");
Iteration3("peter", "joey");
console.log("\n\nTest case 4");
Iteration3("joey", "Joey");

//bonus1
let longText = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus vehicula luctus. Proin id lacus nisl. Praesent luctus pulvinar leo, at sodales urna gravida quis. Vivamus dictum ipsum turpis, at dictum dui tincidunt viverra. Vivamus leo nisl, aliquet nec justo id, malesuada tincidunt neque. Ut lacus dolor, accumsan ut aliquet vitae, tincidunt sit amet ante. Etiam ullamcorper efficitur fringilla. Morbi tincidunt libero ac risus feugiat, ut facilisis nisi tristique. Aliquam congue quis tellus non porttitor. Ut in arcu vitae ex consectetur finibus et ut mauris. Nam fringilla lorem libero, eget hendrerit erat ullamcorper nec. In ac nisl orci. Integer nisl neque, bibendum ut porttitor vel, hendrerit ac orci. 

Morbi leo nisi, varius nec quam in, molestie ultrices dolor. Cras eu mauris ante. Pellentesque varius ac neque nec condimentum. Donec ac elementum dui, vel faucibus nulla. Ut efficitur lobortis maximus. Duis sagittis ultrices rutrum. Donec efficitur sit amet est ac mollis. Nunc a risus sed lectus faucibus congue vel a erat. Integer ut maximus augue, sit amet ultricies est. Duis non sapien orci. Nam sem risus, vehicula in magna at, pretium interdum sem.

Quisque a fermentum dui. Proin fringilla est sed ipsum tincidunt facilisis. Sed non lorem ut nisi rutrum vestibulum. Vivamus mauris augue, commodo nec lacinia sed, luctus nec enim. Suspendisse ac sollicitudin ante. Nulla mattis vitae leo sit amet egestas. Quisque leo mauris, aliquet et odio ac, imperdiet ornare nisi. Nulla purus risus, tristique non diam ac, accumsan sollicitudin quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum tellus erat, fringilla a tortor a, lacinia aliquet metus.`;

function bonus1(text) {
  text = text.replaceAll("\n", "");
  return text.split(" ").length;
}
console.log("\n\nThe number of words in the paragraph is " + bonus1(longText));

let etArray = longText.split(" ");
let etCounter = 0;
for (i = 0; i < etArray.length; i++) {
  if (etArray[i] === "et") {
    etCounter++;
  }
}
console.log("\n\nBonus 1 Test Cases");
console.log("et appears " + etCounter + " times in the text.");

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

console.log("\n\nBonus 2 Test Cases");
console.log("Test case 1");
console.log(checkPalindrome("A man, a plan, a canal, Panama!"));
console.log("Test case 2");
console.log(checkPalindrome("Amor, Roma"));
console.log("Test case 3");
console.log(checkPalindrome("race car"));
console.log("Test case 4");
console.log(checkPalindrome("stack cats"));
console.log("Test case 5");
console.log(checkPalindrome("step on no pets"));
console.log("Test case 6");
console.log(checkPalindrome("taco cat"));
console.log("Test case 7");
console.log(checkPalindrome("put it up"));
console.log("Test case 8");
console.log(checkPalindrome("No 'x' in Nixon"));
