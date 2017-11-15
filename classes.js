let postid = 0
let commentid = 0
let categoryid = 0



class Comment {
  constructor(data){
    this.text = data.text
    this.post_id = data.post_id
    this.id = data.id
    store.comments.push(this);
  }


class Post {
  constructor(data){
    this.text = data.text
    this.category_id = data.category_id
    this.id = data.id
    store.posts.push(this);
    // this.renderComments();
  }
  comments() {
    return store.comments.filter(comment => {
      return comment.post_id == this.id;
    });
  }
  // renderComments() {
  //   this.comments().forEach(comment => {
  //     let thisPost = document.querySelector(`#post_${this.id}`);
  //
  //     let li = document.createElement("li");
  //     li.innerHTML = comment.text;
  //     li.id = `comment_${comment.id}`
  //     console.log(this.id)
  //     console.log(thisPost)
  //     thisPost.append(li);
  //   })
  // }
}

class Category {
  constructor(data){
    this.name = data.name
    this.id = data.id;
    store.categories.push(this);
    this.renderSelf()
    this.renderPosts();
    // this.toggleComments();
  }
  posts() {
    return store.posts.filter(post => {
      return post.category_id == this.id;
    });
  }
  renderSelf(){
    let x = document.createElement('li')
    x.innerText = this.name
    x.id = `category_${this.id}`
    x.className = `categories`
    categoryDiv.appendChild(x)
  }

  renderPosts() {
    this.posts().forEach(post => {
      let ul = document.createElement("ul");
      ul.innerHTML = post.text;
      ul.dataset.id = `${post.id}`
      postPlace.append(ul);
    })
  }

  // toggleComments() {
  //   let toggle = document.querySelector(`#post_${this.id}`);
  //   toggle.addEventListener("click", function(){
  //     var show = document.getElementById('show-pronunciation');
  //     var pron = document.querySelector('.pronunciation');
  //   });
  // }

  // $(`post_${post_id}`).click(function(){
  //   $(`comment_${this.id}`).slideToggle();
  // });
}
