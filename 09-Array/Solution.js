// Find the second largest number in an array.
arr=[100,23,56,49,31]
max=-Infinity //no value is lowest than this
smax=-Infinity
for(let i of arr)
{
    if(max<i)
    {
    smax=max
    max=i
    }
    else if(smax<i && i!==max)
    {
        smax=i
    }
}
console.log(smax)

// Remove duplicate elements from an array (without using Set).

let arr = [1, 2, 3, 2, 4, 1, 5];
let unique = [];

for (let i of arr) {
    if (!unique.includes(i)) {
        unique.push(i);
    }
}

console.log(unique);

// Count frequency of each element in an array.

arr = [10,20,30,30,40]
let freq={}

for(let i of arr)
{
    freq[i]=(freq[i]||0)+1

}
console.log(freq);

// Find all pairs whose sum = target value.

arr = [2, 4, 3, 5, 7, 8];
let target = 7;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            console.log(arr[i], arr[j]);
        }
    }
}

// Rotate array to the right by k positions.
arr=[10,20,30,40,50]
arr1=[]
k=2
for(let i=k;i<arr.length;i++)
{ 
arr1.push(arr[i]);
}
for(let i=0;i<k;i++)
{ 
arr1.push(arr[i]);
}
console.log(arr1)

// Reverse array without using reverse().

arr=[10,20,30,40]
arr1=[]
b=arr.length-1
for (let i in arr)
{
    arr1[b]=arr[i]
    b--
}
console.log(arr1) //[ 40, 30, 20, 10 ]
// Check if two arrays are equal (value-based comparison).

function areArraysEqual(arr1, arr2) {
    // Step 1: Check length
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Step 2: Compare elements one by one
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

// Example
let a = [1, 2, 3];
let b = [1, 2, 3];

console.log(areArraysEqual(a, b)); // true
// Find missing number from a sorted sequence.

function findMissingNumber(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            return arr[i] + 1;
        }
    }
    return null; // No missing number
}

// Example
console.log(findMissingNumber([1,2,3,5,6])); // 4
// Merge two sorted arrays into one sorted array.

function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    // Add remaining elements
    while (i < arr1.length)
    {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

console.log(mergeSortedArrays([1,3,5], [2,4,6]));
// Find the longest word in an array of strings.

function findLongestWord(arr) {
    let longest = "";

    for (let word of arr) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(findLongestWord(["cat","elephant","dog"]));


// Convert array of numbers to their squares using map().

arr=[1,2,3,4]
let square=arr.map(n=>n*n)
console.log(square)
// Filter out even numbers from array.
arr=[1,2,3,4]
let even = arr.filter(n=> n%2===0)
console.log(even)
// Find sum of array using reduce().

arr=[1,2,3,4]
let sum=arr.reduce((a,b)=>a+b,0);
console.log(sum)

// Group numbers into even and odd using reduce().

let nums = [1, 2, 3, 4, 5, 6];

 even = [];
 odd = [];

nums.reduce((acc, curr) => {
    if (curr % 2 === 0) {
        even.push(curr);
    } else {
        odd.push(curr);
    }
},[]);

console.log("Even:", even);
console.log("Odd:", odd);

// Convert array of names to uppercase.

let names = ["ruchika", "aman", "neha"];

let upperNames = names.map(name => name.toUpperCase());

console.log(upperNames); 

// Create an object from array: ["a","b","c"] → {0:"a",1:"b",2:"c"}

arr = ["a", "b", "c"];

let obj = arr.reduce((acc, curr, index) => {
    acc[index] = curr;
    return acc;
}, {});

console.log(obj);

// Sort array in descending order.

nums = [10, 5, 20, 8];

nums.sort((a, b) => b - a);

console.log(nums); // [20, 10, 8, 5]

// Sort array of objects by age.
let users = [
    { name: "Aman", age: 25 },
    { name: "Neha", age: 30 },
    { name: "Riya", age: 22 }
];

users.sort((a, b) => a.age - b.age);

console.log(users);
// Find first element greater than 50.
 nums = [10, 45, 60, 80];

let result = nums.find(num => num > 50);

console.log(result); // 60
// Find index of first negative number.

 nums = [5, 3, -2, -8, 10];

let index = nums.findIndex(num => num < 0);

console.log(index); // 2


// Binary search implementation (without using includes).

arr=[10,20,30,40]
left=0
right=arr.length-1
item=20
flag=false
while(left<=right)
{
    mid=Math.floor((left+right)/2)
    if(arr[mid]>item)
    {
       right=mid-1
    }
    else if(arr[mid]<item)
    {
       left=mid+1
    }
    else if(arr[mid]===item)
    { 
        flag=true
        break;
    }
}
if(!flag)
    {
    console.log("no item avaiable")
    }
else
    {
console.log("item is at position", mid+1)
    }



    function binarySearchWithOriginalIndex(arr, target) {

    let newArr = arr.map((value, index) => ({ value, index }));

    console.log(newArr)
    // Sort based on value
    newArr.sort((a, b) => a.value - b.value);

     console.log(newArr)
    let left = 0;
    let right = newArr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (newArr[mid].value === target) {
            return newArr[mid].index; // original index
        }
        else if (newArr[mid].value < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return -1;
}

// Example
let arr2 = [40, 10, 30, 20, 50];
console.log(binarySearchWithOriginalIndex(arr2, 30)); // 2

// Flatten a nested array (1 level).

 arr = [1, [2, 3], 4];
let flat = arr.flat(); // 1 level
console.log(flat); // [1,2,3,4]
// Flatten deeply nested array 

function deepFlatten(arr) {
    return arr.reduce((acc, curr) => {
        return acc.concat(Array.isArray(curr) ? deepFlatten(curr) : curr);
    }, []);
}


console.log(deepFlatten([1, [2, [3, 4]], 5]));
// [1,2,3,4,5]

arr=[1, [2, [3, 4]], 5]
console.log(arr.flat().flat());

// Convert array to comma-separated string.
arr=[1,2,3,4,5]
let str=arr.join(",")
console.log(str)

// Chunk array into groups of size n.
function chunkArray(arr, size) {
    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
}

console.log(chunkArray([1,2,3,4,5,6], 2));

arr=[1,2,3,4,5,6]
result=[]
size=2
for(let i=0;i<arr.length;i=i+size)
{
result.push(arr.slice(i,i+size))
}
console.log(result)

// [[1,2],[3,4],[5,6]]
// Remove falsy values from array.

// Truthy → behaves like true
// Falsy → behaves like false

// false
// 0
// ""
// null
// undefined
// NaN

arr = [0, 1, false, 2, "", 3, null];
let filtered = arr.filter(Boolean);
console.log(filtered); // [1,2,3]

// Find intersection of two arrays.

function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

console.log(intersection([1,2,3], [2,3,4])); // [2,3]

// Find difference between two arrays.

function difference(arr1, arr2) {
    return arr1.filter(value => !arr2.includes(value));
}

console.log(difference([1,2,3], [2,3,4])); // [1]

// From array of users, return list of emails.
users = [
    { name: "Aman", email: "aman@mail.com" },
    { name: "Neha", email: "neha@mail.com" }
];

let emails = users.map(user => user.email);

console.log(emails);

// From array of products, calculate total price.

product=[
{p_name:"ABC",price:100},
{p_name:"XYZ",price:200}
]
let sum1=product.reduce((sum,product)=>sum+product.price,0)
console.log(sum1)

// Find most frequent element.
arr=[10,20,20,10,10,20,20,30]
freq={}
let max=0
let maxElement;
for(let i of arr)
{
    freq[i]=(freq[i]||0)+1

if(freq[i]>max)
{
    max=freq[i]
    maxElement=i
}}
console.log(maxElement)

// Check if array is palindrome.

arr=[10,20,30,20,10]
reversed=[]

for(let i=arr.length-1;i>=0;i--)
{
    reversed.push(arr[i])
}
console.log(reversed)

let isPalindrome = true;

for(let i=0;i<arr.length;i++)
{
    if(arr[i]!=reversed[i])
        isPalindrome=false;
    break;
}
if(!isPalindrome)
    console.log("Not Palindrome")

else{
     console.log("Palindrome")
}

// Count occurrences of a specific element.

function count_Occurance(arr,item)
{
    for(let i of arr)
    {
        freq[i]=(freq[i]||0)+1

    }
   console.log(freq[item])
}

arr=[10,20,20,10,10,20,20,30,10,10]
item=10;
freq={}
count_Occurance(arr,item)

// Remove element at specific index without splice().
arr=[10,20,30]
position=1
new_arr=[]

for(let i=0;i<position;i++)
{

new_arr.push(arr[i])
}
for(let i=position+1;i<arr.length;i++)
{
    new_arr.push(arr[i])
}
console.log(new_arr)

// Convert 2D array into 1D array.
let arr2D = [[1,2], [3,4], [5,6]];

 flat = arr2D.flat();

console.log(flat); // [1,2,3,4,5,6]