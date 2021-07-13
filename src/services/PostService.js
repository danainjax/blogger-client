class PostService {
    constructor() {
        this.endpoint = `${baseURL}/posts`;
    }

    fetchAndLoadPosts() {
        this.getPosts().then((posts) => {
            posts.forEach((post) => {
                let p = new Post(post);
                p.addPostToDom();
            })
        })
    }

    getPosts () {
        return fetch(this.endpoint).then((res) => res.json());
    }

    formHandler () {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            this.createPost()
           setTimeout(function() {form.reset()}, 2000); 
           
        }) 
   }
    createPost() {
        
        const postObj = {
            title: document.getElementById('title').value,
            text: document.getElementById('text').value,
            category_id: 3
           
        }
       
        fetch(this.endpoint, {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postObj)
        })
        .then(resp => resp.json())
        .then(post => {
            let p = new Post(post)
            p.addPostToDom();
        })
    }

    deletePost(e) {
        const id = e.target.dataset.id;
        const div = e.target.parentElement
        fetch(`http://localhost:3000/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        div.innerHTML = " "
        console.log(`post${id} deleted from db, check and see!`)  
      
    }
        
       
    }

    
      

