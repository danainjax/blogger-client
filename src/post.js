class Post {
    static all = [];
    constructor (post) {
        this.title = post.title;
        this.text = post.text;
        this.category_id = post.category_id;
        Post.all.push(this);

    }
}