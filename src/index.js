const posts = document.getElementById("posts-container")
const newPost = document.getElementById("new-post")
const showPost = document.getElementById("show-post")
const textarea = document.getElementById("text")
const baseURL = "http://localhost:3000"
const postService = new PostService();
const categoryService = new CategoryService();
const form = document.querySelector("#posts-form")

categoryService.fetchAndLoadCategories();
postService.fetchAndLoadPosts();
postService.formHandler();



