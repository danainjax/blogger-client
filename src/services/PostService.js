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
            // const title = e.target.title.value;
            // const text = e.target.text.value;
            this.createPost()
            // return e
           
           setTimeout(function() {form.reset()}, 2000); 
            //call a PostService fetch post request with the data you grabbed.
        })
       
        
        
   }
    createPost() {
        
        const postObj = {
            title: document.getElementById('title').value,
            text: document.getElementById('text').value,
            category_id: 3
           
        }
        console.log('are we hitting this?')
        console.log(postObj)
        fetch(this.endpoint, {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postObj)
        })
        .then(resp => resp.json())
        .then(post => {postService.fetchAndLoadPosts()
        })
    }

        
       
    }

    
      

