"use strict";
class Vehicle {
    constructor(make, model, year, rented = false) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._rented = rented;
    }
    make() {
        return this._make;
    }
    model() {
        return this._model;
    }
    year() {
        return this._year;
    }
    rented() {
        return this._rented;
    }
    setRented(rented) {
        this._rented = rented;
    }
    rent() {
        if (this._rented) {
            return "This vehicle is already rented.";
        }
        else {
            this.setRented(true);
            return "Vehicle has rented successfully.";
        }
    }
    return() {
        if (!this._rented) {
            return "This vehicle has not been rented yet.";
        }
        else {
            this.setRented(false);
            return "Vehicle returned successfully.";
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, seats, drivingSeatSide, rented = false) {
        super(make, model, year, rented);
        this._drivingSeatSide = drivingSeatSide;
        this._seats = seats;
    }
    rentalRate() {
        return 1000;
    }
    drivingSeatSide() {
        return this._drivingSeatSide;
    }
    seats() {
        return this._seats;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, cargoCapacity, numOfTyres, rented = false) {
        super(make, model, year, rented);
        this._numOfTyres = numOfTyres;
        this._cargoCapacity = cargoCapacity;
    }
    rentalRate() {
        return 2500;
    }
    numOfTyres() {
        return this._numOfTyres;
    }
    cargoCapacity() {
        return this._cargoCapacity;
    }
}
// Crate a new car object 
const car = new Car("Suzuki", "Cultus", 2021, 4, "left");
console.log("Car");
// check rentel rate of car. 
console.log("Vehicle Rental Rate is", car.rentalRate());
// return car but car is not rented yet. 
console.log(car.return());
// give car on rent. 
console.log(car.rent());
// car is alredy on rent so message will be diffrent. 
console.log(car.rent());
// return the car. 
console.log(car.return());
// Crate a new truck object 
const truck = new Truck("Mazda", "F-150", 2020, 1000, 3);
console.log("Truck");
// give truck on rent. 
console.log(truck.rent());
// return the truck. 
console.log(truck.return());
// check rentel rate of truck. 
console.log("Vehicle Rental Rate is", truck.rentalRate());
//# sourceMappingURL=index.js.map