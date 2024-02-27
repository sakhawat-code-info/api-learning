

















// ******************************************* post data code

// function loadPostData() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => displayPost(data))
// }

// function displayPost(allPost) {
//     const postContainer = document.getElementById('postSection');

//     for (const post of allPost) {
//         const singlePostDiv = document.createElement('div');
//         singlePostDiv.classList.add('post_div')
//         singlePostDiv.innerHTML = `
//             <h4 class="text-black">User Id ${post.id}</h4>
//             <h4>Title ${post.title}</h4>
//             <h4 class="text-yellow-300 text-center">Description ${post.body}</h4>
//         `
//         postContainer.appendChild(singlePostDiv);
//     }

// }

// loadPostData();



// ***************************************************user  data code

// function userDataLoading() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => userDataShow(data))
// }


// function userDataShow(data) {
//     const liContainer = document.getElementById('li-container');
//     for (const user of data) {
//         const li = document.createElement('li');
//         li.innerText = user.name;
//         liContainer.appendChild(li);
//     }
// }