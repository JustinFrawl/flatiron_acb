class PostAdapter {
  static all(category_id) {
    return fetch(`https://jk-api.herokuapp.com/api/v1/categories/${category_id}/posts`)
    .then(res => res.json())
    .then(res => {
      const posts = res
      .map(post => {
        return {
          id: post.id,
          text: post.text,
          category_id: post.category_id,
          image: post.image,
          comments: post.comments,
        };
      })
      .map(postData => {
        if (this.findOrCreateBy(postData) == true){
        new Post(postData);
      }
      });
    });
  }

  static show(category_id, post_id) {
    return fetch(`https://jk-api.herokuapp.com/api/v1/categories/${category_id}/posts/${post_id}`)
    .then(res => res.json())
    .then(res => {
      const posts = res
      .map(post => {
        return {
          id: post.id,
          text: post.text,
          category_id: post.category_id,
          image: post.image,
          comments: post.comments,
        };
      })
      .map(postData => {
        if (this.findOrCreateBy(postData) == true){
        new Post(postData);
      }
      });
    });
  }
  static findOrCreateBy(data) {
   return store.posts.find(post => {
     return post.id === data.id;
   });
 }
}
