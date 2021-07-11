class Post {
    static all = [];
    constructor (post) {
        this.title = post.title;
        this.text = post.text;
        this.category_id = post.category_id;
        Post.all.push(this);

    }

    getPosts () {
        postService.fetchAndLoadPosts()  
    }
   
    postHTML() {
        let postString = `<h2> ${this.title} </h2>
        <p> ${this.text} </p>`
        return postString
    }

    addPostToDom () {
        posts.innerHTML += this.postHTML()
    }

}