class App {
  constructor (){
    this.startUp()
  }

  startUp() {
    CategoryAdapter.all();
    // debugger
    // this.createPosts()
    // // debugger
    // this.createComments()
    // // debugger
    // this.createCategories()
  }

  // createCategories(){
  //   fetch(`https://jk-api.herokuapp.com/api/v1/categories`)
  //   .then(res => res.json())
  //   .then(res => {
  //     const categories = res
  //     .map(category => {
  //       return {
  //         id: category.id,
  //         name: category.name,
  //
  //       };
  //     })
  //     .map(categoryData => {
  //       new Category(categoryData);
  //     });
  //   });
  // }
  //
  // createPosts(){
  //   fetch(`https://jk-api.herokuapp.com/api/v1/posts`)
  //   .then(res => res.json())
  //   .then(res => {
  //     const posts = res
  //     .map(post => {
  //       return {
  //         id: post.id,
  //         text: post.text,
  //         category_id: post.category_id,
  //         image: post.image
  //
  //       };
  //     })
  //     .map(postData => {
  //       new Post(postData);
  //     });
  //   });
  //   // debugger
  // }
  //
  // createComments(){
  //   fetch(`https://jk-api.herokuapp.com/api/v1/comments`)
  //   .then(res => res.json())
  //   .then(res => {
  //     const comments = res
  //     .map(comment => {
  //       return {
  //         id: comment.id,
  //         text: comment.text,
  //         post_id: comment.post_id,
  //
  //
  //       };
  //     })
  //     .map(commentData => {
  //       new Comment(commentData);
  //     });
  //   });
  // }

  addEventListeners() {
    document.body.addEventListener("click", function(e) {
      if (e.target.className === "categories") {
        debugger;
        let category_id = event.target.id.split("_")[1];
        console.log(category_id);
        PostAdapter.all(category_id)
        


      }
    });
  }

}
