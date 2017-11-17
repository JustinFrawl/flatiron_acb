let category_id;
let post_id;

class App {
  constructor() {
    CategoryAdapter.all()
  }

  addEventListeners() {
    button.addEventListener('click', e => {
      // console.log('clicked')
      postPlace.innerHTML = ""
      renderNewCatForm()
    })
    document.body.addEventListener("click", e => {
      if (e.target.className === "categories") {
        postPlace.innerHTML = ""
        category_id = event.target.id.split("_")[1];
        PostAdapter.all(category_id).then( () => {
          let showPosts = store.categories.filter(category => {
            return category.id == category_id;
          });
          // let posts = showPosts.posts()
          // debugger
          showPosts[0].renderPosts();
          // this.addPostButton();
        });

        // debugger
      }
      if (e.target.className === "posts") {
        category_id = event.target.id.split("_")[1];
        post_id = event.target.id.split("_")[1];
        CommentAdapter.all(category_id, post_id).then( () => {
          let showComments = store.posts.filter(post => {
            return post.id == post_id;
          });
          showComments[0].renderComments();
          // this.addCommentButton();
        } );


      }
      if (e.target.id === "like_button") {
        // postPlace.innerHTML = ""
        let likes = document.querySelector("#likes");
        likes.innerText = parseInt(likes.innerText) + 1;
      }
    });
    document.body.addEventListener("submit", e => {
      // postPlace.innerHTML = ""
      if (e.target.id === "post_form") {
        e.preventDefault();
        this.addPost(post_input.value,);


      }
      if (e.target.id === "comment_form") {
        e.preventDefault();
        this.addComment(comment_input.value)
      }
    });
  }

  // addPostButton() {
  //   // postPlace.innerHTML = ""
  //   let postForm = document.createElement("form");
  //   postForm.id = "post_form";
  //   postForm.innerHTML =
  //     `<input id="post_input" type="text" name="post" placeholder="Add Post"/>
  //     <input id ="post_submit" input type="submit" value="Submit"/>`
  //   let addPost = document.querySelector("#post_place");
  //   addPost.append(postForm);
  // }

  // addCommentButton() {
  //   // postPlace.innerHTML = ""
  //   let commentForm = document.createElement("form");
  //   commentForm.id = "comment_form";
  //   commentForm.innerHTML =
  //   `<input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
  //   <input id ="comment_submit" input type="submit" value="Submit"/>`
  //   let addComment = document.querySelector("#post_place");
  //   addComment.append(commentForm);
  // }

  addPost(input) {
    if (input == ""){
      alert("Fill in the Post Form you Bully")
    }
    else {
    fetch (`https://jk-api.herokuapp.com/api/v1/categories/${category_id}/posts`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: input,
        category_id: category_id,
        id: `{store.posts.length}`
      })
    })
    .then(resp => resp.json())
    .then(json => {
      var x = store.categories.filter(category=> category.id === json.category_id)[0];
      new Post(json)
      x.renderPosts();

  })
}
  }

  addComment(input,postId) {
    if (input == ""){
      alert("Fill in the Comment Form you Bully")
    }
    else {
    fetch (`https://jk-api.herokuapp.com/api/v1/categories/${category_id}/posts/${post_id}/comments`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: `${store.comments.length}`,
        text:  input,
        post_id: `${post_id}`,
        image: "image"
      })
    })
    .then(resp => resp.json())
    .then(json => {
      var x = store.posts.filter(post=> post.id === json.post_id)[0];
      // console.log(x)
      console.log(store)
      new Comment(json)
      console.log(store)
      x.renderComments();
  })
}
}
}
