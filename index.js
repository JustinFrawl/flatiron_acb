document.addEventListener('DOMContentLoaded', function() {
  createCategories()
  createPosts()
  createComments()
})

function createCategories(){
 fetch(`https://jk-api.herokuapp.com/api/v1/categories`)
      .then(res => res.json())
      .then(res => {
        const categories = res
          .map(category => {
            return {
              id: category.id,
              name: category.name,

            };
          })
          .map(categoryData => {
          new Category(categoryData);
          });
        });
    }
    function createPosts(){
     fetch(`https://jk-api.herokuapp.com/api/v1/posts`)
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

            function createComments(){
             fetch(`https://jk-api.herokuapp.com/api/v1/comments`)
                  .then(res => res.json())
                  .then(res => {
                    const comments = res
                      .map(comment => {
                        return {
                          id: comment.id,
                          text: comment.text,
                          post_id: comment.post_id,


                        };
                      })
                      .map(commentData => {
                      new Comment(commentData);
                      });
                    });
        }
