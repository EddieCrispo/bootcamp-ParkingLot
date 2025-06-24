
// Class for Ticket
export default class Ticket {
    // constructor(car, location) {
    // this.numberPlate = car.getPlateNumber();
    // this.timeStamp = new Date();
    // this.merk = car.getCarBrand();
    // this.location = location;
    // }

    constructor(car, location) {
    this.numberPlate = car.getPlateNumber();
    this.carBrand = car.getCarBrand();
    this.entryTime = new Date();
    this.location = location;
    }

    getSummary() {
    return {
        plate: this.numberPlate,
        carBrand: this.carBrand,
        location: this.location,
        entryTime: this.entryTime.toLocaleString()
        };
    }
}
