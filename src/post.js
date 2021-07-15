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
        let postString = `<div data-id=${this.id}><h2><a data-id=${this.id} href=""> ${this.title}</a> </h2>
        <p> ${this.text} </p>
        <button class="edit" data-id=${this.id}>Edit</button>
        <button class="delete" data-id=${this.id}>Delete</button>
        </div>`
        return postString
    }

    addPostToDom (e) {
        posts.innerHTML += this.postHTML()
        Post.clickOnPostTitle();
        Post.deleteListener();
        Post.editListener();
        
    }

    addShowPostToDom (event) {
        
        showPost.innerHTML += this.postHTML()
        console.log(showPost.innerHTML)
        Post.clickOnPostTitle();
        Post.deleteListener();
        Post.editListener();
    }

    static clickOnPostTitle() {
        const aTags = document.querySelectorAll('a');
        for (const aTag of aTags) {
            aTag.addEventListener('click', postService.showIndividualPost) 
           
            
                // let id = e.target.dataset.id;
                // const currentPost = Post.grabPostById(id);
                // console.log(currentPost);
                // console.log(e.target.dataset.id) 
               
                // postService.showIndividualPost(e)
                // e.preventDefault()
                // clear the page or some of the divs , then append that post to the DOM 
                //append to the dom
               
            }
        } 
        
    


    static grabPostById(id) {
        return Post.all.find(post => post.id == (id)); 
    }
    
    
      
      formHandler() {
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
   static handleButton(e) {
    console.log('we are hitting the handlebutton')
    console.log(e.target)
    // deleteButton.parentElement.innerHTML= " "
    postService.deletePost(e);
}
   
   static deleteListener() {
        const deleteButtons = document.getElementsByClassName('delete');
        for (const deleteButton of deleteButtons) {
            deleteButton.addEventListener('click', this.handleButton) 
                // let id = e.target.dataset.id;
                // console.log(deleteButton.parentElement)
                
                // return e;
                //now send the delete request via fetch so it would be postService.deletePost(e)
            }

            }
            
   

static editListener() {
    const editButtons = document.getElementsByClassName('edit');
    for (const editButton of editButtons) {
        editButton.addEventListener('click', (e) => {
            let id = e.target.dataset.id;
            console.log(editButton, id)
        })
    }
}



}