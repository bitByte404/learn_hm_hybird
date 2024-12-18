interface Person {
    name: string
    age: number
}

class PersonModel implements Person {
    name: string;
    age: number;

    constructor(data: Person) {
        this.age = data.age
        this.name = data.name
    }
}

const p = new PersonModel({
    name: '你好',
    age: 18
})