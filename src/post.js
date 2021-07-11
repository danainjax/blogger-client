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

    addPostToDom () {
        posts.innerHTML += this.postHTML()
    }

    //add event listener to the a tag on the title for each post
    //grab the dataset.id from it and then fetch that grab the post from Post.all and append to the dom
    

}