import { Tesla, Audi, Toyota, Honda, Vehicle } from './03-liskov-b';


(() => {

    const printCarSeats = (cars: Vehicle[]) => {

        cars.forEach(car => {
            console.log({ car: car.constructor.name, NumberOfSeats: car.getNumberOfSeats() })
        });
    }

    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
    ];


    printCarSeats(cars);

})();