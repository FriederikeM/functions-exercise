function greet(userName) {
  if (userName === "") {
    return "Hello Mr. Nobody";
  } else {
    let result = `Hello ${userName}`;
    return result;
  }
}

let var1 = greet("Rikki");
let var2 = greet("Alex");
let var3 = greet("Johannes");
let var4 = greet("");

alert(var1);
alert(var2);
alert(var3);
alert(var4);
