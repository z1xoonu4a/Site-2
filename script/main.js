class PersonInformation {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  returnResult() {
    console.log(`Hello ${this.name} you ${this.age} age!`);
  }
}

const person = new PersonInformation("Dima", 17);

const listName = ["Dima", "Kostya", "Polina"];

if (listName.includes("Dima")) {
  console.log("data");
}

let d = ''
let v

if(!d) {
  v = d
}
else {
  v = false
}

console.log(v)
