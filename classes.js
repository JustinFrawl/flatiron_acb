class Comment {
  constructor(data){
    this.text = data.text
    this.post_id = data.post_id
    this.id = data.id
    if (this.findOrCreateBy()) {
      this.findOrCreateBy();
    } else {
      store.comments.push(this);
    }
  }
  findOrCreateBy() {
    return store.comments.find(comment => {
      return comment.id === this.id;
    });
  }
}

class Post {
  constructor(data) {
    this.text = data.text
    this.category_id = data.category_id
    this.id = data.id
    if (this.findOrCreateBy()) {
      this.findOrCreateBy();
    } else {
      store.posts.push(this);
    }
    // this.addEventlistener()
  }
  comments() {
    return store.comments.filter(comment => {
      return comment.post_id == this.id;
    });
  }
  renderComments() {
    let thisPost = document.querySelector(`#post_${this.id}`);
    let ol = document.getElementById(`comment-container-${this.id}`)
    ol.innerHTML = ""
    this.comments().forEach(comment => {
      // console.log(comment)
      let li = document.createElement("li");
      li.id = `comment_${comment.id}`;
      li.innerHTML = comment.text;
      ol.appendChild(li);
      thisPost.appendChild(ol);
    });
    let commentForm = document.createElement("form");
    commentForm.id = "comment_form";
    commentForm.innerHTML =
    `<input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
    <input id ="comment_submit" input type="submit" value="Submit"/>`
    let addComment = document.querySelector("#post_place");
    ol.appendChild(commentForm);
  }
   renderLikeButton() {
    let thisPost = document.querySelector(`#post_${this.id}`);
    let likeButton = document.createElement("button");
    likeButton.innerText = "Likes";
    likeButton.id = "like_button"
    thisPost.append(likeButton);
    this.renderLikes();
  }
  renderLikes() {
    let thisPost = document.querySelector(`#post_${this.id}`);
    let likes = document.createElement("span");
    likes.id = "likes"
    likes.innerText = 0;
    thisPost.append(likes);
  }
  findOrCreateBy() {
    return store.posts.find(post => {
      return post.id === this.id;
    });
  }
//   addEventlistener(){
//   document.body.addEventListener("submit", e => {
//     if (e.target.id === "comment_form") {
//       e.preventDefault();
//       let thisPost = document.querySelector(`#post_${this.id}`);
//       debugger
//       let ol = document.getElementById(`comment-container-${this.id}`)
//       // this.renderComments()
//       let li = document.createElement("li");
//       li.innerHTML = comment_input.value;
//       ol.appendChild(li);
//
//     }
//   })
// }
}


class Category {
  constructor(data){
    this.name = data.name
    this.id = data.id;
    this.renderCategories();
    if (this.findOrCreateBy()) {
      this.findOrCreateBy();
    } else {
      store.categories.push(this);
    }
  }
  posts() {
    return store.posts.filter(post => {
      return post.category_id == this.id;
    });
  }
  renderCategories() {
    let li = document.createElement('li');
    li.id = `category_${this.id}`;
    li.className = "categories";
    li.innerHTML = this.name;
    categoryDiv.appendChild(li);
  }
  renderPosts() {
    postPlace.innerHTML = ""
    this.posts().forEach(post => {
      let div = document.createElement("div");
      let ol = document.createElement("ol");
      ol.id = `comment-container-${post.id}`
      div.id = `post_${post.id}`;
      div.className = "posts";
      div.innerHTML = post.text;
      div.appendChild(ol)
      postPlace.append(div);
    })
    let postForm = document.createElement("form");
    postForm.id = "post_form";
    postForm.innerHTML =
      `<input id="post_input" type="text" name="post" placeholder="Add Post"/>
      <input id ="post_submit" input type="submit" value="Submit"/>`
    postPlace.append(postForm);
  }
  findOrCreateBy() {
    return store.categories.find(category => {
      return category.id === this.id;
    });
  }
}
