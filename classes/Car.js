
// Class for Car
export default class Car {
    #timestamp
    #plateNumber
    #carBrand

    constructor(plateNumber, carBrand){
        this.#plateNumber = plateNumber
        this.#timestamp = new Date()
        this.#carBrand = carBrand
    }

    getPlateNumber() {
        return this.#plateNumber
    }

    getTimestamp() {
        return this.#timestamp
    }

    getCarBrand() {
        return this.#carBrand
    }

    getCarInfo() {
        let tempObj = {
            plateNumber: this.#plateNumber,
            timestamp: this.#timestamp,
            carBrand: this.#carBrand
        }

        return tempObj
    }
}