class App {
 constructor (){
   CategoryAdapter.all()
 }

 addEventListeners() {
   document.body.addEventListener("click", function(e) {
     if (e.target.className === "categories") {
       let category_id = event.target.id.split("_")[1];
       PostAdapter.all(category_id);
       console.log(store)
       let post = store.categories.filter(category => {
         console.log(category)
         console.log(category_id)
         return category.id == category_id;
       });
       console.log(`this is category_id ${category_id}`)
       console.log(post)
       post[0].renderPosts();


     }
   });
 }

}
