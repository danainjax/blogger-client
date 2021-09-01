class PostService {
    constructor() {
        this.endpoint = `${baseURL}/posts`;
    }

    fetchAndLoadPosts() {
        this.getPosts().then((posts) => {console.log(posts)
            posts.forEach((post) => {
                let p = new Post(post);
                console.log(p)
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
            //category id is currently hard coded, need to hook up the category id in radio buttons or drop down on the form and grab the data to include in object and fetch
           
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
    }

    editPost(){
        console.log('edit post code')
    }

    showIndividualPost() {
        event.preventDefault()
        const id = event.target.dataset.id
        return fetch(`http://localhost:3000/posts/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                
            })
        .then(resp => (resp.json())
        .then(post => {
            let p = new Post(post)
            p.addShowPostToDom();
        })
    )
    }

}

    
      

