Typescript Learning/Tasks
Why Typescript?
The quick version of this, javascript has some shortcomings for larger projects. Anything where the complexity of

the code starts going beyond 500 lines and QA starts going out the door.
Typesystems and static-analysis allows for checks to occur prior to code execution to discover issues

with your codebase.
Typesystem allows for gaurantees from the compiler around objects that conform to type standards
Task 1 - Set up a basic typescript project
Make sure you create a project using npm, afterwards, install typescript dependency

with --save-dev flag after it.
You may want to install it globally with -g, however you typically want to mark your npm

projects with typescript as part of the developer dependencies
Afterwards, configure your project to have a tsconfig.json file using npx tsc --init.
 
 
Task 2 - Constraints and Usage
At this point, you are using typescript because you prefer something to help check your codebase before you

run it and compile/transpile it to javascript.
Your task is to create a program that will implement selection sort.
You will need to use interface
The selection sort should be general implementation
The selection sort function must conform the following signature:
function selectionSort(data: Array<any>, compare: Comparator)
The comparator interface will have the following interface implementation.
interface Comparator {
    compare(obj1: any, obj2: any): number;
}
Example of usage:
let someData = [70, 20, 3, 4, 1, 90];
let numberComparator: Comparator = (obj1: any, obj2: any) => 
    { 
        let x: number = obj1 as number; 
        let y: number = obj2 as number;
        return x - y; 
    };
selectionSort(someData, numberComparator);
The outcome from this, you program should be able to implement a generic sorting algorithm, the next step

is to then replace the any types within Comparator and selectionSort with Generics.
The next step
It should follow with the next format:
interface Comparator<Type> {
    compare(obj1: Type, obj2: Type): number;
}
function selectionSort<Type>(data: Array<Type>, compare: Comparator<Type>)
Example of usage:
let someData: Array<number> = [70, 20, 3, 4, 1, 90];
let numberComparator: Comparator<number> = (obj1: number, obj2: number) => 
    { 
        return x - y; 
    };
selectionSort<number>(someData, numberComparator);
 
 
Task 3 - Building Classes and use them with your sort
As an extension on Task 2, you will build two new classes.
class Point
A point will contain 3 fields, x and y coordinates which are number type. It will also contain a name field which will be a string.
class Pet
Which will contain, the fields:
name
nicknames
age
species
sleeping
You can provide the above suitable for those fields.
Afterwards, create arrays of pets and points. Create a way to call selectionSort using Pet and Point and allow the arrays to be sortable using some Comparator you have designed.
 
Links:
https://www.typescriptlang.org/docs/handbook/interfaces.html
https://www.typescriptlang.org/docs/handbook/2/generics.html
TypeScript: Handbook - Interfaces
How to write an interface with TypeScript
 