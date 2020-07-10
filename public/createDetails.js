
const createDetails = (doc, loggedIn, userId, db, favInfo, id) => {

    let commentableArray = false;
    let wisbitDetails = document.createElement("div");
    wisbitDetails.className = 'details details-header';
    let wisbitWisdom = document.createElement("div");
    wisbitWisdom = doc.wisdom
    wisbitDetails.append(wisbitWisdom)
    let checkFavorited = doc.wisdom

    let wisbitAuthor = document.createElement("div");
    wisbitAuthor = doc.user;
    wisbitDetails.append(wisbitAuthor);
    if (loggedIn) {
        db.collection('usersdb').doc(userId).get().then(snapshot => {
          favInfo = snapshot.data().favWis
        })
          let needStar = true;
          favInfo.forEach(element => {
            if (element.entry == checkFavorited) {
              // console.log(doc.wisdom)
              // console.log(element.entry)
              needStar = false;
            }
      })
        if (needStar === true) {
          let addStar = document.createElement("div");
          wisbitDetails.append(addStar);
          addStar.className= `favoritestar`;
          addStar.innerHTML = 'Favorite this <i class="fa fa-star-o"></i>';
          addStar.addEventListener('click',(event) => submitFavorite(event, addStar))
          needStar = true;
        }
        if (needStar === false) {
          let favorited = document.createElement("div");
          wisbitDetails.appendChild(favorited);
          favorited.className= `favorited`;
          favorited.style.padding ="10px";
          favorited.innerHTML = 'Favorited <i class="fa fa-star"></i>';
          needStar = true;
        }
  }
      let populateComments = document.createElement("div")
        doc.wisComments.forEach(element => populateComments.innerHTML += `<p class="displaycomment">${element.commentkey}</p><p class="displaycommentuser">comment by ${element.userkey}<br>________________<br></p>`)
        if (!doc.wisComments[0])  {
          populateComments.className = `populatecomments`
          
        } else {
          populateComments.className = `populatecomments-notlogged`
        }
        if (loggedIn) wisbitDetails.appendChild(populateComments);
        if (!loggedIn && doc.wisComments[0]) wisbitDetails.appendChild(populateComments)
      if (loggedIn) {
        let postCommentForm = document.createElement("form")
        postCommentForm.innerHTML = `<form><label for="postcomment">Leave a comment:</label><br>
        <input type="text" class="postcommentid" style"visibility: hidden placeholder=${id}><input type="text" class="actualcomment" name="actualcomment"/><button type="submit" class="postcommentbutton" value="submit" style="margin-left: 4px" name=${id}>comment</button></form>`;
        populateComments.className = `populatecomments`
        populateComments.appendChild(postCommentForm)
        commentableArray = true;
      
    }
//add document object "submitComment" for comment button function
  if (commentableArray) {
    // console.log('generating comment buttons')
    let postCommentButton = document.createElement('button')
    for (var i = 0; i < postCommentButton.length; i++) {
      let currentCB = postCommentButton[i];
      currentCB.addEventListener('click',(event) => submitComment(event, currentCB));
    }
        wisbitDetails.appendChild(postCommentButton)
}
   return wisbitDetails
}

export default createDetails;