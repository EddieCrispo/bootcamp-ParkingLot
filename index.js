import Car from './classes/Car.js';
import ParkingLot from './classes/ParkingLot.js';
import ParkingManager from './classes/ParkingManager.js';

// Make New parking lot with (ID: ex "Lot A", capacity: ex 3)
let lotA = new ParkingLot("Lot A", 3)
let lotB = new ParkingLot("Lot B", 1)
let lotC = new ParkingLot("Lot C", 20)

// Use ParkingManager to manage lots automatically
const manager = new ParkingManager([lotA, lotB, lotC])

// Make new Cars
const car1 = new Car("H 8445 KG", "Toyota Yaris")
const car2 = new Car("G 1935 DE", "Toyota Innova")
const car3 = new Car("B 1 RI", "Toyota Land Cruiser")
const car4 = new Car("D 8008 IES", "Ferrari 296 GTB")
const car5 = new Car("B 007 OND", "Aston Martin DB5")
const car6 = new Car("D 6969 BLZ", "Volkswagen Camper")

// Additional Cars for testing
const car7 = new Car("K 8055 PLG", "Subaru Imprezza")
const car8 = new Car("E 0690 BST", "Tesla Model X")
const car9 = new Car("G 7177 IES", "Polestar 2")
// console.log(car1.getCarInfo());

// Using Parking Manager to park cars automatically
console.log("========================== Mobil Masuk ==========================");
manager.parkCar(car1);
manager.parkCar(car2);
manager.parkCar(car3);
manager.parkCar(car4);
manager.parkCar(car5);
manager.parkCar(car6);
// manager.parkCar(car7); // throws an error
// manager.parkCar(car8); // throws an error
// manager.parkCar(car9); // throws an error
console.log("================================================================= \n");


// Get Lots Info
lotA.printParkedCars()
lotB.printParkedCars()
lotC.printParkedCars()

console.log("\n========================= KELUAR PARKIR =========================");
manager.unparkCar("G 1935 DE"); // Try removing car2 from Lot A
manager.unparkCar("D 8008 IES"); // Try removing car4 from Lot B
manager.unparkCar("D 6969 BLZ"); // Try removing car6 from Lot C
manager.unparkCar("B 9999 ZZZ"); // Should not be found
console.log("=================================================================");

lotA.printParkedCars()
lotB.printParkedCars()
lotC.printParkedCars()