class CategoryAdapter {
  static all() {
    fetch(`https://jk-api.herokuapp.com/api/v1/categories`)
    .then(res => res.json())
    .then(res => {
      const categories = res
      .map(category => {
        return {
          id: category.id,
          name: category.name,
          posts: category.posts,
        };
      })
      .map(categoryData => {
        new Category(categoryData);
      });
    });
  }

  static show(category_id) {
    fetch(`https://jk-api.herokuapp.com/api/v1/categories/${category_id}`)
    .then(res => res.json())
    .then(res => {
      const categories = res
      .map(category => {
        return {
          id: category.id,
          name: category.name,
          posts: category.posts,
        };
      })
      .map(categoryData => {
        new Category(categoryData);
      });
    });
  }
}
