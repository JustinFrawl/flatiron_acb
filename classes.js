class Comment {
  constructor(data){
    this.text = data.text
    this.post_id = data.post_id
    this.id = data.id
    store.comments.push(this);
  }
}

class Post {
  constructor(data) {
    this.text = data.text
    this.category_id = data.category_id
    this.comments = data.comments
    this.id = data.id
    store.posts.push(this);
  }
  comments() {
    return store.comments.filter(comment => {
      return comment.post_id == this.id;
    });
  }
  renderComments() {
    this.comments().forEach(comment => {
      let thisPost = document.querySelector(`#post_${this.id}`);
      let ol = document.createElement("ol");
      let li = document.createElement("li");
      li.innerHTML = comment.text;
      li.id = `comment_${comment.id}`;
      ol.append(li);
      thisPost.append(ol);
      this.renderLikeButton();
    })
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
}

class Category {
  constructor(data){
    this.name = data.name
    this.id = data.id;
    this.posts = data.posts
    store.categories.push(this);
    this.renderCategories();
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
    this.posts.forEach(post => {
      let div = document.createElement("div");
      div.id = `post_${post.id}`;
      div.className = "posts";
      div.innerHTML = post.text;
      postPlace.append(div);
    })
  }
}
