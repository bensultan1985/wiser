
import isValidEmailAddress from './emailver.js';
import grabWish from './grabWish.js'

var firebaseConfig = {
  apiKey: "AIzaSyCPHPfX7XgMliNAY9MT-yZPYuhEWol_FeM",
  authDomain: "twocents-6a4cc.firebaseapp.com",
  databaseURL: "https://twocents-6a4cc.firebaseio.com",
  projectId: "twocents-6a4cc",
  storageBucket: "twocents-6a4cc.appspot.com",
  messagingSenderId: "366930428114",
  appId: "1:366930428114:web:d1dec284d3d7a0399a6d0b",
  measurementId: "G-YTVDEX7L18"
};

  // Your web app's Firebase configuration
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

// Firebase.firestore() gives your app access to your database. This is passed to a variable for ease of use.
const db = firebase.firestore()


//   1.   /////////////DOM OBJECTS
let submit = document.getElementById("submit");
let wisdom = document.getElementById("wisdom");
let category = document.getElementById("category");
let viewer = document.getElementById("viewer");
let retrieve = document.getElementById("retrieve");
let form = document.getElementById("form")
let aboutus = document.getElementById("aboutus");
let getLife = document.getElementById("getlife");
let getLove = document.getElementById("getlove");
let getHardship = document.getElementById("gethardship");
let getCareer = document.getElementById("getcareer");
let getCreativity = document.getElementById("getcreativity");
let getOther = document.getElementById("getother");
let getCitizenship = document.getElementById("getcitizenship");
let getEducation = document.getElementById("geteducation");
let getFinance = document.getElementById("getfinance");
let getHealthAndFitness = document.getElementById("gethealthandfitness");
let getHome = document.getElementById("gethome");
let getRoutine = document.getElementById("getroutine");
let getSocial = document.getElementById("getsocial");
let getTechnology = document.getElementById("gettechnology");
let getTransportation = document.getElementById("gettransportation");
let getTravel = document.getElementById("gettravel");
let getWellness = document.getElementById("getwellness");
let getNew = document.getElementById("getnew");
let subCatDiv = document.getElementById("subcatdiv");
let subCategory = document.getElementById("subcategory");
let postEthnic = document.getElementById("postethnic");
let postCountry = document.getElementById("postcountry");
let origAuthor = document.getElementById("origauthor");
let includeMyDemo = document.getElementById("includemydemo");
let opContext = document.getElementById("opcontext");
let sexChange = document.getElementsByClassName("sexchange");
let ageChance = document.getElementsByClassName("agechange");
let regCountry = document.getElementById("regcountry");
let regEthnic = document.getElementById("regethnic");
let regEdu = document.getElementById("regedu");
let regSex = document.getElementsByName("regsex");
let regAge = document.getElementsByName("regage");
let mySubmissionsColumn = document.getElementById("mysubmissionscolumn");
let mySubmissionsLink = document.getElementById("mysubmissionslink");
let mySubmissionsList = document.getElementById("mysubmissionslist")
let wisDetailsColumn = document.getElementById("wisdetailscolumn");
let wisDetailsColumnBody = document.getElementById("wisdetailscolumnbody");
let wisDetailsBackButton = document.getElementById("wisdetailsbackbutton");
let postTags = document.getElementById("posttags");
let dbCount = document.getElementById("dbcount");
let regPassReEntry = document.getElementById("regpassreentry");
let detailsHeadWrapper = document.getElementById("detailsheadwrapper");
let viewId = document.getElementById('viewid');
let viewIdBack = document.getElementById('viewidback');


//form elements
let makeSubmit = document.getElementById("makesubmit");
let formColumn = document.getElementById("formcolumn");
let regColumn = document.getElementById("regcolumn");
let headLoginButton = document.getElementById("headloginbutton");
let loginColumn = document.getElementById("logincolumn");
let getSubmit = document.getElementById("getsubmit");
let getName = document.getElementById("getname");
let getEmail = document.getElementById("getemail")
let getPass = document.getElementById("getpass");
let saveLoginInfo = document.getElementById("savelogininfo")


let headLogin = document.getElementById("headlogin");
let headUsername = document.getElementById("headusername");
let promptColumn = document.getElementById("promptcolumn");
let promptLogin = document.getElementById("promptlogin");
let regName = document.getElementById("regname");
let regEmail = document.getElementById("regemail");
let regPass = document.getElementById("regpass");
let regSubmit = document.getElementById("regsubmit");
let regButton = document.getElementById("regbutton");
let headRegButton = document.getElementById("headregbutton");
let topMenu = document.getElementById("topmenu");
let test1 = document.getElementById("test1");
let test2 = document.getElementById("test2");

//menu button elements
let logoutLink = document.getElementById("logoutlink");
let accountLink = document.getElementById("accountlink")
let calendarLink = document.getElementById("calendarlink");
let dashboardLink = document.getElementById("dashboardlink");
let favoritesLink = document.getElementById("favoriteslink");


let favoritesHeader = document.getElementById("favoritesheader");
let favoritesList = document.getElementById("favoriteslist");

//columns + calendar
let accountColumn = document.getElementById("accountcolumn");
let favoritesColumn = document.getElementById("favoritescolumn");
let welcomeColumn = document.getElementById("welcomecolumn");
let welcome = document.getElementById("welcome");
let calendarColumn = document.getElementById("calendarcolumn");
let bigCalendarBox = document.getElementById("bigcalendarbox");
let dashboardColumn = document.getElementById("dashboardcolumn");
let dashboardCalendar = document.getElementById("dashboardcalendar");
let leftHeader = document.getElementById("leftheader");
let calendarPreview = document.getElementById("calendarpreview");
let savedIcon = document.getElementById("savedicon");
let calIntroLine = document.getElementById("calintroline");
let viewerWindow = document.getElementById("viewerWindow")

//wishing well
let wishingWellColumn = document.getElementById("wishingwellcolumn");
let openWishButton = document.getElementById("openwishbutton");
let wellSubmit = document.getElementById("wellsubmit");
let wellWish = document.getElementById("wellwish");
let wellWishButton = document.getElementById("wellwishbutton");
let wishingWell = document.getElementById("wishingwell");
let wWImage = document.getElementById("wwimage");
let coinDiv = document.getElementById("coindiv");
let tPBox = document.getElementById("tpbox");


// let index = document.getElementById("index");
let secondColumnArray = [loginColumn, promptColumn, viewerWindow, viewer, formColumn, regColumn]
let thirdColumnArray = [dashboardColumn, wishingWellColumn, calendarColumn, welcomeColumn, accountColumn, favoritesColumn, mySubmissionsColumn, wisDetailsColumn];
//this can't include wisDetails Column for backtracking:
let thirdColumnPrevCheck = [dashboardColumn, wishingWellColumn, calendarColumn, welcomeColumn, accountColumn, favoritesColumn, mySubmissionsColumn];




//   2.   /////////////MANAGE SECOND COLUMN
const columnToggle = (selectedColumn) => {
    secondColumnArray.forEach(element => {
      if (element == selectedColumn) {toggleSecColumn(selectedColumn)}
    })
    thirdColumnArray.forEach(element => {
      if (element == selectedColumn) {toggleThirdColumn(selectedColumn)}
    })
}

  const toggleSecColumn = (selectedColumn) => {
  viewId.style.display = 'none';
  viewIdBack.style.display = 'none';
  loginColumn.style.display = 'none';
  promptColumn.style.display = 'none';
  // viewerWindow.style.display = 'block';
  viewer.style.display = 'none';
  formColumn.style.display = 'none';
  regColumn.style.display = 'none';

  if (selectedColumn) selectedColumn.style.display = 'block';
  currentSecColumn = selectedColumn;
}

const toggleThirdColumn = (selectedColumn) => {
  checkPrevThird()
  // if (selectedColumn != wisDetailsColumn) {
  //   viewId.style.display = 'none';
  //   viewIdBack.style.display = 'none';
  // }
  dashboardColumn.style.display = 'none';
  wishingWellColumn.style.display = 'none';
  calendarColumn.style.display = 'none';
  welcomeColumn.style.display = 'none';
  accountColumn.style.display = 'none';
  favoritesColumn.style.display = 'none';
  mySubmissionsColumn.style.display = 'none';
  wisDetailsColumn.style.display = 'none';

  if (selectedColumn) selectedColumn.style.display = 'block';
  currentThirdColumn = selectedColumn;
}

const checkPrevThird = () => {
  thirdColumnPrevCheck.forEach(element => {
    if (element.style.display == 'block') {
      prevThird =  element
    }
  })
}




//   3.   ////////////LOGIN + USER CODE + LOGOUT
//login fuctions and rules
let loggedIn = false;
let saveduser = '';
let lastCategory = {
  mainCat: 'newest wisdom',
  subCat: null
};
let userId = '';
let opDemoData = {};
let lastTPValue = '';
let currentSecColumn = '';
let currentThirdColumn = '';
let lastSecondColumn = '';
let prevThird = welcomeColumn;
//firebase authorized Id verification, obtained by signing into the secured database:
let authUserId = '';
//universalDayName is necessary for some calendar functions. Will create bugs if the date changes while user is editing a calendar. Must fix later:
let universalDayName = '';
//calendar saved in temp memory that will allow changes before making put requests to Firebase:
let calInfo = {
  Monday: {entry: '', imgsrc: ''},
  Tuesday: {entry: '', imgsrc: ''},
  Wednesday: {entry: '', imgsrc: ''},
  Thursday: {entry: '', imgsrc: ''},
  Friday: {entry: '', imgsrc: ''},
  Saturday: {entry: '', imgsrc: ''},
  Sunday: {entry: '', imgsrc: ''},
}
let favInfo = [];
let subCatObject = {
  Career: ['career path', 'communication', 'conflict', 'engineering', 'entrepreneurship', 'freelance', 'inspiration', 'interpersonal skills', 'resume & interview', 'jobs', 'marketing', 'negotiation', 'networking', 'sales', 'small business'],
  Citizenship: ['activism', 'community', 'emergency', 'government', 'laws', 'programs'],
  Creativity: ['arts & crafts', 'criticism', 'inspiration', 'motivation', 'music business', 'musicians', 'performing arts', 'photography', 'show business', 'writing'],
  Education: ['adult learning', 'alternative education', 'birth - preschool', 'elementary school', 'high school', 'middle school', 'students', 'study skills', 'teachers & teaching'],
  Finance: ['budgeting', 'dangers', 'decision making', 'household', 'investing', 'negotiation', 'opportunities', 'retirement', 'salary & benefits', 'saving money'],
  Hardship: ['anxiety', 'depression', 'disappointment', 'grief & loss', 'illness', 'poverty', 'unemployment'],
  'Health & Fitness': ['adulthood', 'childhood', 'diet', 'fitness', 'fitness plans', 'gyms', 'health', 'health plans', 'medicine', 'nutrition', 'senior years', 'sports', 'teen years', 'hygiene'],
  Home: ['appliances', 'buying & selling', 'cleaning & clutter', 'construction', 'dangers', 'décor', 'geographic location', 'home improvement',  'neighborhood', 'renting'],
  Life: ['adulthood', 'aspirations', 'childhood', 'planning', 'parenting', 'regrets', 'self-reflection', 'self-awareness', 'senior years', 'success & failure', 'teen years', 'well-being', 'young adulthood'],
  Love: ['dating', 'lust', 'marriage', 'relationships', 'romance', 'sex'],
  Routine: ['bedtime routine', 'daily routine', 'evening routine', 'midday routine', 'morning routine', 'weekly routine'],
  Social: ['activities', 'caring', 'communication', 'conflict', 'etiquette', 'expectations', 'extended family', 'family', 'friends', 'giving & receiving', 'holidays', 'making friends', 'parties & gatherings', 'physical contact'],
  Technology: ['computers', 'electronics', 'email', 'gaming', 'social media', 'the future', 'the internet'],
  Transportation: ['air travel', 'automobiles', 'boats & boating', 'budget', 'cruises', 'luxury', 'other vehicles', 'planning', 'public transportation', 'trains', 'walking'],
  Travel: ['attractions', 'beaches', 'budget', 'dangers', 'domestic', 'foreign languages', 'hotels & rentals', 'international', 'luxury', 'preparedness', 'vacations'],
  Wellness: ['beauty', 'meditation', 'mind & body', 'spirituality'],
  Other: ['general']

}



//Prompt a login/register column, if a section requires login.
const showLogin = (section) => {
  // console.log(loggedIn)
  if (!loggedIn) {
  section.style.display = 'none';
  columnToggle(promptColumn)
  return false;
}
return true;
}



//Opens registration column
const openReg = () => {
  columnToggle(regColumn)
  regPass.addEventListener('input', asteriskPass)
  regPassReEntry.addEventListener('input', asteriskPassRe)
}


let storedValue = []
let passArray = []
let oldPassValue = []
let currentPassValue = [];


const asteriskPass = (e) => {
  e.preventDefault;
  passArray = regPass.value.split('')
  let lastLetter = passArray[passArray.length-1].toString()
  console.log(lastLetter)
  if (noPassEdits(regPass) == false) {
    console.log('reset')
    oldPassValue = [];
    passArray = []
    regPass.value = '';
    regPass.name = '';
    return
   }
  console.log('pass')
  regPass.name += lastLetter
  console.log('regpassname', regPass.name)
  if (regPass.value.length > 1) {
    let newArray = []
    console.log('second')
    for (let i = 0; i < passArray.length-1; i++)
    newArray.push('*');
    newArray.push(passArray[passArray.length-1])
  regPass.value = newArray.join('')
  }
}

const noPassEdits = (pass) => {
  console.log(regPass.name)
  let regPassArray = pass.value.split('')
  let regNameArray = pass.name.split('')
  console.log(regPassArray, regNameArray)
  if (regPassArray.length > (regNameArray.length+1)) {
    console.log('fail 1')
    return false;
  }
  if (regPassArray.length <= (regNameArray.length)) {
    console.log('fail 2')
    return false;
  }
  for (let i = 0; i < regNameArray.length; i++) {
    if (regPassArray[i] != regNameArray[i]) {
      if (regPassArray[i].toString() == '*') {
      console.log('anotherpass')
      } else {
      console.log('anotherfail')
      return false
    }
  }
  }
  console.log('true')
  return true
}



let storedValueRe = []
let passArrayRe = []
let oldPassValueRe = []
let currentPassValueRe = [];


const asteriskPassRe = (e) => {
  e.preventDefault;
  passArrayRe = regPassReEntry.value.split('')
  let lastLetter = passArrayRe[passArrayRe.length-1].toString()
  console.log(lastLetter)
  if (noPassEdits(regPassReEntry) == false) {
    console.log('reset')
    oldPassValueRe = [];
    passArrayRe = []
    regPassReEntry.value = '';
    regPassReEntry.name = '';
    return
   }
  console.log('pass')
  regPassReEntry.name += lastLetter
  console.log('regpassname', regPassReEntry.name)
  if (regPassReEntry.value.length > 1) {
    let newArray = []
    console.log('second')
    for (let i = 0; i < passArrayRe.length-1; i++)
    newArray.push('*');
    newArray.push(passArrayRe[passArrayRe.length-1])
  regPassReEntry.value = newArray.join('')
  }
}


let storedValueL = []
let passArrayL = []
let oldPassValueL = []
let currentPassValueL = [];


const addAsteriskLogin = (e) => {
  e.preventDefault;
  passArrayL = getPass.value.split('')
  let lastLetter = passArrayL[passArrayL.length-1].toString()
  console.log(lastLetter)
  if (noPassEdits(getPass) == false) {
    console.log('reset')
    oldPassValueL = [];
    passArrayL = []
    getPass.value = '';
    getPass.name = '';
    return
   }
  console.log('pass')
  getPass.name += lastLetter
  console.log('getpassname', getPass.name)
  if (getPass.value.length > 1) {
    let newArray = []
    console.log('second')
    for (let i = 0; i < passArrayL.length-1; i++)
    newArray.push('*');
    newArray.push(passArrayL[passArrayL.length-1])
  getPass.value = newArray.join('')
  }
}



//Submit registration to Firebase (database of users is the "usersdb" collection in Firebase)
const regNewUser = (e) => {
  e.preventDefault();
let setAuthUserId = '';
let thoughtStr = 'This notepad will auto-save with every keystroke. Your note will be here the next time you log in! This is ideal for: \n\n-Quick phone call notes.\n-Project ideas\n-appointment reminders\n-creative writing\n\n It\'s like your very own digital Post-It pad! Erase this text and type your own notes to get started!'
let canReg = true;
if (!isValidEmailAddress(regEmail.value)) {
  console.log('email not valid');
  regName.value = '';
  regPass.value = '';
  regEmail.value = '';
  regPass.name = '';
  canReg = false;
}
if (regPass.name != regPassReEntry.name) canReg = false;
if (regPass.name.length < 6) canReg = false;
if (canReg == false) return false;
const promise = auth.createUserWithEmailAndPassword(regEmail.value, regPass.name)
let sexChangeData = 'unspecified';
let ageChangeData = 'unspecified';
for (let i = 0; i < regSex.length; i++) {
  if (regSex[i].checked == true) sexChangeData = regSex[i].value
}
for (let i = 0; i < regAge.length; i++) {
  if (regAge[i].checked == true) ageChangeData = regAge[i].value
}
console.log('contacting server...')
console.log('sexChangeData:', sexChangeData)
console.log('ageChangeData:', ageChangeData)
console.log(regCountry)
console.log(regEthnic)
console.log(regEdu)
promise.then((response) => {
  authUserId = response.user.uid;
  db.collection('usersdb').add(
    {
      username: regName.value,
      email: regEmail.value,
      wisCount: 0,
      canAdd: true,
      favWis: [],
      authUserId: response.user.uid,
      thoughtStr: thoughtStr,
      opDemo: {
        sex: sexChangeData,
        age: ageChangeData,
        country: regCountry.value,
        ethnicity: regEthnic.value,
        education: regEdu.value
      },
      myCal:
      {
        Monday: {entry: '', imgsrc: ''},
        Tuesday: {entry: '', imgsrc: ''},
        Wednesday: {entry: '', imgsrc: ''},
        Thursday: {entry: '', imgsrc: ''},
        Friday: {entry: '', imgsrc: ''},
        Saturday: {entry: '', imgsrc: ''},
        Sunday: {entry: '', imgsrc: ''},

      }
    }
  )
  }).then(() => {
    console.log('processing registration...')
  // e.preventDefault();
  //form disappears once form information is collected
  regColumn.style.display = 'none';
  loginAfterReg(thoughtStr, authUserId)
  }
  )
};

const loginAfterReg = (thoughtStr, authUserId) => {
  console.log('registration successful. logging in...')
  let loginFound = false;
  db.collection('usersdb').get().then((snapshot) => {
    //snapshot.docs is the path to retrieve objects
  snapshot.docs.forEach(doc =>
    {
      console.log('retrieving username and password after registration')
      //for each doc, you must append with .data() to retrieve the data
      // follow .data() with an object key to retrieve a value
      if (doc.data().authUserId == authUserId) {
        // console.log('logged in')
        loginFound = true;
        // console.log(loginFound);
        if (loginFound == true) {
          applyLogin(regName.value, doc.id,  doc.data().authUserId, doc.data().myCal, thoughtStr);
        }
      }
    })
  }).then(namePassReset)
}



//opens the login column
const openLoginColumn = () => {
  saveLoginInfo.checked = true;
  getEmail.value = '';
  getPass.name = '';
  getPass.value = '';
  if (window.localStorage.getItem('savedLocalEmail') && window.localStorage.getItem('savedLocalPass')) {
    console.log('working')
    getEmail.value = window.localStorage.getItem('savedLocalEmail');
    getPass.name = window.localStorage.getItem('savedLocalPass');
    for (let i = getPass.name.length; i > 0; i--) {
      getPass.value += '*'
    }
  }
  columnToggle(loginColumn)
}

const openMySubmissions = () => {
  columnToggle(mySubmissionsColumn)
    db.collection('wisdomcollection').get().then(snapshot => {
      mysubmissionslist.innerHTML = '';
        snapshot.docs.forEach(element => {
          if (element.data().opId == userId) {
          let item = document.createElement("li")
          mySubmissionsList.appendChild(item)
          item.className = 'fav-li'
          item.name = element.id;
          if (checkWisColorScheme()) item.style.color = '#006400';
    //displays readable data for the user
          item.innerHTML =
          `<div class="displayfav">
            <div> "${element.data().wisdom}"<br>submitted by ${element.data().user}
            </div>
            <div>
            <button class="mysubmissionsdetails">view details</button>
            <button name=${element.id} class="mysubmissionsdelete">delete</button>
            </div>
          </div>`;
          let mySubmissionsDelete = document.getElementsByClassName("mysubmissionsdelete")
          console.log(mySubmissionsDelete)
          for (let i = 0; i < mySubmissionsDelete.length; i++) {
            mySubmissionsDelete[i].addEventListener('click', deleteMySubmission)
          }
        }
      })
    })
}

const deleteMySubmission = (e) => {
  e.preventDefault
  let forDelete = e.path[0].name
  db.collection("wisdomcollection").doc(forDelete).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
openMySubmissions()
}



//finds and verifies login information by sending user input to Firebase to see if there is a match.
const checkLogin = (e) => {
  e.preventDefault();
  let loginFound = false;

  if (saveLoginInfo.checked) {
    window.localStorage.setItem('savedLocalEmail', getEmail.value)
    window.localStorage.setItem('savedLocalPass', getPass.name)
  } else {
    localStorage.removeItem('savedLocalEmail')
    localStorage.removeItem('savedLocalPass')
  }

  const promise = auth.signInWithEmailAndPassword(getEmail.value, getPass.name);
  promise.catch(e => {
    console.log(e.message)
    //if login is invalid, display a message to user to try again
    loginInvalidMsg()
    return;
  }).then(response => 
  db.collection('usersdb').get().then((snapshot) => {
    //snapshot.docs is the path to retrieve objects
  snapshot.docs.forEach(doc =>
    {
      //for each doc, you must append with .data() to retrieve the data
      // follow .data() with an object key to retrieve a value
      if ((doc.data().email == getEmail.value) && (doc.data().authUserId == response.user.uid)) {
        // console.log('logged in')
        loginFound = true;
        // console.log(loginFound);
        if (loginFound == true) {
          console.log('login found')
          applyLogin(doc.data().username, doc.id, response.user.uid, doc.data().myCal, doc.data().thoughtStr, doc.data().opDemo);
        }
      }
    })
  })).then(namePassReset)
}



const namePassReset = () => {
  // getName.value = ''; no longer an element for login. login only requires getpass and get email
  getPass.value = '';
  getPass.name = '';
  getEmail.value = '';
}

const loginInvalidMsg = () => {
  let nodeMsg = document.createElement("div")
  nodeMsg.innerHTML = 'email/password not found. try again.'
  nodeMsg.style.color = 'red';
  nodeMsg.id = 'failedlogin';
  currentColumn.appendChild(nodeMsg);
  setTimeout(() => nodeMsg.style.display = 'none', 2000);
  namePassReset()
}



//if login data has a match in Firebase, the user will be logged in, and user data will populate necessary document objects.
const applyLogin = (name, id, authUserId, myCal, thoughtStr, opDemo) => {
  loggedIn = true;
  saveduser = name;

  loginColumn.style.display = 'none';
  console.log(name + ' is logged in');
  userId = id;
  console.log(name +"'s id is: " + userId);
  headLoginButton.style.display = 'none';
  headRegButton.style.display = 'none';
  headUsername.innerHTML = `${name}`;
  headUsername.style.display = 'inline-block';
  test1.style.display = 'inline-block';
  calInfo = myCal;
  console.log(calInfo)
  getFavInfo()
  console.log(`this is your favorites: ${favInfo}`)
  dashboardCalendar.innerHTML = getCal(calInfo);
  columnToggle(dashboardColumn);
  tPBox.value = thoughtStr
  lastTPValue = thoughtStr;
  if (opDemo) opDemoData = opDemo;
  lastSecondColumn == 'formColumn'? columnToggle(formColumn) : getNewest();
}

const getFavInfo = () => {
  db.collection('usersdb').doc(userId).get().then(snapshot => {
    favInfo = snapshot.data().favWis;
    console.log(snapshot.data().favWis);
    return favInfo
  })
}



const logoutFunction = (e) => {
  loggedIn = false;
  // checkLogin(e);
  headLoginButton.style.display = 'inline-block';
  headRegButton.style.display = 'inline-block';
  test1.style.display = 'none';
  headUsername.innerHTML = ``;
  headUsername.style.display = 'none';
  test2.style.display = 'none';
  location.reload();
  firebase.auth().signOut
}



const openAccount = () => {
  columnToggle(accountColumn)
}



const openFavorites = () => {
  columnToggle(favoritesColumn)
  db.collection('usersdb').doc(userId).get().then(snapshot => {
    favoritesList.innerHTML = '';
    let favArray = snapshot.data().favWis;
      favArray.forEach(element => {
        let item = document.createElement("li")
        favoritesList.appendChild(item)
        item.className = 'fav-li'
        item.name = element.id;
        if (checkWisColorScheme()) item.style.color = '#006400';
  //displays readable data for the user
        item.innerHTML = `<div class="displayfav"> "${element.entry}"<br>submitted by ${element.author}</div>`;
    })
  })
}



const getCal = () => {
  console.log(calInfo)
  let dayName = '';
  let dayInMonth = '';
  let month = '';
  let today = new Date
  let num = today.getDay();
  dayInMonth = today.getDate();
  var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  month = months[today.getMonth()];
  if(num == 1) {dayName = 'Monday'};
  if(num == 2) {dayName = 'Tuesday'};
  if(num == 3) {dayName = 'Wednesday'};
  if(num == 4) {dayName = 'Thursday'};
  if(num == 5) {dayName = 'Friday'};
  if(num == 6) {dayName = 'Saturday'};
  if(num == 0) {dayName = 'Sunday'};
  console.log(dayName)
  universalDayName = dayName;
  let calImg = "https://www.publicdomainpictures.net/pictures/310000/velka/tree-sunset-silhouette.jpg";
  let calMsg = 'Click the "edit calendar" tab in the menu to customize your daily calendar!'
  if (calInfo[dayName].entry) calMsg = calInfo[dayName].entry;
  if (calInfo[dayName].imgsrc) calImg = calInfo[dayName].imgsrc;
  let genCalendar = `<h4 id="monthday">${dayName} ${month} ${dayInMonth}</h4><div id="calbox"><p>" ${calMsg} "</p><img class="calendarimage" src=${calImg} /></div>`;
  return genCalendar;
  }
  //<h4 id="dayname"></h4> optional to put at beginning of genCalendar

  const tempCalendar = (day) => {
    console.log(day)
    let custCal = calInfo;
    console.log(custCal)
    let tempCalMsg = 'click to choose from your favorites';
    let tempcalImg = 'https://www.publicdomainpictures.net/pictures/310000/velka/tree-sunset-silhouette.jpg';
    let genCalendar = `
    <h4 id="tempdayname">
      <form>
        <label for="daytoset"></label>
        <select id="daytoset" name="tempweekday">
          <option value="${day}" disabled selected hidden>${day}</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
    </h4>
    <label class="tempcallabel" for="calmsginput">Choose the wisdom you'd like to display:</label>
    <br>
    <br>
        <select id="calmsginput" name="tempcalmsg">
        </select>
        <br>
        <br>
        <br>
    <label class="tempcallabel" for="attachimg" style="display: block">Add an image (optional)</label>
    <br>
        <input type="text" id="attachimg"/>
        <br>
        <br>
      <button type="submit" class="submit" id="submitcalday" name="submitcalday">save</button>
      </form>
      <br>
      <br>
    </div>`;
    return genCalendar;
  }



const submitCalDayFunction = (event, calMsgInput, attachImg, dayToSet) => {
  event.preventDefault()
  console.log(`this is the day to set: ${dayToSet.options[dayToSet.selectedIndex].value}`)
  let thisDay = dayToSet.options[dayToSet.selectedIndex].value
  let thisMessage = calMsgInput.options[calMsgInput.selectedIndex].text
  let address = 'myCal.' + thisDay + '.entry';
  let addressImg = 'myCal.' + thisDay +'.imgsrc';
    if (attachImg.value) {
        db.collection("usersdb").doc(userId).update({[addressImg]: attachImg.value}).then(
        db.collection("usersdb").doc(userId).update({[address]: thisMessage}))
      } else {
        db.collection("usersdb").doc(userId).update({[addressImg]: attachImg.placeholder}).then(
          db.collection("usersdb").doc(userId).update({[address]: thisMessage}))
      }
    refreshCal()
    animateSaved()
    // openCalendar(thisDay) - this piece of code didn't work here, and I'm not completely sure why. revisit this
  }



  const refreshCal = () => {
    db.collection('usersdb').doc(userId).get().then((doc) =>
      calInfo = doc.data().myCal
      )
  }

  const animateSaved = () => {
    console.log('animate');
    savedIcon.style.visibility = "visible";
    setTimeout(stopSavedAnimation, 2000);
  }

  const stopSavedAnimation = () => {
    savedIcon.style.visibility = "hidden";
  }



const openCalendar = (day) => {
  //generate basic temporary calendar
  bigCalendarBox.innerHTML = '';
  calintroline.innerHTML = 'Need inspiration with your morning brew? Customize your calendar with your favorite wisdom!<br>Start by choosing a day of the week:';
  bigCalendarBox.innerHTML = tempCalendar(day)
  //will give value such as "Monday"
  let dayToSet = document.getElementById("daytoset");
  console.log(`this is the day to set: ${dayToSet.options[dayToSet.selectedIndex].value}`)
  //drop-down menu that will be populated with the current calendar values, followed by all wisdom in the user's favWis array, which will be saved to wisArray.
  let calMsgInput = document.getElementById("calmsginput");
  calMsgInput.placeholder = '';
  let attachImg = document.getElementById("attachimg");
  console.log(`this is calmsginput: ${calMsgInput.innerHTML}`)
  let submitCalDay = document.getElementById("submitcalday");
  //establish temporary local favorites array:
  let wisArray = [];
  //check for need to create placeholder values in form fields.
  if (calInfo[day].entry) {
    console.log(calInfo[day])
      let placeholderMsg = document.createElement("option")
      placeholderMsg.text = calInfo[day].entry;
      placeholderMsg.value = 0;
      calMsgInput.appendChild(placeholderMsg)
      console.log(`this is placeholder: ${placeholderMsg.innerHTML}`)
    }
  if (calInfo[day].imgsrc) {
    attachImg.selected = calInfo[day].imgsrc;
    attachImg.placeholder = calInfo[day].imgsrc;
  } else {
    attachImg.placeholder="https://www.publicdomainpictures.net/pictures/310000/velka/tree-sunset-silhouette.jpg"
  }
  //create options for calMsgInput drop-down menu. May already have a '0' value placeholder.
  db.collection('usersdb').doc(userId).get().then((snapshot) => {
    //snapshot.docs is the path to retrieve objects
  wisArray = snapshot.data().favWis}).then(() => {
        // creates new element in the DOM
        if (wisArray.length == '0') {
          calintroline.innerHTML = 'Need inspiration with your morning brew? Customize your calendar with your favorite wisdom!<span style="color: red"><br><br>**Before you can use your calendar, browse the left categories and save some wisdom to your "favorites".</span>'
          let placeholderMsg = document.createElement("option")
          placeholderMsg.text = 'no favorites found';
          placeholderMsg.value = "";
          placeholderMsg.disabled = 'true';
          calMsgInput.style.color = 'red';
          placeholderMsg.selected = 'true';
          placeholderMsg.style.display = 'none';
        calMsgInput.appendChild(placeholderMsg)} else {
        for (let i = 0; i < wisArray.length; i++) {
        let calWisOption = document.createElement("option");
        calWisOption.text = wisArray[i].entry
        //values will generate starting with '1' rather than '0' because the '0' option may be occupied by placeHolderMsg in the above if statements.
        calWisOption.value = (i+1)
        //append the generated options to the calMsgInput element.
        calMsgInput.appendChild(calWisOption);
        }
      }
      }).then(() => {
        var lastIndex = "";
        function listQ(){
        if(dayToSet.selectedIndex > 0){
          if(dayToSet.selectedIndex != lastIndex) {
            if("Monday" == dayToSet.options[dayToSet.selectedIndex].value) {
              openCalendar('Monday')
            lastIndex = dayToSet.selectedIndex;
            }
            if("Tuesday" == dayToSet.options[dayToSet.selectedIndex].value) {
              openCalendar('Tuesday')
            lastIndex = dayToSet.selectedIndex;
            }
            if("Wednesday" == dayToSet.options[dayToSet.selectedIndex].value) {
              openCalendar('Wednesday')
            lastIndex = dayToSet.selectedIndex;
            }
            if("Thursday" == dayToSet.options[dayToSet.selectedIndex].value) {
              openCalendar('Thursday')
            lastIndex = dayToSet.selectedIndex;
            }
            if("Friday" == dayToSet.options[dayToSet.selectedIndex].value) {
              openCalendar('Friday')
            lastIndex = dayToSet.selectedIndex;
            }
            if("Saturday" == dayToSet.options[dayToSet.selectedIndex].value) {
              openCalendar('Saturday')
            lastIndex = dayToSet.selectedIndex;
            }
            if("Sunday" == dayToSet.options[dayToSet.selectedIndex].value) {
              openCalendar('Sunday')
            lastIndex = dayToSet.selectedIndex;
            }
          }
          else {
            lastIndex = ""
          }
        }
      }
      dayToSet.addEventListener("click",listQ)})
  submitCalDay.addEventListener('click', () => submitCalDayFunction(event, calMsgInput, attachImg, dayToSet))
  columnToggle(calendarColumn);
}



const openDashboard = () => {
  columnToggle(dashboardColumn);
  dashboardCalendar.innerHTML = getCal();
}






//   4.   /////////////SUBMISSIONS CODE
//displays the form submission column
const openSubmit = () => {
  lastSecondColumn = 'formColumn'
  columnToggle()
  if (showLogin(formColumn)) {
  columnToggle(formColumn)
  } else {formColumn.style.display = 'none';}
};

const showSubCats = (e) => {
  e.preventDefault()
  let topValue = category.options[category.selectedIndex].value
  console.log(topValue)
  subCategory.innerHTML = ''
  subCatObject[topValue].forEach((element) => {
  let item = document.createElement("option")
  item.innerHTML = element
  item.value =  element
  subCategory.appendChild(item)
  })
  
}


//function to submit wisdom
const submitWis = (e) => {
  //prevents page from reloading (not sure why this needs to be here)
  e.preventDefault();
  let postTagsObject = {unspecifiedsearchquery: 'unspecifiedsearchquery'};
  let postTagsArray = []
  postTagsArray = postTags.value.split(',');
  if (postTagsArray.length > 1) {postTagsArray.forEach(element => {
      postTagsObject[element] = element;
    })
}

  let includedDemoInfo = null;
  if (includeMyDemo.checked == true) {
    includedDemoInfo = opDemoData
  }
  let thisDate = new Date()
  let dateString = `${(thisDate.getMonth()+1)}/${thisDate.getDate()}/${thisDate.getFullYear()}`
  let newestExpire =  new Date();
  newestExpire.setDate(newestExpire.getDate() + 10);
    //check validity of wisdom string
    if (checkWisInput(wisdom.value) == false) return false;
    
    //adds a wisdom object to the wisdomcollection collection on Firebase
    db.collection('wisdomcollection').add(
      {
        wisdom: wisdom.value,
        user: saveduser,
        opId: userId,
        category: category.value,
        wisComments: [],
        wisCommentsUsers: [],
        favorites: 0,
        endorsements: [],
        weight: 0,
        subCat: subCategory.value,
        ethnicity: postEthnic.value,
        countryOfOrigin: postCountry.value,
        originalAuthor: origAuthor.value,
        readableDateSubmitted: dateString,
        subTimestamp: thisDate,
        endorInfo: {},
        opDemo: includedDemoInfo,
        opContext: opContext.value,
        newestExpire: newestExpire,
        searchTags: postTagsObject
      }
    )
    //form disappears once form information is collected
  formColumn.style.display = 'none';
  wisdom.value = '';
  opContext.value = '';
  category.value = 'Career';
  subCategory.value = 'career path';
  postCountry.value = 'unspecified';
  origAuthor.value = '';
  postEthnic.value = 'unspecified';
  postTags.value = ''
  getNewest()
};


//first stage in submitting a comment:
//unnecessary step. will fix later:
const submitComment = (event, comment) => {
  event.preventDefault()
    finalComment(comment);
}


//last stage in submitting a comment:
const finalComment = (comment) => {
  //to pull up the right viewer window. fix later
  if (lastCategory.mainCat == 'newest wisdom') lastCategory.mainCat = 'New' 
  console.log(`putting to document ${comment.name}`)
  console.log(`data is: ${comment.parentElement.actualcomment.value}`)
  let updateDb = db.collection('wisdomcollection').doc(comment.name)
  updateDb.update({wisComments: firebase.firestore.FieldValue.arrayUnion({commentkey: comment.parentElement.actualcomment.value,
    userkey: saveduser})
    }).then(getWise(lastCategory))
};


//first stage in adding a favorite wisdom to user's favWis array:
//unnecessary step. will fix later:
const submitFavorite = (event, data) => {
  event.preventDefault();
  finalFavorite(data);
}


//final stage in adding a favorite wisdom to user's favWis array:
const finalFavorite = (data) => {
  console.log(data.parentElement)
  let originalData = '';
  let originalDocId = '';
  console.log(data.getElementsByClassName("fa")[0].className)
  console.log(`favoriting to user ${saveduser}`);
  let originalWisdom = data.parentElement.name;
  console.log(originalWisdom)
  db.collection('wisdomcollection').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
      if (doc.id == originalWisdom) {
        originalData = doc.data();
        originalDocId = doc.id;
      };
    })
  }).then(() => {
    if (data.getElementsByClassName("fa")[0].className == 'fa fa-star-o') {
    db.collection('wisdomcollection').doc(originalWisdom).update({
      favorites: firebase.firestore.FieldValue.increment(1)
    })
    }
  })
    .then( () => {
    let updateDb = db.collection('usersdb').doc(userId);
  updateDb.update({favWis: firebase.firestore.FieldValue.arrayUnion({entry: originalData.wisdom,
  author: originalData.user,
originalId: originalDocId})
    }).then(getFavInfo()).then(data.innerHTML = 'Favorited <i class="fa fa-star"></i>')
  }
  )
}

const submitWish = () => {
  let thisDate = new Date()
  let dateString = `${(thisDate.getMonth()+1)}/${thisDate.getDate()}/${thisDate.getFullYear()}`
  console.log(thisDate)
  console.log(dateString)
  db.collection('wwdb').add(
    {
      wish: wellWish.value,
      date: dateString,
      wishPath: userId
    })
    wellWish.value = '';
}







//NOTEPAD
const addThoughtStr = () => {
db.collection('usersdb').doc(userId).get().then((doc) => {
  tPBox.value = doc.data().thoughtStr
})
}


const editThoughtStr = () => {
  db.collection('usersdb').doc(userId).update({
    "thoughtStr" : tPBox.value
})
}






//   5.   /////////////DISPLAY STORED-DATA CODE
//re-usable function that displays stored wisdom by category
//cat is passed via the event listener's anonymous function (this is a work-around - event listeners cannot pass params to a declared function)
const getWise = async (catDetails) => {

  lastSecondColumn = viewer;
  console.log(catDetails)
  console.log(catDetails)
  //hides the form column if it is open
  lastCategory = catDetails;
  if (lastCategory.mainCat == 'New') return getNewest();
  let commentableArray = false;
  viewer.innerHTML = '';
    let emptyBlock = document.createElement('div')
  emptyBlock.style.height = '60px';
  viewer.appendChild(emptyBlock)
  viewId.innerHTML = lastCategory.mainCat
  if (lastCategory.subCat) {
    viewId.innerHTML += '/' + lastCategory.subCat
  }
  // viewer.appendChild(viewId)
  columnToggle(viewer);
  viewId.style.display = 'block';
  viewIdBack.style.display = 'block';
  //get request to the Firebase collection. Param is snapshot because that is what the collection is referred to in documentation
  await db.collection('wisdomcollection').get().then((snapshot) => {
    // viewer.innerHTML = '';
    let sortedDocs = []
    let relevantDocFound = false;
    let totalDocs = 0;
    let totalWeight = 0;
    snapshot.docs.forEach(doc => {
      let id = doc.id;
      sortedDocs.push(doc.data())
      sortedDocs[sortedDocs.length-1].id = id;
      sortedDocs[sortedDocs.length-1].weight = 0;
    }
    )
    // console.log(sortedDocs)

    sortedDocs.forEach(doc => {
      doc.weight = doc.favorites + doc.endorsements.length;
      // doc.colorPower = '#ffffff'
      totalDocs++
      totalWeight += doc.weight
    })
    sortedDocs = sortedDocs.sort((a, b) => b.weight-a.weight);
    // console.log(sortedDocs)
    //snapshot.docs is the path to retrieve objects
  sortedDocs.forEach(doc =>
    {
      //for each doc, you must append with .data() to retrieve the data
      // follow .data() with an object key to retrieve a value
      if (((doc.category == catDetails.mainCat) && (catDetails.subCat == null)) || ((doc.category == catDetails.mainCat) && (doc.subCat == catDetails.subCat))) {
        relevantDocFound = true;
        let checkFavorited = doc.wisdom
        //creates new element in the DOM
        let item = document.createElement("div");
        //gives element a class name attribute
        item.className = 'result-li'
        item.name = doc.id;
        item.value = doc.favorites
        let subText = '';
        if (doc.subCat) subText = '/' + doc.subCat;
        // console.log(`the value of this list item is: ${item.value}`)
        //displays readable data for the user
        // item.style.backgroundColor = 'rgb(160, 104, 41)'
        checkWisColorScheme(doc.weight, totalDocs, totalWeight) ? 
        item.className = 'result-li-high' : console.log('style normal');
        let subClass = '';
        if (item.className == 'result-li-high') subClass = ' borderalt1';
        item.innerHTML = `<div class="wisouterborder">${doc.category}${subText}</div><div class="commenttop${subClass}" name="${doc.id}"> "${doc.wisdom}" <br><br>submitted by ${doc.user}</div>`;
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
            item.appendChild(addStar);
            addStar.className= `favoritestar ${subClass}`;
            addStar.innerHTML = 'Favorite this <i class="fa fa-star-o"></i>';
            addStar.addEventListener('click',(event) => submitFavorite(event, addStar))
            needStar = true;
          }
          if (needStar === false) {
            let favorited = document.createElement("div");
            item.appendChild(favorited);
            favorited.className= `favorited ${subClass}`;
            favorited.innerHTML = 'Favorited <i class="fa fa-star"></i>';
            needStar = true;
          }
    }


        let populateComments = document.createElement("div")
        // populateComments.style.borderRadius = '0% 0% 10% 10%'
          doc.wisComments.forEach(element => populateComments.innerHTML += `<p class="displaycomment">${element.commentkey}</p><p class="displaycommentuser">comment by ${element.userkey}<br></p>`)
          if (!doc.wisComments[0])  {
            populateComments.className = `populatecomments${subClass}`
            
          } else {
            populateComments.className = `populatecomments-notlogged${subClass}`
          }
        //append the viewer column with a new item
        viewer.appendChild(item);
        let commentLink = document.createElement("div");
    
        commentLink.className = `favorited ${subClass} commentlink`
        commentLink.innerHTML = `comments (${doc.wisComments.length})`
        item.appendChild(commentLink);
        commentLink.addEventListener('click', (e) => {
          e.preventDefault()
          //to open wisdetails:
          // let id = commentLink.parentElement.name
          // if (wisDetailsColumn.style.display == 'block' && tempDetails == commentLink.parentElement.name) {
          //   columnToggle(prevThird)
          // } else {
          //   wisDetailsColumnBody.innerHTML = ''
          //   columnToggle(wisDetailsColumn)
          //   detailsHeadWrapper.addEventListener('click', backToPrevThird)
          //   console.log(commentLink.parentElement.name)
          //   db.collection('wisdomcollection').doc(commentLink.parentElement.name).get().then((snapshot) => {
          //     let doc = snapshot.data()
          //       createDetails(doc, loggedIn, userId, db, favInfo, id, wisDetailsColumnBody)
          //   })
          // }
          if (populateComments.style.display == 'block') {
          populateComments.style.display = 'none';
          } else {
          populateComments.style.display = 'block';
          }
          tempDetails = commentLink.parentElement.name;
        })
        let contextLink = document.createElement("div");
        contextLink.className = `favorited ${subClass} commentlink contextlink`
        contextLink.innerHTML = 'more context'
        item.appendChild(contextLink);
        contextLink.addEventListener('click', (e) => {
          e.preventDefault()
          let id = contextLink.parentElement.name
            console.log('2',tempDetails, contextLink.parentElement.name)
            wisDetailsColumnBody.innerHTML = ''
            columnToggle(wisDetailsColumn)
            detailsHeadWrapper.addEventListener('click', backToPrevThird)
            console.log(contextLink.parentElement.name)
            db.collection('wisdomcollection').doc(contextLink.parentElement.name).get().then((snapshot) => {
              let doc = snapshot.data()
                createDetails(doc, loggedIn, userId, db, favInfo, id, wisDetailsColumnBody)
            })
          tempDetails = contextLink.parentElement.name;
        })
        console.log(commentLink.parentElement.name)
        if (loggedIn) item.appendChild(populateComments);
        if (!loggedIn && doc.wisComments[0]) item.appendChild(populateComments)
      if (loggedIn) {
        populateComments.className = `populatecomments ${subClass}`
        let postCommentForm = document.createElement("form")
        postCommentForm.innerHTML = `<form><label for="postcomment">Leave a comment:</label><br>
        <input type="text" class="postcommentid" style"visibility: hidden placeholder=${doc.id}><input type="text" class="actualcomment" name="actualcomment"/><button type="submit" class="postcommentbutton" value="submit" style="margin-left: 4px" name=${doc.id}>comment</button></form>`;
        populateComments.appendChild(postCommentForm)
        commentableArray = true;
    }
      }
    })








    if (relevantDocFound == false) {
      viewer.innerHTML += `<br>This section has no wisdom yet! Click 'submit wisdom' to be the first!`
      return
    }
  }).then(async () => {
  //add document object "submitComment" for comment button function
    if (commentableArray) {
      // console.log('generating comment buttons')
      let postCommentButton = document.getElementsByClassName("postcommentbutton");
      for (var i = 0; i < postCommentButton.length; i++) {
        let currentCB = postCommentButton[i];
        currentCB.addEventListener('click',(event) => submitComment(event, currentCB));
      }
    }
    let linkBoxes = document.getElementsByClassName("commenttop")
    for (let i = 0; i< linkBoxes.length; i++) {
      linkBoxes[i].addEventListener('click', openDetailsColumn)
    }
  });
};

const checkWisColorScheme = (weight, totalDocs, totalWeight) => {
  if (weight > (totalDocs / totalWeight)) {
  return true;
  } else {
  return false;
  };
};

const getNewest = async () => {
  let dbCounter = 0
  lastCategory = {mainCat: 'newest wisdom',
subCat: null};
  let commentableArray = false;
  viewer.innerHTML = '';
  let emptyBlock = document.createElement('div')
  emptyBlock.style.height = '60px';
  viewer.appendChild(emptyBlock)
  viewId.innerHTML = 'Newest Wisbits'
  if (lastCategory.subCat) {
    viewId.innerHTML += '/' + lastCategory.subCat
  }
  columnToggle(viewer);
  viewId.style.display = 'block';
  viewIdBack.style.display = 'block';
  //get request to the Firebase collection. Param is snapshot because that is what the collection is referred to in documentation
  await db.collection('wisdomcollection').get().then((snapshot) => {
    // viewer.innerHTML = '';
    let sortedDocs = []
    let totalDocs = 0;
    let totalWeight = 0;
    snapshot.docs.forEach(doc => {
      // console.log(doc.id)
      doc.data().id = doc.id;
      let itemData = doc.data()
      itemData['id'] = doc.id
      itemData['weight'] = 0;
      sortedDocs.push(itemData)
      dbCounter++
    }
    )

    sortedDocs.forEach(doc => {
      doc.weight = doc.favorites + doc.endorsements.length;
      totalDocs++
      totalWeight += doc.weight
    })

    let leftoverDocs = sortedDocs

    let newWisLog = 0
    sortedDocs = sortedDocs.sort((a, b) => b.weight-a.weight);
  sortedDocs.forEach(doc =>
    {
      let todaysDate =  new Date().getTime();
      todaysDate = Math.floor(todaysDate/1000);
      //for each doc, you must append with .data() to retrieve the data
      // follow .data() with an object key to retrieve a value
      if (Number(todaysDate) <= Number(doc.newestExpire.seconds)) {
        newWisLog++
        let checkFavorited = doc.wisdom
        //creates new element in the DOM
        let item = document.createElement("div");
        //gives element a class name attribute
        item.className = 'result-li'
        item.name = doc.id
        item.value = doc.favorites
        let subText = '';
        checkWisColorScheme(doc.weight, totalDocs, totalWeight) ? 
        item.className = 'result-li-high' : console.log('style normal');
        let subClass = '';
        if (item.className == 'result-li-high') subClass = ' borderalt1';
        if (doc.subCat) subText = '/' + doc.subCat;
        // console.log(`the value of this list item is: ${item.value}`)
        //displays readable data for the user
        item.innerHTML = `<div class="wisouterborder">${doc.category}${subText}</div><div class="commenttop${subClass}" name=${doc.id}> "${doc.wisdom}" <br><br>submitted by ${doc.user}</div>`;
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
            item.appendChild(addStar);
            addStar.className= `favoritestar${subClass}`;
            addStar.innerHTML = 'Favorite this <i class="fa fa-star-o"></i>';
            addStar.addEventListener('click',(event) => submitFavorite(event, addStar))
            needStar = true;
          }
          if (needStar === false) {
            let favorited = document.createElement("div");
            item.appendChild(favorited);
            favorited.className= `favorited${subClass}`;
            favorited.style.padding ="10px";
            favorited.innerHTML = 'Favorited <i class="fa fa-star"></i>';
            needStar = true;
          }
    }
        let populateComments = document.createElement("div")
          doc.wisComments.forEach(element => populateComments.innerHTML += `<p class="displaycomment">${element.commentkey}</p><p class="displaycommentuser">comment by ${element.userkey}<br></p>`)
          if (!doc.wisComments[0])  {
            populateComments.className = `populatecomments${subClass}`
            
          } else {
            populateComments.className = `populatecomments-notlogged${subClass}`
          }
          let commentLink = document.createElement("div");
    
          commentLink.className = `favorited ${subClass} commentlink`
          commentLink.innerHTML = `comments (${doc.wisComments.length})`
          item.appendChild(commentLink);
          commentLink.addEventListener('click', (e) => {
            e.preventDefault()
            //to open wisdetails:
            // let id = commentLink.parentElement.name
            // if (wisDetailsColumn.style.display == 'block' && tempDetails == commentLink.parentElement.name) {
            //   columnToggle(prevThird)
            // } else {
            //   wisDetailsColumnBody.innerHTML = ''
            //   columnToggle(wisDetailsColumn)
            //   detailsHeadWrapper.addEventListener('click', backToPrevThird)
            //   console.log(commentLink.parentElement.name)
            //   db.collection('wisdomcollection').doc(commentLink.parentElement.name).get().then((snapshot) => {
            //     let doc = snapshot.data()
            //       createDetails(doc, loggedIn, userId, db, favInfo, id, wisDetailsColumnBody)
            //   })
            // }
            if (populateComments.style.display == 'block') {
            populateComments.style.display = 'none';
            } else {
            populateComments.style.display = 'block';
            }
            tempDetails = commentLink.parentElement.name;
          })
          let contextLink = document.createElement("div");
          contextLink.className = `favorited ${subClass} commentlink contextlink`
          contextLink.innerHTML = 'more context'
          item.appendChild(contextLink);
          contextLink.addEventListener('click', (e) => {
            e.preventDefault()
            let id = contextLink.parentElement.name
              console.log('2',tempDetails, contextLink.parentElement.name)
              wisDetailsColumnBody.innerHTML = ''
              columnToggle(wisDetailsColumn)
              detailsHeadWrapper.addEventListener('click', backToPrevThird)
              console.log(contextLink.parentElement.name)
              db.collection('wisdomcollection').doc(contextLink.parentElement.name).get().then((snapshot) => {
                let doc = snapshot.data()
                  createDetails(doc, loggedIn, userId, db, favInfo, id, wisDetailsColumnBody)
              })
            tempDetails = contextLink.parentElement.name;
          })
          console.log(commentLink.parentElement.name)
          if (loggedIn) item.appendChild(populateComments);
          if (!loggedIn && doc.wisComments[0]) item.appendChild(populateComments)
        if (loggedIn) {
          let postCommentForm = document.createElement("form")
          postCommentForm.innerHTML = `<form><label for="postcomment">Leave a comment:</label><br>
          <input type="text" class="postcommentid" style"visibility: hidden placeholder=${doc.id}><input type="text" class="actualcomment" name="actualcomment"/><button type="submit" class="postcommentbutton" value="submit" style="margin-left: 4px" name=${doc.id}>comment</button></form>`;
          populateComments.className = `populatecomments ${subClass}`
          populateComments.appendChild(postCommentForm)
          commentableArray = true;
      }
        //append the viewer column with a new item
        viewer.appendChild(item);
        console.log(newWisLog)
      }
    })
      if (newWisLog < 19) {
      let wisNeeded = (20 - newWisLog)
      for (let i = 0; i < wisNeeded; i++) {
            //for each doc, you must append with .data() to retrieve the data
            // follow .data() with an object key to retrieve a value
              let checkFavorited = leftoverDocs[i].wisdom
              //creates new element in the DOM
              let item2 = document.createElement("div");
              //gives element a class name attribute
              item2.className = 'result-li'
              item2.name = leftoverDocs[i].id
              item2.value = leftoverDocs[i].favorites
              let subText = '';
              checkWisColorScheme(leftoverDocs[i].weight, totalDocs, totalWeight) ? 
              item2.className = 'result-li-high' : console.log('style normal');
              let subClass = '';
              if (item2.className == 'result-li-high') subClass = ' borderalt1';
              if (leftoverDocs[i].subCat) subText = '/' + leftoverDocs[i].subCat;
              // console.log(`the value of this list item is: ${item.value}`)
              //displays readable data for the user
              item2.innerHTML = `<div class="wisouterborder">${leftoverDocs[i].category}${subText}</div><div class="commenttop${subClass}" name=${leftoverDocs[i].id}> "${leftoverDocs[i].wisdom}" <br><br>submitted by ${leftoverDocs[i].user}</div>`;
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
                  item2.appendChild(addStar);
                  addStar.className= `favoritestar${subClass}`;
                  addStar.innerHTML = 'Favorite this <i class="fa fa-star-o"></i>';
                  addStar.addEventListener('click',(event) => submitFavorite(event, addStar))
                  needStar = true;
                }
                if (needStar === false) {
                  let favorited = document.createElement("div");
                  item2.appendChild(favorited);
                  favorited.className= `favorited${subClass}`;
                  favorited.style.padding ="10px";
                  favorited.innerHTML = 'Favorited <i class="fa fa-star"></i>';
                  needStar = true;
                }
          }

          
              let populateComments = document.createElement("div")
              leftoverDocs[i].wisComments.forEach(element => populateComments.innerHTML += `<p class="displaycomment">${element.commentkey}</p><p class="displaycommentuser">comment by ${element.userkey}<br></p>`)
                if (!leftoverDocs[i].wisComments[0])  {
                  populateComments.className = `populatecomments${subClass}`
                  
                } else {
                  populateComments.className = `populatecomments-notlogged${subClass}`
                }

        let commentLink = document.createElement("div");
    
        commentLink.className = `favorited ${subClass} commentlink`
        commentLink.innerHTML = `comments (${leftoverDocs[i].wisComments.length})`
        item2.appendChild(commentLink);
        commentLink.addEventListener('click', (e) => {
          e.preventDefault()
          //to open wisdetails:
          // let id = commentLink.parentElement.name
          // if (wisDetailsColumn.style.display == 'block' && tempDetails == commentLink.parentElement.name) {
          //   columnToggle(prevThird)
          // } else {
          //   wisDetailsColumnBody.innerHTML = ''
          //   columnToggle(wisDetailsColumn)
          //   detailsHeadWrapper.addEventListener('click', backToPrevThird)
          //   console.log(commentLink.parentElement.name)
          //   db.collection('wisdomcollection').doc(commentLink.parentElement.name).get().then((snapshot) => {
          //     let doc = snapshot.data()
          //       createDetails(doc, loggedIn, userId, db, favInfo, id, wisDetailsColumnBody)
          //   })
          // }
          if (populateComments.style.display == 'block') {
          populateComments.style.display = 'none';
          } else {
          populateComments.style.display = 'block';
          }
          tempDetails = commentLink.parentElement.name;
        })
        let contextLink = document.createElement("div");
        contextLink.className = `favorited ${subClass} commentlink contextlink`
        contextLink.innerHTML = 'more context'
        item2.appendChild(contextLink);
        contextLink.addEventListener('click', (e) => {
          e.preventDefault()
          let id = contextLink.parentElement.name
            console.log('2',tempDetails, contextLink.parentElement.name)
            wisDetailsColumnBody.innerHTML = ''
            columnToggle(wisDetailsColumn)
            detailsHeadWrapper.addEventListener('click', backToPrevThird)
            console.log(contextLink.parentElement.name)
            db.collection('wisdomcollection').doc(contextLink.parentElement.name).get().then((snapshot) => {
              let doc = snapshot.data()
                createDetails(doc, loggedIn, userId, db, favInfo, id, wisDetailsColumnBody)
            })
          tempDetails = contextLink.parentElement.name;
        })


                if (loggedIn) item2.appendChild(populateComments);
                if (!loggedIn && leftoverDocs[i].wisComments[0]) item2.appendChild(populateComments)
              if (loggedIn) {
                let postCommentForm = document.createElement("form")
                postCommentForm.innerHTML = `<form><label for="postcomment">Leave a comment:</label><br>
                <input type="text" class="postcommentid" style"visibility: hidden placeholder=${leftoverDocs[i].id}><input type="text" class="actualcomment" name="actualcomment"/><button type="submit" class="postcommentbutton" value="submit" style="margin-left: 4px" name=${leftoverDocs[i].id}>comment</button></form>`;
                populateComments.className = `populatecomments ${subClass}`
                populateComments.appendChild(postCommentForm)
                commentableArray = true;
            }
              //append the viewer column with a new item
              viewer.appendChild(item2);
            }
            console.log('hi')

    }
  //add document object "submitComment" for comment button function
    if (commentableArray) {
      // console.log('generating comment buttons')
      let postCommentButton = document.getElementsByClassName("postcommentbutton");
      for (var i = 0; i < postCommentButton.length; i++) {
        let currentCB = postCommentButton[i];
        currentCB.addEventListener('click',(event) => submitComment(event, currentCB));
      }
    }
    let linkBoxes = document.getElementsByClassName("commenttop")
    for (let i = 0; i< linkBoxes.length; i++) {
      linkBoxes[i].addEventListener('click', openDetailsColumn)
    }
    dbcount.innerHTML = `<b>${dbCounter}</b> wisbits currently in database`;
  })
}

let tempDetails = '';
const openDetailsColumn = (e) => {
  e.preventDefault;
  if (wisDetailsColumn.style.display == 'block' && tempDetails == e.srcElement.attributes['1'].nodeValue) {
    columnToggle(prevThird)
  } else {
  wisDetailsColumnBody.innerHTML = ''
  columnToggle(wisDetailsColumn)
  detailsHeadWrapper.addEventListener('click', backToPrevThird)
  console.log(e.srcElement.attributes['1'].nodeValue)
  db.collection('wisdomcollection').doc(e.srcElement.attributes['1'].nodeValue).get().then((snapshot) => {
    let doc = snapshot.data()
    createDetails(doc, loggedIn, userId, db, favInfo, snapshot.id, wisDetailsColumnBody)
  })
}
tempDetails = e.srcElement.attributes['1'].nodeValue
console.log(e.srcElement.attributes.name.value)
}




const createDetails = (doc, loggedIn, userId, db, favInfo, id, wisDetailsColumnBody) => {
  console.log(wisDetailsColumnBody.firstChild)
  let commentableArray = false;
  let wisbitDetails = document.createElement("div");
  wisbitDetails.className = 'details details-header';
  wisbitDetails.id = 'detailsid'
  if (document.getElementById('detailsid')) document.getElementById('detailsid').innerHTML = ''

  let checkFavorited = doc.wisdom
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
      addStar.className= `details-favoritestar`;
      addStar.innerHTML = 'Favorite this <i class="fa fa-star-o"></i>';
      addStar.addEventListener('click',(event) => submitFavorite(event, addStar))
      needStar = true;
    }
    if (needStar === false) {
      let favorited = document.createElement("div");
      wisbitDetails.appendChild(favorited);
      favorited.className= `details-favorited`;
      favorited.style.padding ="10px";
      favorited.innerHTML = 'Favorited <i class="fa fa-star"></i>';
      needStar = true;
    }
}
  let wisbitWisdom = document.createElement("div");
  wisbitWisdom.innerHTML = `created on ${doc.readableDateSubmitted}<br><br>"${doc.wisdom}"<br>`
  console.log(wisbitWisdom)
  wisbitDetails.append(wisbitWisdom)

  let wisbitAuthor = document.createElement("div");
  wisbitAuthor.innerHTML = `submitted by ${doc.user}`;
  wisbitDetails.append(wisbitAuthor);

  let wisbitMoreContext = document.createElement("div");
  if (doc.opContext) wisbitMoreContext.innerHTML = `<h5>Wisbit context from the author:</h5>${doc.opContext}<br><br>`
  wisbitDetails.append(wisbitMoreContext)

  if (doc.opDemo == null) {
    doc.opDemo = {age: null,
    sex: null,
    location: null,
    ethnicity: null,
  education: null};

  }

  if (doc.opDemo.age == null) doc.opDemo.age = 'unspecified'
  if (doc.opDemo.sex == null) doc.opDemo.sex = 'unspecified'
  if (doc.opDemo.location == null) doc.opDemo.location = 'unspecified'
  if (doc.opDemo.ethnicity == null) doc.opDemo.ethnicity = 'unspecified'
  if (doc.opDemo.education == null) doc.opDemo.education = 'unspecified'

  let wisbitOpDetails= document.createElement("div");
  wisbitOpDetails.innerHTML = `<h5>Demographic Information of Original Poster:</h4>
    age: ${doc.opDemo.age}<br>
    sex: ${doc.opDemo.sex}<br>
    location: ${doc.opDemo.country}<br>
    ethnicity: ${doc.opDemo.ethnicity}<br>
    education: ${doc.opDemo.education}

    <br>
    <br>`;
  wisbitDetails.append(wisbitOpDetails);

  


  if (doc.countryOfOrigin) doc.countryOfOrigin = 'unspecified'
  if (doc.ethnicity) doc.Ethnicity = 'unspecified'

  let wisbitDemo= document.createElement("div");
  wisbitDemo.innerHTML = `<h5>Demographic information about this wisbit:</h4>
    country of origin: ${doc.countryOfOrigin}<br>
    cultural origin: ${doc.ethnicity}<br>

    <br>
    <br>`;
  wisbitDetails.append(wisbitDemo);




    let populateComments = document.createElement("div")
      doc.wisComments.forEach(element => populateComments.innerHTML += `<p class="details-displaycomment">${element.commentkey}</p><p class="displaycommentuser">comment by ${element.userkey}<br></p>`)
      if (!doc.wisComments[0])  {
        populateComments.className = `details-populatecomments`
        
      } else {
        populateComments.className = `details-populatecomments-notlogged`
      }
      let commentsHeader = document.createElement("h5")
      commentsHeader.innerHTML = 'Comments:'
      if (loggedIn) {
        wisbitDetails.appendChild(commentsHeader)
        wisbitDetails.appendChild(populateComments)
      };
      if (!loggedIn && doc.wisComments[0]) {
      wisbitDetails.appendChild(commentsHeader)
      wisbitDetails.appendChild(populateComments)
      }

      wisDetailsColumnBody.appendChild(wisbitDetails)
    if (loggedIn) {
      let postCommentForm = document.createElement("form")
      postCommentForm.innerHTML = `<form><label for="postcomment">Leave a comment:</label><br>
      <input type="text" class="postcommentid" style"visibility: hidden placeholder=${id}><input type="text" class="actualcomment" name="actualcomment"/><button type="submit" class="details-postcommentbutton" value="submit" style="margin-left: 4px" id="cb${id}" name=${id}>comment</button></form>`;
      populateComments.className = `details-populatecomments`
      populateComments.appendChild(postCommentForm)
      //add document object "submitComment" for comment button function
        // console.log('generating comment buttons')
        let postCommentButton = document.getElementById('cb'+id);
          postCommentButton.addEventListener('click',(event) => submitComment(event, postCommentButton));
    
    
  }
//add document object "submitComment" for comment button function
}






const backToPrevThird = (e) => {
  e.preventDefault;
  columnToggle(prevThird)
}







//VERIFICATION SECTION

const checkWisInput = (str) => {
  console.log(str.length)
  if (typeof str != 'string') return false;
  if (str.length > 240) {
    return false
  }
  return true
}





//   6.   /////////////EVENT LISTENERS
submit.addEventListener('click', submitWis);
retrieve.addEventListener('click', getWise);
getLife.addEventListener('click', () => getWise({mainCat: 'Life', subCat: null}));
getLove.addEventListener('click', () => getWise({mainCat: 'Love', subCat: null}));
getHardship.addEventListener('click', () => getWise({mainCat: 'Hardship', subCat: null}));
getCareer.addEventListener('click', () => getWise({mainCat: 'Career', subCat: null}));
getCreativity.addEventListener('click', () => getWise({mainCat: 'Creativity', subCat: null}));
getOther.addEventListener('click', () => getWise({mainCat: 'Other', subCat: null}));
getCitizenship.addEventListener('click', () => getWise({mainCat: 'Citizenship', subCat: null}));
getEducation.addEventListener('click', () => getWise({mainCat: 'Education', subCat: null}));
getFinance.addEventListener('click', () => getWise({mainCat: 'Finance', subCat: null}));
getHealthAndFitness.addEventListener('click', () => getWise({mainCat: 'Health & Fitness', subCat: null}));
getHome.addEventListener('click', () => getWise({mainCat: 'Home', subCat: null}));
getRoutine.addEventListener('click', () => getWise({mainCat: 'Routine', subCat: null}));
getSocial.addEventListener('click', () => getWise({mainCat: 'Social', subCat: null}));
getTechnology.addEventListener('click', () => getWise({mainCat: 'Technology', subCat: null}));
getTransportation.addEventListener('click', () => getWise({mainCat: 'Transportation', subCat: null}));
getTravel.addEventListener('click', () => getWise({mainCat: 'Travel', subCat: null}));
getWellness.addEventListener('click', () => getWise({mainCat: 'Wellness', subCat: null}));
// getNew.addEventListener('click', () => getWise({mainCat: 'New', subCat: null}));

makeSubmit.addEventListener('click', openSubmit);
headLoginButton.addEventListener('click', openLoginColumn);
getSubmit.addEventListener('click', checkLogin);
promptLogin.addEventListener('click', openLoginColumn);
regButton.addEventListener('click', openReg);
regSubmit.addEventListener('click', regNewUser);
headRegButton.addEventListener('click', openReg);
logoutLink.addEventListener('click', logoutFunction);
accountLink.addEventListener('click', openAccount);
favoritesLink.addEventListener('click', openFavorites);
calendarLink.addEventListener('click', () => openCalendar(universalDayName));
dashboardLink.addEventListener('click', openDashboard);
leftHeader.addEventListener('click', () => loggedIn? columnToggle(dashboardColumn) : columnToggle(welcomeColumn));
leftHeader.addEventListener('click', getNewest)
wellWishButton.addEventListener('click', submitWish);
openWishButton.addEventListener('click', () => columnToggle(wishingWellColumn));
wWImage.addEventListener('click',() => grabWish(db));
tPBox.addEventListener('input', editThoughtStr);
category.addEventListener('input', showSubCats);
getNew.addEventListener('click', getNewest);
mySubmissionsLink.addEventListener('click', openMySubmissions)
getPass.addEventListener('input', addAsteriskLogin)


let subcats = document.getElementsByClassName("subcat");

const addAtt = (e, elem) => {
  e.preventDefault()
  let container = elem.parentElement
  let myelement = document.getElementById(container.id)
  let mainCat = myelement.attributes.name.value
  let subCat = null;
  if (elem.attributes.value.value) subCat = elem.attributes.value.value;
  console.log(mainCat, subCat)
  getWise({
    mainCat: mainCat,
    subCat: subCat
    })
};



//INIT SETTINGS
for (let i = 0; i < subcats.length; i++) {
  subcats[i].addEventListener('click',(e) => addAtt(e,subcats[i]));
}

//appends wisbit submission form to include subcategory
subCatObject['Career'].forEach((element) => {
  let item = document.createElement("option")
  item.innerHTML = element
  item.value =  element
  subCategory.appendChild(item)
})
//init welcome column on-load
columnToggle(welcomeColumn)
getNewest()

let countObject = {}
//set up count for each category and subcategory on-load
db.collection('wisdomcollection').get().then(snapshot => {
  


    snapshot.docs.forEach(doc => {
      if (!countObject[doc.data().category]) {
        countObject[doc.data().category] = {count: 1}
      }
      
      if (countObject[doc.data().category].count) countObject[doc.data().category].count = countObject[doc.data().category].count +1
      if (!countObject[doc.data().category][doc.data().subCat]) {
        countObject[doc.data().category][doc.data().subCat] = {count: 1}
      }
  
      if ([doc.data().subCat] && countObject[doc.data().category][doc.data().subCat].count) countObject[doc.data().category][doc.data().subCat].count = countObject[doc.data().category][doc.data().subCat].count +1
    })

  //   console.log(countObject)
  // console.log(subcats)

  // for (let i = 0; i < subcats.length; i++) {
    Object.keys(countObject).forEach(key => {
      if (document.getElementById('pc'+key)) {
        document.getElementById('pc'+key).innerHTML += `(${countObject[key].count-1})`
        Object.keys(countObject[key]).forEach(entry => {
          for (let i = 0; i < subcats.length; i++) {
            if ((subcats[i].parentElement.attributes.name.value == key) && (subcats[i].attributes.value.value == entry )) subcats[i].innerHTML += ` (${countObject[key][entry].count-1})`
          }
          })
        // if [key] && (subcats[key]) {
        //   document.getElementById('pc'+key).innerHTML += `(${countObject[key].count})`
    }
    })
    // console.log(subcats[key].parentElement.attributes.name.value, subcats[key].attributes.value.value)


  // }

  })


// let mainCat = myelement.attributes.name.value
// let subCat = null;
// if (elem.attributes.value.value) subCat = elem.attributes.value.value;
// console.log(mainCat, subCat)