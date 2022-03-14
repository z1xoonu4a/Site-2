class Person {
	constructor(name, age = 0) {
		;(this.name = name), (this.age = age)
	}
}

const personInformation = new Person('Dima', 17)

console.log(personInformation.name)
