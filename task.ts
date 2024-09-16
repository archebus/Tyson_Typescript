class Point {
    constructor(
        public x: number,
        public y: number,
        public name: string
    ) {}
}

class Pet {
    constructor(
        public name: string,
        public nicknames: string[],
        public age: number,
        public species: string,
        public sleeping: boolean
    ) {}
}

interface Comparator<Type> {
    compare(obj1: Type, obj2: Type): number;
}

const pointComparator: Comparator<Point> = {
    compare(p1: Point, p2: Point): number {
        return p1.x - p2.x;
    }
};

const petComparator: Comparator<Pet> = {
    compare(p1: Pet, p2: Pet): number {
        return p1.age - p2.age;
    }
};

function selectionSort<Type>(data: Array<Type>, compare: Comparator<Type>): Array<Type> {
    const arr = [...data];
    
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (compare.compare(arr[j], arr[minIndex]) < 0) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    
    return arr;
}

// Task 1 -------------------------------------
let someData: Array<number> = [70, 20, 3, 4, 1, 90];

let numberComparator: Comparator<number> = {
    compare(obj1: number, obj2: number) {
        return obj1 - obj2;
    }
};

let sortedData = selectionSort<number>(someData, numberComparator);
console.log(sortedData);
// --------------------------------------------

// Task 2 -------------------------------------
let points: Point[] = [
    new Point(10, 20, 'Point A'),
    new Point(5, 15, 'Point B'),
    new Point(15, 25, 'Point C')
];

let sortedPoints = selectionSort(points, pointComparator);
console.log(sortedPoints);

let pets: Pet[] = [
    new Pet('Bella', ['Bell', 'Belly'], 3, 'Dog', true),
    new Pet('Max', ['Maxie', 'Maxwell'], 5, 'Cat', false),
    new Pet('Lucy', ['Luc', 'Lu'], 2, 'Dog', true)
];

let sortedPets = selectionSort(pets, petComparator);
console.log(sortedPets);

// --------------------------------------------