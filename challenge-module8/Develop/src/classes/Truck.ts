// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from "./Vehicle.js";
import Motorbike from "./Motorbike.js";
import Car from "./Car.js";
import Wheel from "./Wheel.js";
import AbleToTow from "../interfaces/AbleToTow.js";

// Truck class that extends Vehicle class and implements AbleToTow
class Truck extends Vehicle implements AbleToTow {
  // Declare properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor for the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // Call the constructor of the parent class, Vhicle
    super();

    // Initialize properties of the Car class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    // Check if the wheels array has 4 elements
    // If not, create 4 new Wheel objects
    // Otherwise, use the provided wheels array
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // Implement the tow method from the AbleToTow interface
  // Get the make an model of the vehicle if it exists
  // Check if the vehicle's weight is less than or equal to the truck's towing capacity
  // If it is, log that the vehicle is being towed
  // If it is not, log that the vehicle is too heavy to be towed

  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleType = vehicle.constructor.name;
    const makeAndModel = `${vehicle.make} ${vehicle.model}`;

    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${makeAndModel} (${vehicleType}) is being towed.`);
    } else {
      console.log(
        `${makeAndModel} (${vehicleType}) is too heavy to be towed. Max towing capacity is ${this.towingCapacity}.`
      );
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the Car class
    console.log(`VIN: ${this.vin}`),
      console.log(`Make: ${this.make}`),
      console.log(`Model: ${this.model}`),
      console.log(`Year: ${this.year}`),
      console.log(`Weight: ${this.weight} lbs`),
      console.log(`Top Speed: ${this.topSpeed} mph`),
      console.log(`Color: ${this.color}`),
      console.log(`Towing Capacity: ${this.towingCapacity}`),
      // Print details of the wheels
      console.log(
        `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
      );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
  }
}

// Export the Truck class as the default export
export default Truck;