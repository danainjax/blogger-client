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
}