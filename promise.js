const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];
// getPosts
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `
                <ul>
                    <li>${post.title}</li>
                    <li>${post.body}</li>
                </ul>
                <hr/>
            `;
        });
        document.body.innerHTML = output;
    }, 1000);
}
//createPosts
function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: Something wen wrong');
            }
        }, 2000);
    });
}
//call createPost
createPost({title: 'Post three', body: 'This is post Three'})
.then(getPosts)
.catch(err => console.log(err));
// promise all 
const promise1 = Promise.resolve('Hello');
const promise2 = 2;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'Hello');
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
Promise.all([promise1, promise2, promise3, promise4]).then((value) => {
    console.log(value);
});

//
async function FetchData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    data = res.json();
    return data;
}
FetchData();

async function init(){
    await createPost({title: 'Post three', body: 'This is post Three'});
    getPosts();
}
init();