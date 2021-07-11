class Category {
    static all = [];
    constructor (category) {
        this.name = category.name;
        this.id = category.id;
        Category.all.push(this);

    }
}