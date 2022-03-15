class PersonInformation {
	constructor(name, age, budget) {
		;(this.name = name), (this.age = age)
	}

	result() {
		console.log(`Hello ${this.name} you ${this.age} age!`)
	}
}

const person = new PersonInformation('Dima', 17)

person.result()
