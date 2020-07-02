//Read wishes from the wwdb (Wishing Well Database)

let coinContents = document.getElementById("coincontents");

export const grabWish = () => {
    coinContents.innerHTML = 'searching...'
    let wishList = []
    //grabs all wishes
    db.collection('wwdb').get().then((snapshot) => {
      //snapshot.docs is the path to retrieve objects
    snapshot.docs.forEach(doc => wishList.push(doc.data()))
    }).then(() => {
    //One wish introduction will display above the grabbed wish:
    let wishRemarks = ['You reached deep and found a rusty old penny:', 'You found a beautiful penny:', 'A penny deep in the well:', 'What a penny you found:', 'You found a penny:', 'This penny lurked in the deep:', 'A penny lost in time, but meaningful as ever:', 'A private wish on a quiet penny:', 'Did the plea on this penny come true? You can only wonder:', 'A shallow penny, with a deep desire:', 'A penny full of dreams:', 'A penny with a midnight rust:', 'A penny that glistens in the faint light reads:', 'A penny of unique patina:', 'A penny dropped long ago, with an evergreen wish:', 'This penny was found at the very bottom:', 'This penny met your fingertips:', 'This penny almost twinkles with the delight of its discovery:', 'A penny emerges from its peaceful dwelling:']
    //Randomly choose a wish and an introduction line
    let arrayNum = Math.floor(Math.random() * wishList.length)
    let randRemark = Math.floor(Math.random() * wishRemarks.length)
    //displays the text
    coinContents.innerHTML = `${wishRemarks[randRemark]}<br><br>"${wishList[arrayNum].wish}"<br><br>wished on ${wishList[arrayNum].date}`
    })
  }

  export default grabWish