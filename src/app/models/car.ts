export class Car {
    photo: string;
    model: string;
    year: number;
    brand: string;
    price: number;
    features: {
        cylinders: number;
        cisplacement: number;
        horsepower: number;
        weight: number;
        acceleration: number;
    };
    selected: boolean;
}
