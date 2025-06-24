import Car from './classes/Car.js';
import ParkingLot from './classes/ParkingLot.js';
import ParkingManager from './classes/ParkingManager.js';

// === Setup Parking Lots ===
let lotA = new ParkingLot("Lot A", 3);
let lotB = new ParkingLot("Lot B", 1);
let lotC = new ParkingLot("Lot C", 2);

const manager = new ParkingManager([lotA, lotB, lotC]);

// === Create Cars ===
const cars = [
  new Car("H 8445 KG", "Toyota Yaris"),
  new Car("G 1935 DE", "Toyota Innova"),
  new Car("B 1 RI", "Toyota Land Cruiser"),
  new Car("D 8008 IES", "Ferrari 296 GTB"),
  new Car("B 007 OND", "Aston Martin DB5"),
  new Car("D 6969 BLZ", "Volkswagen Camper")
];

// === Delay Helper ===
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// === Random Delay Generator (1–10 seconds) ===
const getRandomDelay = () => Math.floor(Math.random() * 9000) + 1000;

// === Parking Simulation with Random Delays ===
async function runParkingSimulation() {
  console.log("========================== Mobil Masuk ==========================");

  for (const car of cars) {
    const wait = getRandomDelay();
    console.log(`⏳ Menunggu ${wait / 1000} detik sebelum parkir mobil ${car.getPlateNumber()}...`);
    await delay(wait);
    try {
      manager.parkCar(car);
    } catch (err) {
      console.log("❌ " + err.message);
    }
  }

  console.log("=================================================================\n");

  // === Show Status After Parking ===
  lotA.printParkedCars();
  lotB.printParkedCars();
  lotC.printParkedCars();

  // === Unpark Some Cars ===
  console.log("\n========================= KELUAR PARKIR =========================");
  manager.unparkCar("G 1935 DE");
  manager.unparkCar("D 8008 IES");
  manager.unparkCar("D 6969 BLZ");
  manager.unparkCar("B 9999 ZZZ");
  console.log("=================================================================\n");

  // === Final Status ===
  lotA.printParkedCars();
  lotB.printParkedCars();
  lotC.printParkedCars();
}

runParkingSimulation();
