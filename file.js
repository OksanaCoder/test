// 1. Write a JavaScript program to list the properties of a JavaScript object
let obj = {
    name : 'Oksi',
    age: 22,
    degree: true
};
for (let key in obj) {
    console.log(key);
}

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
let obj = {
    name : 'Oksi',
    age: 22,
    degree: true
};
delete obj.degree;
console.log(obj);
console.log(Object.keys(obj).length);

// 3. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. 
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
library.forEach(function(eachObj){
    if(eachObj.readingStatus) {
        console.log(eachObj.author + ' ' + eachObj.title + ' is read');
    } else {
        console.log(eachObj.author + ' ' + eachObj.title + ' is not read');
    }
});