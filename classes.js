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
  }
  class Post {
      constructor(data){
        this.text = data.text
        this.category_id = data.category_id
        this.id = data.id
        this.comments = data.comments
        store.posts.push(this);
      }
      comments() {
      return store.comments.filter(comment => {
        return comment.post_id == this.id;
          });
      }
    }

class Category {
       constructor(data){
          this.name = data.name
          this.posts = data.posts
          this.id = data.id;
          store.categories.push(this);
          this.renderSelf()
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
            categoryDiv.appendChild(x)
        }
      }
