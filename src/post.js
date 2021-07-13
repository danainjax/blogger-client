class Post {
    static all = [];
    constructor (post) {
        this.title = post.title;
        this.text = post.text;
        this.id = post.id;
        this.category_id = post.category_id;
        Post.all.push(this);

    }
   
    postHTML() {
        let postString = `<h2><a data-id=${this.id} href=""> ${this.title}</a> </h2>
        <p> ${this.text} </p>
        <button>Edit</button>
        <button>Delete</button>
        <br>`
        return postString
    }

    addPostToDom (e) {
        posts.innerHTML += this.postHTML()
        Post.clickOnPostTitle();
        
    }

    static clickOnPostTitle() {
        const aTags = document.querySelectorAll('a');
        for (const aTag of aTags) {
            aTag.addEventListener('click', (e) => {
                let id = e.target.dataset.id;
                const currentPost = Post.grabPostById(id);
                console.log(currentPost);
                // clear the page or some of the divs , then append that post to the DOM 
                //append to the dom
               
            })
        } 
    }

    static grabPostById(id) {
        return Post.all.find(post => post.id == (id)); 
    }
    
    
      
      formHandler () {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const title = e.target.title.value;
            const text = e.target.text.value;
           return e
           
           // setTimeout(function() {form.reset()}, 2000); 
            //call a PostService fetch post request with the data you grabbed.
        })
        postService.createPost(e)
        
        
        
        
   }
   

    


}