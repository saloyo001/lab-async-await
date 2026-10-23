// Write your code here!




function addPost(post) {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);

    document.getElementById("post-list").appendChild(li);
}

function displayPosts(posts) {
    posts.forEach(function(post) {
        addPost(post);
    });
}

async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    displayPosts(posts);
}

getPosts();
