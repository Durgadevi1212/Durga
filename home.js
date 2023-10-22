
fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => { 
    data.forEach((user) => {
        const commentSection = document.querySelector('.comment-section')
        const commentBox = document.createElement('div')
        commentBox.classList.add('comment-box')
        commentBox.innerHTML = `<div class='username'>Name: <span>${user.name}</span></div>
                                <div class='email'>Email: <span>${user.email}</span></div>
                                <div class='comment'>${user.body}</div>`
        commentSection.appendChild(commentBox)

    }) 
})

.catch(error => console.error('Error', error))




    