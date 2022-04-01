const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];
// methode getPosts
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output +=`
                <li>${post.title}</li>
            `;
        });
        document.body.innerHTML = output;
    }, 1000);
}
// createPost
function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}
// call methode getPosts
// getPosts();
// createPost
createPost({title: 'Post Three', body: 'This is post Three'}, getPosts);

