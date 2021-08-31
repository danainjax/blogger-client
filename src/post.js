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
        Post.clickOnPostTitle();
        Post.deleteListener();
        Post.editListener();
    }

    static clickOnPostTitle() {
        const aTags = document.querySelectorAll('a');
        for (const aTag of aTags) {
            aTag.addEventListener('click', postService.showIndividualPost) 
            }
        } 
   
   static handleButton(e) {
    // deleteButton.parentElement.innerHTML= " "
    postService.deletePost(e);
}
   
   static deleteListener() {
        const deleteButtons = document.getElementsByClassName('delete');
        for (const deleteButton of deleteButtons) {
            deleteButton.addEventListener('click', this.handleButton) 
            }

    }
            
    static editListener() {
        const editButtons = document.getElementsByClassName('edit');
        for (const editButton of editButtons) {
            editButton.addEventListener('click', (e) => {
                let id = e.target.dataset.id;
                //write code to assign the post to a variable here
                console.log(editButton, id)
                console.log(this)
                postService.editPost(this)
            })
        }
    }



}