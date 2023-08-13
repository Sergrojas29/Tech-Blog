
const postBtn = document.querySelector('.btnPostSubmit')
const deleteBtn = document.querySelector('#deleteBtn')


const sendPost = async (event) => {

    event.preventDefault();

    const title = document.querySelector('#postTitle').value
    const content = document.querySelector('#Content').value
    if (title && content) {
        const response = await fetch('/api/post/', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });        
        
    if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Missing information');
      }
    }
};


const deletePost = async (event) => {
    postSelected = event.target
    const userId = event.target.getAttribute("userId")
    const postId = event.target.getAttribute("postId")    


    const response = await fetch('/api/post/', {
        method: 'DELETE',
        body: JSON.stringify({postId,userId}),
        headers: { 'Content-Type': 'application/json' },
    });   
    response.ok ?
    document.location.reload():
    alert("Can't Delete other Users Post")
}




if(deleteBtn){
    deleteBtn.addEventListener('click', deletePost)
}

if(postBtn){
    postBtn.addEventListener('click', sendPost)
}

