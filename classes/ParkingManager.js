// Class to manage parking automatically
export default class ParkingManager {
    constructor(parkingLots) {
        this.parkingLots = parkingLots;
        // Implement strategy for Story 7 & Story 8
        this.strategy = "first-available"; // default strategy
    }

    // Method to switch startegy at runtime (Story 7)
    // First available is to park car in the first available slot
    // Highest Capacity is to park car in the lot with the highest capacity
    setStrategy(newStrategy) {
        const allowed = ["first-available", "highest-capacity", "highest-free-space"];
        if (allowed.includes(newStrategy)) {
            this.strategy = newStrategy;
            console.log(`✅ Strategi parkir diubah ke: ${newStrategy}`);
        } else {
            console.log("🚫 Strategi tidak dikenali.");
        }
    }

    parkCar(car) {
        let selectedLots = [...this.parkingLots];
        
        // Implement highest-capacity by sorting Lots with the highest capacity
        // Implement highest-free-space by comparing free slots of each Lot
        if (this.strategy === "highest-capacity") {
            selectedLots.sort((a, b) => b.capacity - a.capacity); // descending order
        } else if (this.strategy === "highest-free-space") {
            selectedLots.sort((a, b) => b.getAvailableSpots() - a.getAvailableSpots());
        }

        for (const lot of selectedLots) {
            if (!lot.isFull()) {
                return lot.park(car); // returns the ticket
            }
        }

        throw new Error(`Semua tempat parkir penuh untuk mobil ${car.getPlateNumber()}`);

    }

    unparkCar(plateNumber) {
        // Loops through the parkingLots looking for a car with plateNumber, if car is found, unpark car
        for (const lot of this.parkingLots) {
            if (lot.hasCar(plateNumber)) {
                return lot.unpark(plateNumber);
            }
        }
        console.log(`Mobil dengan plat ${plateNumber} tidak ditemukan di semua tempat parkir.`);
        return false;
    }
}