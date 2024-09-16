var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Point = /** @class */ (function () {
    function Point(x, y, name) {
        this.x = x;
        this.y = y;
        this.name = name;
    }
    return Point;
}());
var Pet = /** @class */ (function () {
    function Pet(name, nicknames, age, species, sleeping) {
        this.name = name;
        this.nicknames = nicknames;
        this.age = age;
        this.species = species;
        this.sleeping = sleeping;
    }
    return Pet;
}());
var pointComparator = {
    compare: function (p1, p2) {
        return p1.x - p2.x;
    }
};
var petComparator = {
    compare: function (p1, p2) {
        return p1.age - p2.age;
    }
};
function selectionSort(data, compare) {
    var _a;
    var arr = __spreadArray([], data, true);
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < n; j++) {
            if (compare.compare(arr[j], arr[minIndex]) < 0) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            _a = [arr[minIndex], arr[i]], arr[i] = _a[0], arr[minIndex] = _a[1];
        }
    }
    return arr;
}
// Task 1 -------------------------------------
var someData = [70, 20, 3, 4, 1, 90];
var numberComparator = {
    compare: function (obj1, obj2) {
        return obj1 - obj2;
    }
};
var sortedData = selectionSort(someData, numberComparator);
console.log(sortedData);
// --------------------------------------------
// Task 2 -------------------------------------
var points = [
    new Point(10, 20, 'Point A'),
    new Point(5, 15, 'Point B'),
    new Point(15, 25, 'Point C')
];
var sortedPoints = selectionSort(points, pointComparator);
console.log(sortedPoints);
var pets = [
    new Pet('Bella', ['Bell', 'Belly'], 3, 'Dog', true),
    new Pet('Max', ['Maxie', 'Maxwell'], 5, 'Cat', false),
    new Pet('Lucy', ['Luc', 'Lu'], 2, 'Dog', true)
];
var sortedPets = selectionSort(pets, petComparator);
console.log(sortedPets);
// --------------------------------------------
