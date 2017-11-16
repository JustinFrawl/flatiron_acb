let store = {categories: [], posts: [], comments: []};

const categoryDiv = document.getElementById('category_div')
const postPlace = document.getElementById('post_place')
const button = document.getElementById('createCatButton')

document.addEventListener('DOMContentLoaded', function() {
  app = new App;
  app.addEventListeners();
  // setEventListeners()
})

// function setEventListeners(){
//   button.addEventListener('click', e => {
//     console.log('clicked')
//     postPlace.innerHTML = ""
//     renderNewCatForm()
//   })
// }

function renderNewCatForm(){
  let form = document.createElement('form')
  form.innerHTML = `Category Title:<br>
  <input id="new_category" type="text" name="firstname" value="">
  <br><input id="new_cat_submit" type="submit" value="Submit">
  </form> `
  form.style.width = "200x"
  form.id = "new_cat_form"
  postPlace.appendChild(form)
  addCatFormEventListener()
}

function addCatFormEventListener(){
  const new_cat = document.querySelector('#new_cat_form')
  const new_cat_value = new_cat.children[1]
  new_cat.addEventListener('submit', e =>{
    e.preventDefault()
    console.log('what the heck')
    debugger
    post_cat(new_cat_value.value)
  })
}

function post_cat(value) {
  if (value === undefined) {
    alert('no workie');
  } else {
    fetch("https://jk-api.herokuapp.com/api/v1/categories", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: `${value}`
      })
    })
    .then(function (data) {
      console.log('Request success: ', data);
    })
    .catch(function (error) {
      console.log('Request failure: ', error);
    });
  }
}



// function renderCategories(){
//   store.categories.forEach(category => {
//     let x = document.createElement('li')
//     x.innerText = category.name
//     categoryDiv.appendChild(x)
//   })
// }
//
// function createCategories(){
//  fetch(`https://jk-api.herokuapp.com/api/v1/categories`)
//       .then(res => res.json())
//       .then(res => {
//         const categories = res
//           .map(category => {
//             return {
//               id: category.id,
//               name: category.name,
//
//             };
//           })
//           .map(categoryData => {
//           new Category(categoryData);
//           });
//         });
//     }
//     function createPosts(){
//      fetch(`https://jk-api.herokuapp.com/api/v1/posts`)
//           .then(res => res.json())
//           .then(res => {
//             const posts = res
//               .map(post => {
//                 return {
//                   id: post.id,
//                   text: post.text,
//                   category_id: post.category_id,
//                   image: post.image
//
//                 };
//               })
//               .map(postData => {
//             new Post(postData);
//               });
//             });
//           }
//
//             function createComments(){
//              fetch(`https://jk-api.herokuapp.com/api/v1/comments`)
//                   .then(res => res.json())
//                   .then(res => {
//                     const comments = res
//                       .map(comment => {
//                         return {
//                           id: comment.id,
//                           text: comment.text,
//                           post_id: comment.post_id,
//
//
//                         };
//                       })
//                       .map(commentData => {
//                       new Comment(commentData);
//                       });
//                     });
//         }
