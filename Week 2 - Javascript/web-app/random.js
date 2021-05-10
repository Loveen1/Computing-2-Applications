const Exam = Object.create(null);

// Write a function that returns a list containig every third item in
// the original list starting with the first item.
//    for example:
//      an input list of [1,2,3,4,5,6,7,8]
//      returns [1,4,7]
Exam.every_third = function (input_list) {
    let count = 1;
    let list = [];
    let i;
    for (i = 0; i < input_list.length; i+=1) {
        if (count % 3 === 0) {
        list.push(input_list[i]);
        } else {
        count = count + 1 ;
        }
    }
    return list;
};

console.log(Exam.every_third([1,2,3,4,5,6,7,8]));

// code isnt working its returning me 3,4,5,6,7,8

