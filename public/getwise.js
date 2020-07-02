export const getWise = (cat) => {
    //hides the form column if it is open
    lastCategory = cat;
    let commentableArray = false;
    viewer.innerHTML = '';
    columnToggle(viewer);
    //get request to the Firebase collection. Param is snapshot because that is what the collection is referred to in documentation
    db.collection('wisdomcollection').get().then((snapshot) => {
      viewer.innerHTML = '';
      //snapshot.docs is the path to retrieve objects
    snapshot.docs.forEach(doc =>
      {
        //for each doc, you must append with .data() to retrieve the data
        // follow .data() with an object key to retrieve a value
        if (doc.data().category == cat) {
          let checkFavorited = doc.data().wisdom
          //creates new element in the DOM
          let item = document.createElement("li");
          //gives element a class name attribute
          item.className = 'result-li'
          item.name = doc.id;
          item.value = doc.data().favorites
          console.log(`the value of this list item is: ${item.value}`)
          //displays readable data for the user
          item.innerHTML = `<div class="commenttop"> "${doc.data().wisdom}" <br><br><div class="itemauthor" style="display: block">submitted by ${doc.data().user}</div></div>`;
          if (loggedIn) {
            db.collection('usersdb').doc(userId).get().then(snapshot => {
              favInfo = snapshot.data().favWis
            })
              let needStar = true;
              favInfo.forEach(element => {
                if (element.entry == checkFavorited) {
                  console.log(doc.data().wisdom)
                  console.log(element.entry)
                  needStar = false;
                }
          })
            if (needStar === true) {
              let addStar = document.createElement("div");
              item.appendChild(addStar);
              addStar.className= "favoritestar";
              addStar.innerHTML = 'Favorite this <i class="fa fa-star-o"></i>';
              addStar.addEventListener('click',(event) => submitFavorite(event, addStar))
              needStar = true;
            }
            if (needStar === false) {
              let favorited = document.createElement("div");
              item.appendChild(favorited);
              favorited.className= "favorited";
              favorited.style.padding ="10px";
              favorited.innerHTML = 'Favorited <i class="fa fa-star"></i>';
              needStar = true;
            }
      }
          let populateComments = document.createElement("div")
            doc.data().wisComments.forEach(element => populateComments.innerHTML += `<p class="displaycomment">${element.commentkey}</p><p class="displaycommentuser">comment by ${element.userkey}<br>________________<br></p>`)
            item.appendChild(populateComments)
          if (loggedIn) {
            let postCommentForm = document.createElement("form")
            postCommentForm.innerHTML = `<form><label for="postcomment">Leave a comment:</label><br>
            <input type="text" class="postcommentid" style"visibility: hidden placeholder=${doc.id}><input type="text" class="actualcomment" name="actualcomment"/><button type="submit" class="postcommentbutton" value="submit" style="margin-left: 4px" name=${doc.id}>comment</button></form>`;
            populateComments.appendChild(postCommentForm)
            commentableArray = true;
        }
          //append the viewer column with a new item
          viewer.appendChild(item);
        }
      })
    }).then((info) => {
    //add document object "submitComment" for comment button function
    if (commentableArray) {
      // console.log('generating comment buttons')
      let postCommentButton = document.getElementsByClassName("postcommentbutton");
      for (var i = 0; i < postCommentButton.length; i++) {
        let currentCB = postCommentButton[i];
        currentCB.addEventListener('click',(event) => submitComment(event, currentCB));
      }
    }});
  };

  export default getWise;