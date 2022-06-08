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
//call getPosts
getPosts();
//createPosts
function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}
//createPost
createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
//getPosts
