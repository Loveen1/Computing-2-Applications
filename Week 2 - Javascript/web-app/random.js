
const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];


// const filtered = characters.reduceRight(x => x.height < 300); 

const filtered = characters.find(x => x.mass = 84); 

console.log(filtered)
// const totalMass = characters.reduce((acc,cur) => acc + cur.mass, 0);

// const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0);

// //create array with eye colours and numbers of each one

//  const eyeColour = characters.reduce((acc,current) => {

//     if (acc[current.eye_color]){
//         acc[current.eye_color] ++;
//     } else{
//         acc[current.eye_color] = 1; 
//     }
//     return acc;
// }, {})

// // //filter people older than 50, but only want their first names, not the entire character info 
// // const filtered = characters.filter((x) => x.mass>=50).map(s => s.name.split(" ")[0]);

// // // MAP FUNCTION // obtain heights only- you use map function to create an array with things you are only interested in 
// // // const heights = characters.map( (name) => name.height); 


// // // const height = characters.map ((item) => {
// // //     return item.name + ": " + item.gender
// // // });

// // // const Exam = Object.create(null);

// // // Exam.every_third = function (array) {
// // //     return array.filter((ignore, k) => k % 3 === 0);

// // // console.log(Exam.every_third([1,2,3,4,5,6,7,8)]); 

debugger;