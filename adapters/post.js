class PostAdapter {
  static all(category_id) {
    fetch(`https://jk-api.herokuapp.com/api/v1/categories/${category_id}/posts`)
    .then(res => res.json())
    .then(res => {
      const posts = res
      .map(post => {
        return {
          id: post.id,
          text: post.text,
          category_id: post.category_id,
          image: post.image
        };
      })
      .map(postData => {
        new Post(postData);
      });
      console.log(category_id);
      debugger
    });
  }

  static show(category_id, post_id) {
    fetch(`https://jk-api.herokuapp.com/api/v1/categories/${category_id}/posts/${post_id}`)
    .then(res => res.json())
    .then(res => {
      const posts = res
      .map(post => {
        return {
          id: post.id,
          text: post.text,
          category_id: post.category_id,
          image: post.image
        };
      })
      .map(postData => {
        new Post(postData);
      });
    });
  }
}
