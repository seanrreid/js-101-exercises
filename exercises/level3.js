function lvl3exercise1() {
  // Create a "hello" and a "world", return the concatenation of the two
  return "hello" + "world";
}

function lvl3exercise2() {
  // Create a "hello" and a 12, return the concatenation of the two
  return "hello" + 12;
}

function lvl3exercise3() {
  // Create a variable that equals 12 and convert it to a string with concatenation. Return it.
  var twelve = 12;
  return "" + twelve; // Adding an empty string to a variable with a data type will create a string
}

function lvl3exercise4() {
  // Create a "hello world!" string. Return the length of the string
  return "hello world!".length;
}

function lvl3exercise5() {
  // Create a "hello world!" string. Return the index of the word "world".
  const helloWorld = "Hello World!";
  console.log("Index of the word World is", helloWorld.indexOf("World"));
  return helloWorld.indexOf("World");
}
