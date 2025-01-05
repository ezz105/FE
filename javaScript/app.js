// 


let currentPage = 1;
const postsPerPage = 10;

function displayPosts(posts, page) {
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = posts.slice(startIndex, endIndex);
    const cont = document.getElementById('root');
    cont.innerHTML = ''; // Clear previous posts

    paginatedPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = (
            `
            <div class="bg-gray-800 flex flex-col p-4 m-4 rounded-lg shadow-lg">
                <h2 class="text-xl text-white"> ${post.id}</h2> <br>
                <p class="text-green-200">${post.title}</p>
                <img src="${post.url}" alt="image">
            </div>
            `
        );
        console.log(post);
        
        cont.appendChild(postElement);
    });
}

function createPagination(posts) {
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = ''; // Clear previous pagination

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayPosts(posts, currentPage);
        });
        paginationContainer.appendChild(pageButton);
    }
}


    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
        displayPosts(data, currentPage);
        createPagination(data);
    })
    .catch(error => {
        console.log(error);
    });


    