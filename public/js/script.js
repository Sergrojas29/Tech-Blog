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

const postBtn = document.querySelector('.btnPostSubmit')

if(postBtn){
    postBtn.addEventListener('click', sendPost)
}

