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
    
    createPost(e) {
        
        const postObj = {
            title: e.target.title.value,
            text: e.target.text.value,
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
        .then(post => {
            console.log('we got to the end')
        })
    }

        
       
    }

    
      

