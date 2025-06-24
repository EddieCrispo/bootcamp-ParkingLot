import readline from 'readline';
import Car from './classes/Car.js';
import ParkingLot from './classes/ParkingLot.js';
import ParkingManager from './classes/ParkingManager.js';

// === Setup ===
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lotA = new ParkingLot("Lot A", 3);
const lotB = new ParkingLot("Lot B", 3);
const lotC = new ParkingLot("Lot C", 2);
const manager = new ParkingManager([lotA, lotB, lotC]);

// Empty Cars
// const cars = []; // store cars in memory

// Pre-load some cars
const cars = [
    new Car ("H 8445 KG", "Kia Picanto"),
    new Car ("G 1935 DE", "Toyota Innova"),
    new Car ("B 1 RI", "Mercedes S-Class"),
    new Car("K 8055 PLG", "Subaru Imprezza"),
    new Car("E 0690 BST", "Tesla Model X"),
    new Car("G 7177 IES", "Polestar 2"),
    new Car("D 8008 IES", "Ferrari 296 GTB"),
    new Car("B 007 OND", "Aston Martin DB5"),
    new Car("D 6969 BLZ", "Volkswagen Camper")
]

// === Menu ===
function showMenu() {
  console.log(`
============= MENU =============
1. Tambah Mobil Baru
2. Parkirkan Mobil
3. Lihat Status Parkir
4. Lihat Tiket
5. Keluarkan Mobil
6. Pilih Strategi Parkir
0. Keluar
================================
  `);
  rl.question("Pilih opsi: ", handleMenu);
}

function handleMenu(option) {
  switch (option.trim()) {
    case '1':
        console.log("\n=========================================================");
        
        rl.question("Masukkan plat mobil: ", plate => {
            rl.question("Masukkan merk mobil: ", brand => {
                const car = new Car(plate.trim(), brand.trim());
                cars.push(car);
                console.log(`✅ Mobil ${plate} (${brand}) ditambahkan.`);
                console.log("=========================================================");

                // console.log(cars);
                showMenu();
                });
            });
        break;

    case '2':

        console.log("\n=========================================================");

        if (cars.length === 0) {
            console.log("🚫 Tidak ada mobil yang tersedia. Tambah mobil dulu.");
            return showMenu();
        }
        
        console.log("Daftar Mobil:");
        console.log("---------------------------------------------------------");

        cars.forEach((car, i) =>
            console.log(`${i + 1}. ${car.getPlateNumber()} - ${car.getCarBrand()}`)
        );       
        
        console.log("=========================================================");
        
        rl.question("Pilih nomor mobil untuk diparkir: ", index => {
        const car = cars[parseInt(index) - 1];
        if (!car) {
            console.log("🚫 Nomor tidak valid.");
        } else {
            try {
                manager.parkCar(car);
            } catch (err) {
                console.log("❌ " + err.message);
            }
        }
        
        console.log("=========================================================");

        showMenu();
        });
        break;

    case '3':
        [lotA, lotB, lotC].forEach(lot => lot.printParkedCars());
        showMenu();
        break;

    case '4':
        rl.question("Masukkan plat nomor mobil: ", plate => {
            const lot = [lotA, lotB, lotC].find(l => l.hasCar(plate));
            if (!lot) {
            console.log("🚫 Tiket tidak ditemukan.");
            } else {
            const ticket = lot.getTicket(plate);
            console.log("🎫 Tiket:", ticket);
            }
            showMenu();
        });
        break;

    case '5':
        rl.question("Masukkan plat mobil yang ingin keluar: ", plate => {
            manager.unparkCar(plate.trim());
            showMenu();
        });
        break;
    
    case '6':
        console.log(`
        ----------------------------
        Pilih Strategi Parkir:
        1. First Available
        2. Highest Capacity
        3. Highest Free Space
        ----------------------------
        `);
        rl.question("Pilih strategi: ", choice => {
            if (choice === '1') {
            manager.setStrategy("first-available");
            } else if (choice === '2') {
            manager.setStrategy("highest-capacity");
            } else if (choice === '3') {
            manager.setStrategy("highest-free-space");
            } else {
            console.log("🚫 Pilihan tidak valid.");
            }
            showMenu();
        });
        break;

    case '0':
        console.log("👋 Terima kasih! Program dihentikan.");
        rl.close();
        break;

    default:
        console.log("🚫 Opsi tidak valid.");
        showMenu();
  }
}

showMenu();
