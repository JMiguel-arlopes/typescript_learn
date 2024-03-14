interface IPerson {
  id: number;
  name: string;
  age: number;
  sayMyName(): string;
}

class Person implements IPerson {
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return this.name;
  }
}

const Person1 = new Person(1, "joão", 23);
Person1.sayMyName();
