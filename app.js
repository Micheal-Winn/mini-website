console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]

let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];
let newArr = arr1.concat(arr2);
console.log('new  arr',newArr);
let pureArray = [...new Set(newArr)];
console.log('pure ',pureArray);
// let sortingArray = pureArray.sort((a,b)=>a - b);
// console.log('sorting ',sortingArray)


let next =  [1, [2], [3, [[4]]],[5,6]];
// // let next = array1.toString()
// //                     .split(',')
// //                     .map(Number);
// // console.log('next ',next)
let array1 = next.flat(Infinity);
console.log('next ',array1);
let array2 = [1, 2, 3, 4, 5];
let result = [];
for(let i in array1)
{
    if(!array2.includes(array1[i]))
    {
       return result.push(array1[i])
    }
    for(let j in array2)
    {
        if(!array1.includes(array2[j])){
        return    result.push(array2[j])
        }
    }
    return result.sort((a,b)=>a-b)
}
console.log('result ',result)

let ar = [NaN, 0, 15, false, -22, '',undefined, 47, null];
let newAr = ar.filter(ele=>ele).sort((a,b)=>a - b);
console.log('remove ',newAr);

let  library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

    let newObjArr = library.sort((a,b)=>
    {
        if(a.title < b.title) return -1;
        if(a.title>b.title) return 1;
        else return 0;
    });
    console.log('sortObjar ',newObjArr)