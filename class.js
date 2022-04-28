class Person{
    constructor(fname,lname,age,address){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.address = address;
    }

    get details() {
        return `name is: ${this.fname} ${this.lname} \n age is ${this.age} \n address is ${this.address}`;
    }

}

var Person1 = new Person("bot1","symbol","56","delhi");

console.log(Person1.details);