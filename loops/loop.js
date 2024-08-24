
// let array=[2,4,5,6,9]
// // for (let i = 0; i < array.length; i++){
// //     console.log(array[i]*array[i])
    
// // }
// // let j=0
// // while (j < array.length) {
// //     console.log(array[j])
// //     j++
// // }

// let i = 0;
// do {
    
//     i++
// } while (i < array.length
// ) {
//     console.log(array)
// }

let student = [
    {
        marks: 45,
        name:'Asad Shah',
        gpa: 3.7,
        isPass: true,
        friends: ['Aqib', 'Asif', 'Kashif'],
        address: {
            city: 'lkl',
            country: 'Pak',
            tehsil:'landikotal',
        }
        
    },
    {
        marks: 60,
        name:'Taimour Ali Khan',
        gpa: 3.2,
        isPass: true,
        friends: ['Abeel', 'Arif', 'Ashrafo'],
        address: {
            city: 'katlang',
            country: 'Pak',
            tehsil:'kat',
        }
        
    },
    {
        marks: 30,
        name:'Murtaza Khan',
        gpa: 2.2,
        isPass: false,
        friends: ['Jawad', 'Ihsaan', 'Mueed'],
        address: {
            city: 'lhr',
            country: 'Pak',
            tehsil:'Pun',
        }
        
    }
]
// console.log(student[2].friends[2])
let passingCities = student.filter(student => student.isPass).map(student => student.address.city);

// Display the cities of the passing students
console.log(passingCities);

