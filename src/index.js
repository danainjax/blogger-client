const posts = document.getElementById("posts-container")
const newPost = document.getElementById("new-post")
const categories = document.getElementById("categories-container")
const baseURL = "http://localhost:3000"
const postService = new PostService();

postService.fetchAndLoadPosts()