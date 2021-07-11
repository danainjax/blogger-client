class PostService {
    constructor() {
        this.endpoint = `${baseURL}/posts`;
    }


    fetchAndLoadPosts() {
        this.getPosts().then((posts) => {
            console.log(posts);
        })
    }

    getPosts () {
        return fetch(this.endpoint).then((res) => res.json());
    }
}