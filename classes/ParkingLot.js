import Ticket from './Ticket.js'

// Class for ParkingLot
export default class ParkingLot {
    constructor(id, capacity) {
        this.id = id,
        this.capacity = capacity
        this.parkingSpots = new Map()
        this.tickets = new Map(); // plateNumber -> Ticket
    }

    // check if lot is full
    isFull() {
        return this.parkingSpots.size >= this.capacity;
    }

    // get Available spots
    getAvailableSpots() {
        return this.capacity - this.parkingSpots.size;
    }
    
    // Check if Lot x has Car y using plateNumber
    hasCar(plateNumber) {
        return this.parkingSpots.has(plateNumber);
    }

    // To park a Car
    park(car) { 
        
        // Check if lot is full
        if (this.isFull()) {
            throw new Error("Parkir Penuh!")
        } 

        // Check if a car with the same plate is already parked
        if (this.hasCar(car.getPlateNumber())) {
            throw new Error(`Mobil dengan plat ${car.getPlateNumber()} sudah terparkir.`);
        }

        // Put car in Parking Spot
        this.parkingSpots.set(car.getPlateNumber(), car.getCarInfo())
        console.log(`Mobil ${car.getPlateNumber()} sudah parkir di ${this.id}`);

        // Output slot yang tersisa di Lot x
        if (this.getAvailableSpots() == 0){
            console.log(`Slot di ${this.id} sudah habis.`);
        } else {
        console.log(`Tersisa ${this.getAvailableSpots()} slot di ${this.id}`);
        }
        // console.log(`Tersisa ${this.getAvailableSpots()} slot di ${this.id}`);
        
        // Make Ticket
        const ticket = new Ticket(car, this.id);
        this.tickets.set(car.getPlateNumber(), ticket); // Save the ticket
        console.log(`Ticket dibuat untuk ${car.getPlateNumber()}:`, ticket.getSummary());
        
        return ticket;

        // // Make ticket
        // const ticket = new Ticket(car, this.id)

        // // console.log(ticket, "==> Ini ticket Mobil");
        // return ticket

    }

    // For car exit
    unpark(plateNumber) { 
        // Check if car with plateNumber exists
        if (!this.hasCar(plateNumber)) {
            console.log(`Mobil dengan plat ${plateNumber} tidak ditemukan.`);
            return false;
        }

        // unpark car from Lot x
        this.parkingSpots.delete(plateNumber);
        console.log(`Mobil dengan plat ${plateNumber} sudah keluar dari ${this.id}.`);

        // Notify that space is available again
        console.log(`📢 Slot parkir tersedia di ${this.id}.`);

        return true;
    }

    // Get ticket of car with plateNumber
    getTicket(plateNumber) {
        return this.tickets.get(plateNumber)?.getSummary() || 'Ticket not found';
    }

    // Get Parked cars, outputs an array values of parkingSpots
    getParkedCars() {
    return Array.from(this.parkingSpots.values());
    }

    // Print parked cars
    printParkedCars() {
        console.log(`\n================ Daftar Mobil Terparkir di ${this.id} ================`);
        for (const car of this.parkingSpots.values()) {
            console.log(`Plate: ${car.plateNumber}, Make: ${car.carBrand}, Time: ${new Date(car.timestamp).toLocaleString()}`);
        }
        
        if (this.getAvailableSpots() == 0){
            console.log(`Slot di ${this.id} sudah habis.`);
        } else {
        console.log(`Tersisa ${this.getAvailableSpots()} slot di ${this.id}`);
        }

        console.log("=================================================================");
    }

}