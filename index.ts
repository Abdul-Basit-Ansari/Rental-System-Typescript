abstract class Vehicle {
    _make: string;
    _model: string;
    _year: number;
    _rented: boolean;
  
    constructor(make: string, model: string, year: number, rented: boolean = false) {
      this._make = make;
      this._model = model;
      this._year = year;
      this._rented = rented;
    }
  
    make(): string {
      return this._make;
    }
  
    model(): string {
      return this._model;
    }
  
    year(): number {
      return this._year;
    }
  
    rented(): boolean {
      return this._rented;
    }
  
    setRented(rented: boolean): void {
      this._rented = rented;
    }
  
    abstract rentalRate(): number;
  
    rent(): string {
      if (this._rented) {
        return "This vehicle is already rented.";
      } else {
        this.setRented(true);
        return "Vehicle has rented successfully.";
      }
    }
  
    return(): string {
      if (!this._rented) {
        return "This vehicle has not been rented yet.";
      } else {
        this.setRented(false);
        return "Vehicle returned successfully.";
      }
    }
  }
  
  class Car extends Vehicle {
    private _drivingSeatSide: "left" | "right";
    private _seats: number;
    constructor(make: string, model: string, year: number,seats:number, drivingSeatSide:"left" | "right", rented: boolean = false) {
      super(make, model, year, rented);
      this._drivingSeatSide = drivingSeatSide;
      this._seats = seats;
    }
  
    rentalRate(): number {
      return 1000;
    }
  
    drivingSeatSide(): string {
      return this._drivingSeatSide;
    }
    seats(): number {
      return this._seats;
    }
  }
  
  
  class Truck extends Vehicle {
    private _numOfTyres: number;
    private _cargoCapacity: number;
    constructor(make: string, model: string, year: number, cargoCapacity: number,numOfTyres:number, rented: boolean = false) {
      super(make, model, year, rented);
      this._numOfTyres = numOfTyres;
      this._cargoCapacity = cargoCapacity;
    }
  
    rentalRate(): number {
      return 2500;
    }
  
    numOfTyres(): number {
      return this._numOfTyres;
    }

    cargoCapacity(): number {
      return this._cargoCapacity;
    }
  }
  // Crate a new car object 
  const car = new Car("Suzuki", "Cultus", 2021,4, "left");
  console.log("Car");
  // check rentel rate of car. 
  console.log("Vehicle Rental Rate is",car.rentalRate());
  // return car but car is not rented yet. 
  console.log(car.return());
  // give car on rent. 
  console.log(car.rent());
  // car is alredy on rent so message will be diffrent. 
  console.log(car.rent());
  // return the car. 
  console.log(car.return());
  
  // Crate a new truck object 
  const truck = new Truck("Mazda", "F-150", 2020, 1000,3);
  console.log("Truck");
  // give truck on rent. 
  console.log(truck.rent());
  // return the truck. 
  console.log(truck.return());
  // check rentel rate of truck. 
  console.log("Vehicle Rental Rate is",truck.rentalRate());
  
  