/**
 * Title: person.class.ts
 * Author: William Austin
 * Date: 11 August 2023
 * Description: Person class that implements a Person interface 
 */

import { IPerson } from "./person.interface";

class Person implements IPerson{

    firstName: string;
    lastName: string;

    constructor(firstName:string, lastName:string ){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("William", "Austin");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);