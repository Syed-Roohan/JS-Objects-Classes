console.log("Question # 1 -----------> ");
/*Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties
and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance 
methods. Incomes is an array of objects income and its description and expenses is also an array
of objects having expense and its description.
class PersonAccount{
    constructor(firstname, lastname, Income, Expense){
        this.firstname = firstname;
        this.lastname = lastname;
        this.Income = Income;
        this.Expense = Expense;
    }
    totalIncome(){
        alert(`Total Income Is: ${this.Income}`);
        console.log(`Total Income Is: ${this.Income}`);
    }
    totalExpense(){
        alert(`Total Expense Is: ${this.Expense}`);
        console.log(`Total Expense Is: ${this.Expense}`)
    }
    accountInfo(){
        let name = this.firstname + " " + this.lastname;
        alert(`Name: ${name} \n Income: ${this.Income} \n Expense: ${this.Expense}`);
        console.log(`Name: ${name} \n Income: ${this.Income} \n Expense: ${this.Expense}`);
    }
    addIncome(){
        let addIncome = +prompt("Ënter Income: ");
        this.Income += addIncome;
        alert("Ïncome Added Successfully");
    }
    addExpense(){
        let addExpense = +prompt("Ënter Expense: ");
        this.Expense += addExpense;
        alert("Expense Added Successfully");
    }
    accountBalance(){
        let Balance = this.Income - this.Expense;
        alert(`Account Balance: ${Balance}`);
        console.log(`Account Balance: ${Balance}`);
    }
}
const Object = new PersonAccount("Syed", "Roohan", 100, 20);
Object.accountInfo();
Object.addIncome();
Object.totalIncome();
Object.addExpense();
Object.totalExpense();
Object.accountBalance();
Object.accountInfo();
*/
console.log("Question # 2 & 3 -----------> ");
/*
Question # 2 ----------------------->
Create an Automobile class. The class will have name, model, color, type properties 
and create different methods e.g openOrCloseDoor() logs doors are opened or closed, 
start() logs car is ready for drive. 
Question # 3 ----------------------->
Create Car, Bus and Truck child class from the Automobile Class.*/
class Autumobile{
    constructor(name, model, color, type){
        this.name = name;
        this.model = model;
        this.color = color;
        this.type = type;
    }
    OpenOrCloseDoor(choice){
        if(choice=="Open" || choice=="open"){
            alert("Car Door Opened!\n");
            console.log("Car Door Opened!\n");
        }
        else if(choice=="Close" || choice=="close"){
            alert("Car Door Closed!\n");
            console.log("Car Door Closed!\n");
        }
        else if((choice != "open" || choice != "Open") && (choice == "close" || choice == "Close")){
            alert("Car Door Is Already Closed!\n");
            console.log("Car Door Is Already Closed!\n");
        }
        else if((choice == "open" || choice == "Open") && (choice != "close" || choice != "Close")){
            alert("Car Door Is Already Opened!\n");
            console.log("Car Door Is Already Opened!\n");
        }
        else{
            alert("Invalid Entry");
            console.log("Invalid Entry");
        }

    }
    Start(choice){
        if(choice=="Close" || choice=="close"){
            alert("Car Is Ready To Start/Drive");
            console.log("Car Is Ready To Start/Drive");
        }
        else{
            alert("Car Is NOT Ready To Start/Drive");
            console.log("Car Is NOT Ready To Start/Drive");
        }
    }
}
class Car extends Autumobile{
    constructor(name, model, color , type, FuelConsumption){
        super(name, model, color, type);
        this.FuelConsumption = FuelConsumption;
    }
}
class Bus extends Autumobile{
    constructor(name, model, color , type, FuelConsumption){
        super(name, model, color, type);
        this.FuelConsumption = FuelConsumption;
    }
}
class Truck extends Autumobile{
    constructor(name, model, color , type, vehicleWeight){
        super(name, model, color, type);
        this.vehicleWeight = vehicleWeight;
    }
}
// const Car = new Autumobile("Suzuki Alto", 2022, "White", "SEDAN");
// let choice = prompt("Do You Want To Open Or Close Door Of Car\nType Open/Close: ");
// Car.OpenOrCloseDoor(choice);
// Car.Start(choice);
let choice = prompt("Do You Want To Open Or Close Door Of Car\nType Open/Close: ");
const car = new Car();
car.OpenOrCloseDoor(choice);
car.Start(choice);