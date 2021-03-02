////////////////// finding property value from an object which if from an array /////////////////////////////


const students = [


    { id: 11111, name: 'hasan' },
    { id: 22222, name: 'asha' },
    { id: 33333, name: 'omok' },
    { id: 44444, name: 'tomok' }
]


function getName(array, property) {
    const output = [];

    for (i = 0; i < array.length; i++) {

        output.push(array[i][property]);
    }
    return output;
}

const result = getName(students, 'id');
console.log(result);

////////////////// Alternative way to get property form object which is from an array //////////////


const students = [
    { id: 345, name: 'rafi' },
    { id: 356, name: 'safi' },
    { id: 267, name: 'saki' }
];

const newName = [];
for (i = 0; i < students.length; i++) {
    const element = students[i];

    const getName = element.name;
    newName.push(getName);

}

console.log(newName);



///////////////////// map with function for an array /////////////////////////

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const result = numbers.map(function(element) {

    return element * element;
});

console.log(result);

//////////////// Alternavite way /////////////////

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];



const output = numbers.map(element => element * element);
console.log(output);