class CommentAdapter {
  static all(category_id, post_id) {
    fetch(`https://jk-api.herokuapp.com/api/v1/categories/${category_id}/posts/${post_id}/comments`)
    .then(res => res.json())
    .then(res => {
      const comments = res
      .map(comment => {
        return {
          id: comment.id,
          text: comment.text,
          post_id: comment.post_id
        };
      })
      .map(commentData => {
        new Comment(commentData);
      });
    });
  }

  static show(category_id, post_id, comment_id) {
    fetch(`https://jk-api.herokuapp.com/api/v1/categories/${category_id}/posts/${post_id}/comments/${comment_id}`)
    .then(res => res.json())
    .then(res => {
      const comments = res
      .map(comment => {
        return {
          id: comment.id,
          text: comment.text,
          post_id: comment.post_id
        };
      })
      .map(commentData => {
        new Comment(commentData);
      });
    });
  }
}
