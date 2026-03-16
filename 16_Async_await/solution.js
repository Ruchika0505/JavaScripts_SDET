// 1. Create a function that returns a Promise resolving after 2 seconds with a 
// message "Hello World". Use async/await to print it.

function display()
{
    return new Promise((resolve,reject)=>
    {
    setTimeout(()=>{
        console.log("Hello World")
    },2000)
})
}
async function test()
{
    console.log("start")
    let message=await display();
    console.log(message)
}

test()

// 2. Fetch data from a public API (e.g., https://jsonplaceholder.typicode.com/posts) 
// using fetch() and handle it with async/await.

async function fetchPosts() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        console.log(data.slice(0, 5)); // show first 5 posts
    } catch (err) {
        console.log("Error:", err);
    }
}

fetchPosts();

async function post()
{
    try{
    let res= await fetch("https://jsonplaceholder.typicode.com/posts")
    let data=await res.json();
    // console.log(data)
    console.log(DataTransfer.slice(0,5))
    }
    catch(err)
    {
        console.log(err)
    }

}
post()

// 3. Create a Promise that randomly resolves or rejects. 
// Use try...catch with async/await to handle success and error.

function randomPromise() {
    return new Promise((resolve, reject) => {
        let success = Math.random() > 0.5;
        setTimeout(() => {
            if (success) 
                resolve("Success!");
            else 
                reject("Failed!");
        }, 1000);
    });
}

async function testRandom() {
    try {
        let result = await randomPromise();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

testRandom();

// 4. Implement a delayed addition function that returns a Promise adding two numbers
//  after 3 seconds. Await its result and print it.

function delayedAdd(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 3000);
    });
}

async function addNumbers() {
    let sum = await delayedAdd(10, 20);
    console.log("Sum:", sum);
}

addNumbers();

// 5. Make two API calls sequentially using async/await and print the results.

async function sequentialCalls() {
    let post1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data1 = await post1.json();
    console.log("Post 1:", data1);

    let post2 = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    let data2 = await post2.json();
    console.log("Post 2:", data2);
}

sequentialCalls();


// 6. Make the same two API calls in parallel using Promise.all() and await the results.

async function parallelCalls() {
    let urls = [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/2"
    ];
   
    let results = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
    console.log("Posts:", results);
}
parallelCalls();
// 7. Create a function that reads multiple URLs ( use fetch) and 
// handles errors individually using try...catch.

async function fetchMultiple(urls) {
    for (let url of urls) {
        try {
            let res = await fetch(url);
            let data = await res.json();
            console.log(data);
        } catch (err) {
            console.log("Error fetching", url, ":", err);
        }
    }
}
fetchMultiple([
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/invalid"
]);


// 8. Create a countdown timer using async/await and setTimeout wrapped in a Promise.

function delay(ms) {
    return new Promise(resolve => 
        setTimeout(resolve, ms)
    );
}

async function countdown(seconds) {
    for (let i = seconds; i > 0; i--) {
        console.log(i);
        await delay(5000);
    }
    console.log("Time's up!");
}
countdown(5);


// 9. Simulate a user login system where a Promise resolves if username and password 
// match and rejects if not. Handle it using async/await.

function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "1234") 
                resolve("Login successful");
            else 
                reject("Invalid credentials");
        }, 1000);
    });
}

async function testLogin() {
    try {
        let msg = await login("admin", "1234");
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
}
testLogin();
// 10. Chain multiple async functions (like getUser(), getPosts(userId), 
// getComments(postId)) using async/await.

function getUser() {
    return new Promise(resolve => setTimeout(() => 
        resolve({ id: 1, name: "Alice" }), 1000));
}
function getPosts(userId) {
    return new Promise(resolve => setTimeout(() => 
        resolve([{ postId: 101, userId }]), 1000));
}
function getComments(postId) {
    return new Promise(resolve => setTimeout(() => 
        resolve("Nice Comment"), 1000));
}

async function fetchUserData() {
    try {
        let user = await getUser();
        console.log("User:", user);

        let posts = await getPosts(user.id);
        console.log("Posts:", posts);

        let comments = await getComments(posts[0].postId);
        console.log("Comments:", comments);
    } 
    
    catch (err) {
        console.log(err);
    }
}
fetchUserData();

// 11. Implement a retry mechanism: if a Promise fails, retry up to 3 times using 
// async/await.

function unreliableTask() {
    return new Promise((resolve, reject) => {
        Math.random() > 0.7 ? resolve("Success") : reject("Failed");
    });
}

async function retryTask(attempts) {
    for (let i = 0; i < attempts; i++) {
        try {
            let result = await unreliableTask();
            console.log(result);
            return;
        } 
        catch (err) {
            console.log(`Attempt ${i+1} failed`);
        }
    }
    console.log("All attempts failed");
}
retryTask(3);
// 12. Use Promise.race() with two Promises: one resolves and one rejects, 
// and handle whichever completes first.


const p1 = new Promise(resolve => setTimeout(() => resolve("First"), 2000));
const p2 = new Promise((resolve, reject) => setTimeout(() => reject("Second"), 1000));

async function raceDemo() {
    try {
        let result = await Promise.race([p1, p2]);
        console.log(result);
    } 
    catch (err) {
        console.log("Error:", err);
    }
}
raceDemo();
// 13. Read multiple files asynchronously (simulate with Promises and setTimeout) and 
// log their contents using async/await.
function readFileSim(name) {
    return new Promise(resolve => setTimeout(() => resolve(`Content of ${name}`), 1000));
}

async function readFiles() {
    let files = ["file1.txt", "file2.txt", "file3.txt"];
    for (let f of files) {
        let content = await readFileSim(f);
        console.log(content);
    }
}
readFiles();


