// Class to manage parking automatically
export default class ParkingManager {
    constructor(parkingLots) {
        this.parkingLots = parkingLots;
    }

    parkCar(car) {
        // Loops through the parkingLots looking for a spot, if lot is not full, park car in said Lot
        for (const lot of this.parkingLots) {
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