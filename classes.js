let store = {posts: [], categories: [], comments: []}
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
          this.id = data.id;
          store.categories.push(this);
        }
        posts() {
        return store.posts.filter(post => {
          return post.category_id == this.id;
            });
        }
      }
