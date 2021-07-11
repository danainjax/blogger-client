class CategoryService {
    constructor() {
        this.endpoint = `${baseURL}/categories`;
    }


    fetchAndLoadCategories() {
        this.getCategories().then((categories) => {
            categories.forEach((category) => {
                let c = new Category(category);
                // console.log(category)
            })
        })
    }

    getCategories () {
        return fetch(this.endpoint).then((res) => res.json());
    }
}