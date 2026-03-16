// 1️⃣ Write a program to count the number of characters in a string.

str="ruchika"

let a=str.length;
console.log(a);
count=0;

for(let i=0;i<str.length;i++)
{
    if(str.charAt(i)!=null)
    count ++
}
console.log(count)

// 2️⃣ Write a program to reverse a string without using built-in reverse functions.

str="Madam".toLowerCase()
// str=str.split("").reverse().join("")
reverse=""
for(let char of str)
{
    reverse=char+reverse
}
console.log(reverse)
if(reverse===str)
    console.log("Palindrome")
else{
     console.log("Not Palindrome")
}
// 3️⃣ Write a program to check whether a string is a palindrome.


// 4️⃣ Write a program to count vowels and consonants in a string.

// let str="welcome"
// let count=0;
// for(let s of str)
// {
// if("aieou".includes(s))
// {
// count++
// }}
// console.log(count)


// 5️⃣ Write a program to convert swapcase

// function swapCase(str) {
//   let swappedChars = str.split('');
//   for (let i = 0; i < swappedChars.length; i++) {
//     let char = swappedChars[i];
//     if (char === char.toLowerCase()) {
//       swappedChars[i] = char.toUpperCase();
//     } else {
//       swappedChars[i] = char.toLowerCase();
//     }
//   }
//   return swappedChars.join('');
// }

// let text = "Java iS Fun";
// let swappedText = swapCase(text);
// console.log(swappedText); 


// 6️⃣ Write a program to count the occurrence of a specific character in a string.

let str="programming"
let char='p'
let count=0;
for(let i=0;i<str.length;i++)
{
    if(str.charAt(i)==char)
        count++
}
console.log(count)

// 7️⃣ Write a program to find duplicate characters in a string.
str="hello world"
marked={} //object
for(let i=0;i<str.length;i++)
{
     if(!marked[i])
     {
    for(let j=i+1;j<str.length;j++)
    {
        if(str[i]===str[j])
        {
            console.log(str[i])
            marked[j]=true;
            break;
        }      
    }
     }
}


// 8️⃣ Write a program to remove duplicate characters from a string.

// str="hello"
// newstr=""
// marked={}
// for(let i=0;i<str.length;i++)
// {
//     if(!marked[str[i]])
//      {
//         newstr=newstr+str[i]
//         marked[str[i]]=true         
//     }
// }

// if (newstr === str) {
//     console.log("No duplicate characters in String");
// } else {
//     console.log("String after removing duplicates:", newstr);
// }
// 9️⃣ Write a program to replace all spaces in a string with hyphens.

str="hello all how are you"
str=str.replaceAll(" ","_")
console.log(str)

// 🔟 Write a program to find the longest word in a sentence.
str="hello all how are you"
 str=str.split(" ")
longest=str[0] //hello

for(let i=0;i<str.length;i++)
{
    if(longest.length<str[i].length)
    {
longest=str[i]
    }

}
console.log(longest)
// 1️⃣1️⃣ Write a program to extract the username from an email address.

// str="ruchikaarora@gmail.com"

// for(let ch of str)
// {
//     if(ch==="@")
//     {
//         break
//     }
//     else{
//         process.stdout.write(ch)
//     }
// }

// 1️⃣2️⃣ Write a program to check whether two strings are anagrams.

let str1="race"
let str2="care"

if(str1.length===str2.length)
{
  str1=str1.split("").sort().join()
  str2=str2.split("").sort().join()

  if(str1===str2)
  {
console.log("Anagram")
  }
  else
  {
    console.log("Not Anagram")
  }
}
else{
    console.log("Not Anagram")
}

// 1️⃣3️⃣ Write a program to count how many words exist in a sentence.

// str="hello all how are you"
//  str=str.split(" ")
//  console.log(str.length)

// 1️⃣4️⃣ Write a program to print the frequency of each character in a string.

str="hello"
let marked={}
for(let i=0;i<str.length;i++)
{
    let count=0;
    if(marked[i]==false)
    {
    for(let j=0;j<str.length;j++)
    {

        if(str[i]===str[j])
        {
            count++;
            marked[j]=true
        }
    }}

    console.log(str[i] + "" + count)
}


// 1️⃣5️⃣ Write a program to capitalize the first letter of each word in a sentence.

// function capitalize(str)
// {
//     words=str.split(" ")
//     final=""
//     for(let i=0;i<words.length;i++)
//     {
// word=words[i]
// cap=word.charAt(0).toUpperCase()+word.slice(1)
// final+=cap+" "
//     }
    
//     console.log(final) 

// }
// str="programming fun"
// capitalize(str)

// 1️⃣6️⃣ Write a program to remove all vowels from a string.

// str="ruchika"
// newstr=""
// for(let ch of str)
// {
//     if("aeiou".includes(ch))
//     {
//         continue;
//     }
//     else
//     {
//        newstr+=ch
//     }
// }
// console.log(newstr)

// 1️⃣7️⃣ Write a program to check whether a string contains only digits.
str="ruchika"
flag=false
for(let char of str)
{
    if(char>=0 && char<=9)
    {
        flag=true
        break;
    }
}

    if(flag)
    {
        console.log("digit")
    }
    else{
         console.log("not digit")
    }


// 1️⃣8️⃣ Write a program to print characters that appear only once in a string.
 str = "java";
 char = {};
 marked = {};

for (let i = 0; i < str.length; i++) {

    if (marked[str[i]]) continue;  

    let count = 1;

    for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
            count++;
            marked[str[j]] = true;  
    }

    char[str[i]] = count;
}
}


for (let key in char) {
    if (char[key] === 1) {
        console.log(key);
    }
}



// 1️⃣9️⃣ Write a program to split a sentence into words and print them in reverse order.

str="hi this JS programing "
words=str.split(" ")
final=""
for(let i=0;i<str.length;i++)
{
   let word=words[i];
   let ch=word.split("").reverse().join("");
    final+= ch + " "
}
console.log(final)
// 2️⃣0️⃣ Write a program to truncate a string after a given number of characters and append "...".

function truncateString(str, limit) {
    if (!str || str.length <= limit) {
        return str;
    }
    return str.slice(0, limit) + "...";
}

const text = "Welcome to JavaScript Programming";
const maxChars = 12;

const result = truncateString(text, maxChars);

console.log("Original :", text);
console.log("Truncated:", result);



// 2️⃣1️⃣ Write a program to compare two strings ignoring case sensitivity.

str1 = "Hello";
str2 = "heLLo";

function normalize(ch) {
    let code = ch.charCodeAt(0);
    
    if (code >= 65 && code <= 90) {
        code = code + 32; //88+32
    }
    return String.fromCharCode(code);//h
}

let equal = true;

if (str1.length !== str2.length) {
    equal = false;
} else {
    for (let i = 0; i < str1.length; i++) {
        if (normalize(str1[i]) !== normalize(str2[i])) {
            equal = false;
            break;
        }
    }
}
console.log(equal ? "Equal" : "Not Equal");


// 2️⃣2️⃣ Write a program to insert a word at a specific position in a sentence.

str = "java";
let position = 2;
let insert = "hello";
let newstr = "";

// Copy characters before position
for (let i = 0; i < position; i++) {
    newstr += str.charAt(i);
}

// Insert new text
newstr += insert;

// Copy remaining characters
for (let i = position; i < str.length; i++) {
    newstr += str.charAt(i);
}

console.log(newstr);


// 2️⃣3️⃣ Write a program to remove extra spaces from a string.

str="rbjkj jwodo  kej "
str=str.replace(/\s/g,"")
// entence.replace(/\s/g, '');
console.log(str)

// 2️⃣4️⃣ Write a program to find the first non-repeating character in a string.

str="javavj"
found=false
for(let i=0;i<str.length;i++)
{
    isunique=true
    for(let j=0;j<str.length;j++)
    {
        if(str[i]==str[j] && i!=j)
        {
            isunique=false;
            break;
        }
    }
    if(isunique)
    {
        console.log(str[i])
        found=true
        break
    }
}
    if(!found)
    {

        console.log("No no repeating")
    }



// 2️⃣5️⃣ Write a program to check whether a string starts and ends with the same character.

str="madamx"
if(str[0]==str[str.length-1])
{
    console.log("same character")
}
else
{
      console.log(" not same character")
}