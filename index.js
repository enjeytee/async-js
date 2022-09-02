/// ASYNC JS ///

navigator.geolocation.getCurrentPosition(
    position => {
    console.log(position);
});
console.log('done');

const promise = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('Promise succeeded'), 3000);
    setTimeout(() => reject(Error("Promise failed")), 3000);
});
console.group(promise);
promise
    .then(value => {console.log(value)})
    .catch(error => {console.error(error)})
    .finally(() => console.log("done"));

const promise2 = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(position => resolve(position)), error => reject(error)
    // navigator.geolocation.getCurrentPosition(resolve, reject) // ALTERNATE TO ABOVE
});
promise2
    .then(position => console.log(position))
    .catch(error => console.error(error))
    .finally(() => console.log("done"));

fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then(response => 
        {
            if (!response.ok) {
                throw new Error(response.status)
            } else {
                return response.json()
            }
        }
    )
    .then(data => console.log(data))
    .catch(error => console.error(error));
const blogPost = {
    title: "Cool post",
    body: "abcdefghijklmnopqrstuvwxyz",
    userId: 1
}
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    // body: JSON.stringify({
    //     title: "Cool post",
    //     body: "The quick brown fox jumps over the lazy dog.",
    //     userId: 1
    // })
    body: JSON.stringify(blogPost) // ALTERNATIVE TO ABOVE CODE
})
    .then(response => response.json())
    .then(data => console.log(data));

fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error(response.status)
        }        
    })
    .then(data => console.log(`Name: ${data.name}, Company: ${data.company.name}`))
    .catch(error => console.error(error));

async function getBlogPost() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("blog post")
        }, 1000);
    })
    const result = await promise;
    console.log(result);
    console.log('done');
};
getBlogPost();

async function getPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
}
getPost();

const getPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
};
getPost();

async function runAsync() {
    try {
        await Promise.reject(Error('Oops'))
        null.someProperty = true;
    }
    catch (error) {
        console.error(error);
    };
}
runAsync();

async function runAsync() {
        return await Promise.reject(Error('Oops'))
}
runAsync().catch(error => console.error(error));

async function getGithubUser() {
    try {
        const response = await fetch("https://api.github.com/users/a;lsdkjfa;sldkfj");
        if (!response.ok) {
            throw new Error(response.status);
        }
    } catch (error) {
        alert(error.message);
        console.error(error);
    };
};
getGithubUser();

const getUser = async function() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/3')
        if (!response.ok) {
            throw new Error(response.status)
        } else {
            const data = await response.json();
            console.log(`${data.name} works for ${data.company.name}`);
        }
    } catch (error) {
        alert(error.message);
        console.error(error.message);
    }
}
getUser();

const getUser2 = async function() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/3')
        if (!response.ok) {
            throw new Error(response.status)
        } 
        const data = await response.json();
        alert(`${data.name} works for ${data.company.name}`);
        console.log(`${data.name} works for ${data.company.name}`);
    } catch (error) {
        alert(`Error code: ${error.message}`);
        console.error(error.message);
    }
}
getUser2();