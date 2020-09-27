
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
// let viewIdBack = document.getElementById('viewidback');
let forgotPass = document.getElementById('forgotpass');
let resetForm = document.getElementById('resetform');
let formErr = document.getElementById("formerr");
let regErr = document.getElementById("reg-err");
let howDoesHeadWrapper = document.getElementById("howdoesheadwrapper")
let howDoesDash = document.getElementById("cat-row-quick-guide");


//form elements
let makeSubmit = document.getElementById("cat-row-create-button");
let formColumn = document.getElementById("formcolumn");
let regColumn = document.getElementById("regcolumn");
let headLoginButton = document.getElementById("headloginbutton");
let loginColumn = document.getElementById("logincolumn");
let getSubmit = document.getElementById("getsubmit");
let getName = document.getElementById("getname");
let getEmail = document.getElementById("getemail")
let getPass = document.getElementById("getpass");
let saveLoginInfo = document.getElementById("savelogininfo");
let stayLogged = document.getElementById("staylogged")
let loginErrMsg = document.getElementById("login-err-msg")
let wisdomCount = document.getElementById("wisdom-count");

let regBack1 = document.getElementById("regback1");
let regNext1 = document.getElementById("regnext1");
let regBack2 = document.getElementById("regback2");
let regNext2 = document.getElementById("regnext2");
let regBack3 = document.getElementById("regback3");
let regNext3 = document.getElementById("regnext3");
let p11 = document.getElementById("p11");
let p12 = document.getElementById("p12");
let p13 = document.getElementById("p13");
let p21 = document.getElementById("p21");
let p22 = document.getElementById("p22");
let p23 = document.getElementById("p23");
let p31 = document.getElementById("p31");
let p32 = document.getElementById("p32");
let p33 = document.getElementById("p33");
let regP1 = document.getElementById("reg-p-1");
let regP2 = document.getElementById("reg-p-2");
let regP3 = document.getElementById("reg-p-3");
let regNav1 = document.getElementById("regnav1");
let regNav2 = document.getElementById("regnav2");
let regNav3 = document.getElementById("regnav3")



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
let resEmail = document.getElementById("res-email")
let sendPass = document.getElementById("sendpass")
let saveLoginInfoReg = document.getElementById("savelogininfo-reg")
let accUsername = document.getElementById("accusername");
let accEmail = document.getElementById("accemail");

//menu button elements
let logoutLink = document.getElementById("logoutlink");
let accountLink = document.getElementById("accountlink")
// let calendarLink = document.getElementById("calendarlink");
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
let viewerWindow = document.getElementById("viewerWindow");
let forgotColumn = document.getElementById("forgotcolumn");
let howDoesColumn = document.getElementById("howdoescolumn");
let howDoes = document.getElementById("howdoes")
let calBack = document.getElementById("cal-back");
let calNext = document.getElementById("cal-next");
let calEdit = document.getElementById("cal-edit");
let calEditor = document.getElementById("cal-editor")

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

//new divs
let searchBar = document.getElementById('search-bar');
let searchButton = document.getElementById('search-button');
let mobCat = document.getElementById("cat-row-cat-button");
let categoriesColumn = document.getElementById("categories-column");

//mobile divs
let mCatButton = document.getElementById('top-nav-1-id-mob');
let mCreateButton = document.getElementById('top-nav-2-id-mob');
// let mSearchButton = document.getElementById('top-nav-3-id-mob');
let mIntroButton = document.getElementById('top-nav-4-id-mob'); 
let mGuideButton = document.getElementById('top-nav-5-id-mob');
let mSearchBar = document.getElementById('search-bar-mob');
let mSearchButton = document.getElementById('search-button-mob');
let mCategoriesColumn = document.getElementById('mob-categories');


// let index = document.getElementById("index");
let secondColumnArray = [loginColumn, promptColumn, viewerWindow, viewer, formColumn, regColumn, forgotColumn, dashboardColumn, wishingWellColumn, calendarColumn, welcomeColumn, accountColumn, favoritesColumn, mySubmissionsColumn, wisDetailsColumn, howDoesColumn, 'noColumn', mCategoriesColumn]
// let thirdColumnArray = [dashboardColumn, wishingWellColumn, calendarColumn, welcomeColumn, accountColumn, favoritesColumn, mySubmissionsColumn, wisDetailsColumn, howDoesColumn];
//this can't include wisDetails Column for backtracking:
let thirdColumnPrevCheck = [dashboardColumn, wishingWellColumn, calendarColumn, welcomeColumn, accountColumn, favoritesColumn, mySubmissionsColumn, howDoesColumn];




//   2.   /////////////MANAGE SECOND COLUMN
const columnToggle = (selectedColumn) => {
  if (test2.style.display == 'block') test2.style.display = 'none';
    secondColumnArray.forEach(element => {
      if (element == selectedColumn) {toggleSecColumn(selectedColumn)}
    })
    // thirdColumnArray.forEach(element => {
    //   if (element == selectedColumn) {toggleThirdColumn(selectedColumn)}
    // })
}

  const toggleSecColumn = (selectedColumn) => {
    let keepOpen = null;
    let checkForPrevArray = [loginColumn, promptColumn, viewer, formColumn, regColumn, forgotColumn, dashboardColumn, wishingWellColumn, calendarColumn, welcomeColumn, accountColumn, favoritesColumn, mySubmissionsColumn, wisDetailsColumn, mCategoriesColumn, howDoesColumn]
      checkForPrevArray.forEach(element => {
        if (element.style.display == 'block') keepOpen = element;
      })
  if (!isSidebar) categoriesColumn.style.display = 'none';
  if (selectedColumn != 'noColumn') viewerWindow.style.display = 'none';
  if (selectedColumn != 'noColumn') viewId.style.display = 'none';
  // viewIdBack.style.display = 'none';
  mCategoriesColumn.style.display = 'none';
  loginColumn.style.display = 'none';
  promptColumn.style.display = 'none';
  // viewerWindow.style.display = 'block';
  if (selectedColumn != 'noColumn') viewer.style.display = 'none';
  formColumn.style.display = 'none';
  regColumn.style.display = 'none';
  forgotColumn.style.display = 'none';
  dashboardColumn.style.display = 'none';
  wishingWellColumn.style.display = 'none';
  calendarColumn.style.display = 'none';
  welcomeColumn.style.display = 'none';
  accountColumn.style.display = 'none';
  favoritesColumn.style.display = 'none';
  mySubmissionsColumn.style.display = 'none';
  wisDetailsColumn.style.display = 'none';
  howDoesColumn.style.display = 'none';

  if (selectedColumn && selectedColumn != 'noColumn') {
    selectedColumn.style.display = 'block';
    currentSecColumn = selectedColumn;
    viewerWindow.style.display = 'block';

  } else {
    // if (selectedColumn == viewId || selectedColumn == loginColumn || selectedColumn == promptColumn || selectedColumn == viewer || selectedColumn == formColumn || selectedColumn == regColumn || selectedColumn == forgotColumn)
    viewerWindow.style.display = 'block';
    keepOpen ? keepOpen.style.display = 'block' : console.log('no prev open');
  }
  if (selectedColumn == viewer) {viewId.style.display = 'block';}
  checkButtons()
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
  howDoesColumn.style.display = 'none';

  if (selectedColumn) selectedColumn.style.display = 'block';
  currentThirdColumn = selectedColumn;
}

const checkPrevThird = () => {
  thirdColumnPrevCheck.forEach(element => {
    if (element.style.display == 'block') {
      if (element != howDoesColumn) prevThird =  element
    }
  })
}

const checkButtons = () => {
console.log(categoriesColumn.style.display)
  if (categoriesColumn.style.display == 'block' || mCategoriesColumn.style.display == 'block') {
    document.getElementById('top-nav-1-id').className += ' top-nav-1-alt';
    document.getElementById('top-nav-1-id-mob').className += ' top-nav-1-alt';
  } else {
    document.getElementById('top-nav-1-id').className = 'top-nav-1';
    document.getElementById('top-nav-1-id-mob').className = 'top-nav-1-mob';
  }
  if (formColumn.style.display == 'block' || promptColumn.style.display == 'block') {
    document.getElementById('top-nav-2-id').className += ' top-nav-2-alt';
    document.getElementById('top-nav-2-id-mob').className += ' top-nav-2-alt';
  } else {
    document.getElementById('top-nav-2-id').className = 'top-nav-2';
    document.getElementById('top-nav-2-id-mob').className = 'top-nav-2-mob';
  }
  if (howDoesColumn.style.display == 'block') {
    document.getElementById('top-nav-5-id').className += ' top-nav-1-alt';
    document.getElementById('top-nav-5-id-mob').className += ' top-nav-1-alt';
  } else {
    document.getElementById('top-nav-5-id').className = 'top-nav-5';
    document.getElementById('top-nav-5-id-mob').className = 'top-nav-5-mob';
  }
  if (dashboardColumn.style.display == 'block') {
    document.getElementById('top-nav-6-id').className += ' top-nav-1-alt';
    document.getElementById('cat-row-calendar-button').className += ' top-nav-button-6-alt'
  } else {
    document.getElementById('top-nav-6-id').className = 'top-nav-6';
    document.getElementById('cat-row-calendar-button').className = 'horizontal-button'
  }
}




//   3.   ////////////LOGIN + USER CODE + LOGOUT
//login fuctions and rules
let loggedIn = false;
let saveduser = '';
let savedemail = '';
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
let totalDocs = 0;
let totalWeight = 0;
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
let isSidebar = false;



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
  // regPass.addEventListener('input', asteriskPass)
  // regPassReEntry.addEventListener('input', asteriskPassRe)
  prevThird = regColumn;
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
    // getPass.name = '';
    return
   }
  console.log('pass')
  // getPass.name += lastLetter
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
  RegInvalidMsg('email not valid')
  regName.value = '';
  regPass.value = '';
  regEmail.value = '';
  // regPass.name = '';
  canReg = false;
}
if (regPass.value != regPassReEntry.value) {
  canReg = false;
  RegInvalidMsg('passwords do not match')
};
if (regPass.value.length < 6) {
  canReg = false;
  RegInvalidMsg('password must be at least 6 characters')
}
if(regName < 3 || regName > 28) {
  canReg = false;
  RegInvalidMsg('username must be between 3 and 28 characters')
}
if (canReg == false) return false;
const promise = auth.createUserWithEmailAndPassword(regEmail.value, regPass.value);
promise.catch(e => {
  console.log(e.message)
  //if login is invalid, display a message to user to try again
  RegInvalidMsg(e.message)
  return;
})
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
  if (saveLoginInfoReg.checked == true) {
    window.localStorage.setItem('stayLogged', true);
    window.localStorage.setItem('savedLocalEmail', regEmail.value);
    window.localStorage.setItem('savedLocalPass', regPass.value);
  }
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
          applyLogin(regName.value, doc.id,  doc.data().authUserId, doc.data().myCal, thoughtStr, doc.data().opDemo, doc.data().email);
        }
      }
    })
  }).then(namePassReset)
}



//opens the login column
const openLoginColumn = () => {
  getEmail.value = '';
  // getPass.name = '';
  getPass.value = '';

  if (window.localStorage.getItem('savedLocalEmail') && window.localStorage.getItem('savedLocalPass')) {
    console.log('working')
    getEmail.value = window.localStorage.getItem('savedLocalEmail');
    getPass.value = window.localStorage.getItem('savedLocalPass');
    // getPass.name = window.localStorage.getItem('savedLocalPass');
    // for (let i = getPass.name.length; i > 0; i--) {
    //   getPass.value += '*'
    // }
    prevThird = loginColumn;
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
          item.name = element.id;
          let tempWeight = element.data().favorites + element.data().endorsements.length;
          console.log('////////test', tempWeight, totalDocs, totalWeight)
          if (checkWisColorScheme(tempWeight, totalDocs, totalWeight)) {
            item.className = 'fav-li subpop-yes';
          } else {
            item.className = 'fav-li subpop-no';
          }
    //displays readable data for the user
          if (item.className == 'fav-li subpop-yes') {
            item.innerHTML =
          `<div class="displayfav">
          <span class="burst"><i class="fa fa-lightbulb-o"></i><i style="color: rgb(6, 190, 6)" class="fa fa-envira"></i><span>popular wisdom</span></span><br><br>
            <div> "${element.data().wisdom}"<br><br>submitted by ${element.data().user}
            </div>
            <div>
            <br>
            <button class="mysubmissionsdetails" name=${element.id}>view details</button><button name=${element.id} class="mysubmissionsdelete">delete</button>
            </div>
          </div>`;
          }
          if (item.className == 'fav-li subpop-no') {
            item.innerHTML =
          `<div class="displayfav">
            <div> "${element.data().wisdom}"<br><br>submitted by ${element.data().user}
            </div>
            <div>
            <br>
            <button class="mysubmissionsdetails subpop-no-button" name=${element.id}>view details</button><button name=${element.id} class="mysubmissionsdelete subpop-no-button">delete</button>
            </div>
          </div>`;
          }
          //this creates a delete button for each of your submitted wisdom on the "my submissions page"
          let mySubmissionsDelete = document.getElementsByClassName("mysubmissionsdelete")
          console.log(mySubmissionsDelete)
          for (let i = 0; i < mySubmissionsDelete.length; i++) {
            mySubmissionsDelete[i].addEventListener('click', deleteMySubmission)

          //this brings the user to the wisbit details for their submitted wisdom
          }
          let mySubmissionsDetails = document.getElementsByClassName("mysubmissionsdetails")
          for (let i = 0; i < mySubmissionsDetails.length; i++) {
            let id = mySubmissionsDetails[i].name
            console.log(id)
            console.log(mySubmissionsDetails[0])
            console.log(element)
            prevThird = mySubmissionsColumn;
              mySubmissionsDetails[i].addEventListener('click', openDetailsColumn)
          }
        }
      })
    })
}

const deleteMySubmission = (e) => {
  e.preventDefault()
  console.log(e, 'hi')
  let forDelete = e.srcElement.getAttribute("name")
  db.collection("wisdomcollection").doc(forDelete).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
openMySubmissions()
}

// const deleteMyFav = (e) => {
//   e.preventDefault
//   let forDelete = e.path[0].name
//   for (let i = 0; i < favInfo.length; i++) {
//     if (favInfo[i] == forDelete) db.collection("usersdb").doc(userId).favWis[i].delete().then(function() {
//     console.log("Document successfully deleted!");
// }).catch(function(error) {
//     console.error("Error removing document: ", error);
// });
// openMySubmissions()
// }




//finds and verifies login information by sending user input to Firebase to see if there is a match.
const checkLogin = (e) => {
  if (e) e.preventDefault();
  let loginFound = false;

  if (saveLoginInfo.checked && stayLogged) {
    window.localStorage.setItem('savedLocalEmail', getEmail.value)
    window.localStorage.setItem('savedLocalPass', getPass.value)
    // window.localStorage.setItem('savedLocalPass', getPass.name)
  } else {
    localStorage.removeItem('savedLocalEmail')
    localStorage.removeItem('savedLocalPass')
  }

  if (stayLogged.checked) {
    window.localStorage.setItem('stayLogged', true)
  } else {
    window.localStorage.setItem('stayLogged', false)
  }

  const promise = auth.signInWithEmailAndPassword(getEmail.value, getPass.value);
  // const promise = auth.signInWithEmailAndPassword(getEmail.value, getPass.name);
  promise.catch(e => {
    console.log(e.message)
    //if login is invalid, display a message to user to try again
    loginInvalidMsg(e.message)
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
          applyLogin(doc.data().username, doc.id, response.user.uid, doc.data().myCal, doc.data().thoughtStr, doc.data().opDemo, doc.data().email);
        }
      }
    })
  })).then(namePassReset)
}



const namePassReset = () => {
  // getName.value = ''; no longer an element for login. login only requires getpass and get email
  getPass.value = '';
  // getPass.name = '';
  getEmail.value = '';
}

const loginInvalidMsg = (error) => {
  let nodeMsg = document.createElement("div")
  nodeMsg.innerHTML = 'email/password not found. try again.'
  nodeMsg.style.color = 'red';
  nodeMsg.id = 'failedlogin';
  loginErrMsg.style.display = 'block';
  if (error) nodeMsg.innerHTML = error
  loginErrMsg.append(nodeMsg);
  setTimeout(() => nodeMsg.style.display = 'none', 4000);
  namePassReset()
}

const RegInvalidMsg = (error) => {
  let nodeMsg = document.createElement("div")
  nodeMsg.style.color = 'red';
  nodeMsg.id = 'failedreg';
  regErr.style.display = 'block';
  if (error) nodeMsg.innerHTML = error
  regErr.append(nodeMsg);
  setTimeout(() => nodeMsg.style.display = 'none', 4000);
  namePassReset()
}




//if login data has a match in Firebase, the user will be logged in, and user data will populate necessary document objects.
const applyLogin = (name, id, authUserId, myCal, thoughtStr, opDemo, saveEmail) => {
  loggedIn = true;
  saveduser = name;
  savedemail = saveEmail;
  howDoesDash.style.display = 'block';
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
  getCal(calInfo);
  document.getElementById('top-nav-6-id').style.display = 'block';
  tPBox.value = thoughtStr
  lastTPValue = thoughtStr;
  if (opDemo) opDemoData = opDemo;
  lastSecondColumn == 'formColumn'? columnToggle(formColumn) : getNewest();
  prevThird = dashboardColumn;
  columnToggle(dashboardColumn);
}

const getFavInfo = () => {
  db.collection('usersdb').doc(userId).get().then(snapshot => {
    favInfo = snapshot.data().favWis;
    // console.log(snapshot.data().favWis);
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
  window.localStorage.setItem('stayLogged', false)
  location.reload();
  firebase.auth().signOut
}



const openAccount = () => {
  accUsername.innerHTML = saveduser;
  accEmail.innerHTML = savedemail;
  columnToggle(accountColumn)
  prevThird = accountColumn;
}



const openFavorites = () => {
  favoritesList.innerHTML = '';
  columnToggle(favoritesColumn)
  prevThird = favoritesColumn;
  db.collection('usersdb').doc(userId).get().then(snapshot => {
  
    let favArray = snapshot.data().favWis;
      favArray.forEach(async element => {
        let item = document.createElement("li")
        item.className = 'fav-li subpop-no'
        item.name = element.id;
                let id = '';
        let doc1 = {};
        let delButton = document.createElement('button')
        let viewButton = document.createElement("button");
        await db.collection('wisdomcollection').doc(element.originalId).get().then(doc => {
          doc1 = doc.data()
          id = doc.id
          let weight = doc.data().favorites + doc.data().wisComments.length
          console.log(weight, 'weight')
          if (checkWisColorScheme(weight, totalDocs, totalWeight)) {
            item.style.color = item.className = 'fav-li subpop-yes';
            viewButton.className = 'mysubmissionsdetails ';
            delButton.className = 'mysubmissionsdelete ';
          }else {
            viewButton.className = 'mysubmissionsdetails subpop-no-button';
            delButton.className = 'mysubmissionsdelete subpop-no-button';
          }
        })

  //displays readable data for the user
        item.innerHTML = `<div class="displayfav"> "${element.entry}"<br><br>submitted by ${element.author}</div><br>`;

        delButton.innerHTML = 'remove favorite'
        delButton.name = element.originalId

        viewButton.innerHTML = 'view details'

        console.log('wisfavid', id)
        item.append(viewButton)
        item.appendChild(delButton)
        favoritesList.appendChild(item)
        viewButton.addEventListener('click', () => {
          // createDetails(doc1, loggedIn, userId, db, favInfo, id, wisDetailsColumnBody);
          openDetailsColumn(doc1, id)
          prevThird = favoritesColumn;
          columnToggle(wisDetailsColumn)
        })
        delButton.addEventListener('click', (e) => delFavorite(e, item, element))
    })
  })
}

const delFavorite = (e, item, element) => {
  e.preventDefault()
  db.collection('usersdb').doc(userId).update({
    favWis: firebase.firestore.FieldValue.arrayRemove({
      author: element.author,
      entry: element.entry,
      originalId: element.originalId
    })
  })
  const decrement = firebase.firestore.FieldValue.increment(-1);

// Update read count
db.collection('wisdomcollection').doc(element.originalId).update({ favorites: decrement });
  item.style.display = 'none'

}


let dateOffset = 0;
const getCal = () => {
  console.log(calInfo)
  let dayName = '';
  let dayInMonth = '';
  let month = '';
  var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  let initDate = new Date;
  const currentDate = new Date(initDate)
  currentDate.setDate(currentDate.getDate() + dateOffset)
  console.log(currentDate, 'today')
  let num = currentDate.getDay();
  console.log(num, 'num')
  dayInMonth = currentDate.getDate();
  console.log(dayInMonth, 'dayInMonth')
    month = months[currentDate.getMonth()];
console.log(month, 'month')
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
  let calMsg = 'Click the edit button below to create your wisdom calendar!'
  if (calInfo[dayName].entry) calMsg = calInfo[dayName].entry;
  if (calInfo[dayName].imgsrc) calImg = calInfo[dayName].imgsrc;
  let genCalendar = `<h4 id="monthday">${dayName} ${month} ${dayInMonth}</h4><div id="calbox"><p id="realmsg">" ${calMsg} "</p><img class="calendarimage" src=${calImg} /></div>`;
  dashboardCalendar.innerHTML = genCalendar;
  console.log(calMsg.length, 'length')
  if (calMsg.length > 72) document.getElementById("realmsg").style.fontSize = '28px';
  if (calMsg.length > 100) document.getElementById("realmsg").style.fontSize = '20px';
  calEdit.innerHTML = `edit ${dayName}s`
  // return genCalendar;
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
        <div id="tempCalDay" name="${day}">${day}s</div>
        <select id="daytoset" name="tempweekday" style="display: none">
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
    <label class="tempcallabel" for="attachimg" style="display: block">Add an image (optional)<br>copy any image address from the web and paste it:</label>
    <br>
        <input type="text" id="attachimg"/>
        <br><br>
        <br><button id="cancelcal">cancel</button>
      <button type="submit" class="submit" id="submitcalday" name="submitcalday">save</button>
      </form>
      <br>
      <br>
    </div>`;
    return genCalendar;
  }



const submitCalDayFunction = async (event, calMsgInput, attachImg) => {
  event.preventDefault()
  // console.log(`this is the day to set: ${dayToSet.options[dayToSet.selectedIndex].value}`)
  let tempDaySubmit = document.getElementById("tempCalDay")
  console.log(tempDaySubmit)
  let thisDay = tempDaySubmit.getAttribute("name")
  console.log(thisDay, 'thisDay')
  let thisMessage = calMsgInput.options[calMsgInput.selectedIndex].text
  console.log(thisMessage, 'message')
  let address = 'myCal.' + thisDay + '.entry';
  let addressImg = 'myCal.' + thisDay +'.imgsrc';
    if (attachImg.value) {
        await db.collection("usersdb").doc(userId).update({[addressImg]: attachImg.value}).then(
        await db.collection("usersdb").doc(userId).update({[address]: thisMessage}))
      } else {
        await db.collection("usersdb").doc(userId).update({[addressImg]: attachImg.placeholder}).then(
          await db.collection("usersdb").doc(userId).update({[address]: thisMessage}))
      }
    refreshCal()
    animateSaved()
    setTimeout(openDashboard, 200)
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
  calEditor.style.display = 'block';
  //generate basic temporary calendar
  bigCalendarBox.innerHTML = '';
  calintroline.innerHTML = `Need inspiration with your morning brew? Customize your weekly calendar with your favorite wisdom! All your favorite wisbits are in the pull-down menu below. Select one and click save.`;
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
  let cancelCal = document.getElementById("cancelcal");
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
          let whichCat = 'categories';
          if (window.innerWidth < 740) whichCat = '<i class="fa fa-database" style="padding-left: 4px; padding-right: 4px;"></i>';
          calintroline.innerHTML = `Need inspiration with your morning brew? Customize your calendar with your favorite wisdom!<span style="color: red"><br><br>**You haven't added any favorites.<br>Before you can use your calendar, click the ${whichCat} button and add a wisbit to your "favorites".</span>`
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
      //   function listQ(){
      //   if(dayToSet.selectedIndex > 0){
      //     if(dayToSet.selectedIndex != lastIndex) {
      //       if("Monday" == dayToSet.options[dayToSet.selectedIndex].value) {
      //         openCalendar('Monday')
      //       lastIndex = dayToSet.selectedIndex;
      //       }
      //       if("Tuesday" == dayToSet.options[dayToSet.selectedIndex].value) {
      //         openCalendar('Tuesday')
      //       lastIndex = dayToSet.selectedIndex;
      //       }
      //       if("Wednesday" == dayToSet.options[dayToSet.selectedIndex].value) {
      //         openCalendar('Wednesday')
      //       lastIndex = dayToSet.selectedIndex;
      //       }
      //       if("Thursday" == dayToSet.options[dayToSet.selectedIndex].value) {
      //         openCalendar('Thursday')
      //       lastIndex = dayToSet.selectedIndex;
      //       }
      //       if("Friday" == dayToSet.options[dayToSet.selectedIndex].value) {
      //         openCalendar('Friday')
      //       lastIndex = dayToSet.selectedIndex;
      //       }
      //       if("Saturday" == dayToSet.options[dayToSet.selectedIndex].value) {
      //         openCalendar('Saturday')
      //       lastIndex = dayToSet.selectedIndex;
      //       }
      //       if("Sunday" == dayToSet.options[dayToSet.selectedIndex].value) {
      //         openCalendar('Sunday')
      //       lastIndex = dayToSet.selectedIndex;
      //       }
      //     }
      //     else {
      //       lastIndex = ""
      //     }
      //   }
      // }
      // dayToSet.addEventListener("click",listQ)
    })
    dayToSet = day;
    cancelCal.addEventListener('click', openDashboard)
  submitCalDay.addEventListener('click', () => submitCalDayFunction(event, calMsgInput, attachImg, dayToSet))
  
  columnToggle(calendarColumn);
  prevThird = calendarColumn
}



const openDashboard = () => {
  columnToggle(dashboardColumn);
  getCal();
  prevThird = dashboardColumn;
}






//   4.   /////////////SUBMISSIONS CODE
//displays the form submission column
const openSubmit = () => {
  lastSecondColumn = 'formColumn'
  // columnToggle()
  // prevThird = formColumn;
  if (showLogin(formColumn)) {
  columnToggle(formColumn)
  prevThird = formColumn;
  } else {
    columnToggle(promptColumn)
    prevThird = promptColumn;
  }
};

const showSubCats = (e) => {
  e.preventDefault()
  let topValue = category.options[category.selectedIndex].value
  // console.log(topValue)
  subCategory.innerHTML = ''
  subCatObject[topValue].forEach((element) => {
  let item = document.createElement("option")
  item.innerHTML = element
  item.value =  element
  subCategory.appendChild(item)
  })
  
}

let charCount = 299;
wisdomCount.innerHTML = `${charCount} characters left`;
wisdom.addEventListener('input',(e) => {
  e.preventDefault()
  // console.log('counting')
  charCount = 299 - wisdom.value.length
  if (charCount >= 0) wisdomCount.innerHTML = `${charCount} characters left`
  if (charCount < 0) wisdomCount.innerHTML = 'exceeds character limit';
});


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
    if (checkWisInput(wisdom.value) == false) {
      formErr.innerHTML = 'wisdom exceeds max length of 299 characters'
      return false;
    };
    
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

const commentIdGen = () => {
  let id = [];
  let digits = [1, 2, 3, 4, 5, 6]
  let alpha = [1, 2, 3, 4, 5, 6, 7, 8]
  digits.forEach(element => id.push(Math.floor(Math.random() * 10)))
  alpha.forEach(element => id.push(String.fromCharCode(97 + (Math.floor(Math.random() * 26)))))
  id.sort(() => Math.random() - 0.5);
  return id.join('').toString()
}


//last stage in submitting a comment:
const finalComment = async (comment) => {
  //to pull up the right viewer window. fix later
  if (lastCategory.mainCat == 'newest wisdom') lastCategory.mainCat = 'New' 
  console.log(`putting to document ${comment.name}`)
  console.log(`data is: ${comment.parentElement.actualcomment.value}`)
  let updateDb = db.collection('wisdomcollection').doc(comment.name)
  let commentId = commentIdGen();
  await updateDb.update({wisComments: firebase.firestore.FieldValue.arrayUnion({commentkey: comment.parentElement.actualcomment.value,
    userkey: saveduser, commentId: commentId, commentUser: userId, timestamp: Date.now()})
    })
    
  // await db.collection('wisdomcollection').doc(comment.name).get().then(doc => {
  //   console.log(doc, 'this is doc')
  //   // comment.parentElement.parentElement.outerHTML = '';
  //   let populateComments = document.createElement('div')
  //   let elemCount = 0;
  //   let item = document.createElement('div')
  //   checkWisColorScheme(doc.data().weight, totalDocs, totalWeight) ? 
  //   item.className = 'result-li-high' : console.log('style normal');
  //   let subClass = '';
  //   if (item.className == 'result-li-high') subClass = ' borderalt1';
  //         doc.data().wisComments.forEach(element => {
  //           console.log('element of wiscomments')
  //           let currentComment = document.createElement("div");
  //           currentComment.innerHTML = `<p class="displaycomment">${element.commentkey}</p><p class="displaycommentuser">comment by ${element.userkey}<br></p>`
  //           populateComments.appendChild(currentComment)
  //           currentComment.id = element.commentId;
  //           if (element.commentUser == userId) {
  //             let delComButton = document.createElement("BUTTON")
  //             delComButton.name = doc.data().id;
  //             delComButton.value = element.commentId
  //             delComButton.placeholder = element.id;
  //             delComButton.innerHTML = 'delete comment';
  //             delComButton.className = 'delcombutton';
  //             populateComments.append(delComButton)
  //             let commentData = element
  //             console.log(commentData, 'this is comment data')
  //             delComButton.addEventListener('click', (e) => delComment(e, commentData))
  //             elemCount ++
  //           }
  //           })
  //           populateComments.style.display = 'block';
  //           populateComments.className = `populatecomments${subClass}`
            
     
  //         comment.parentElement.parentElement.parentElement.appendChild(populateComments)
  //       })

    
    // comment.parentElement.parentElement.childNodes[parentElement.parentElement.childNodes.length] = comment.parentElement.parentElement.childNodes[parentElement.parentElement.childNodes.length-1]
    // let newComment = document.createElement('div')
    // console.log('this is the comment', comment.parentElement.parentElement.childNodes)
    // getWise(lastCategory);

    // let newComment = document.createElement('div')
    let newComment = `<div class="displaycomment">${comment.parentElement.actualcomment.value}</div><div class="displaycommentuser">comment by ${saveduser}</div><br>your comment has been posted`
    // newComment.className = `displaycomment`
    let tempDiv = document.createElement('form')
    let parentEl = comment.parentElement.parentElement
    tempDiv.innerHTML = comment.parentElement.parentElement.childNodes[comment.parentElement.parentElement.childNodes.length-1].outerHTML
    // console.log(tempDiv)
    comment.parentElement.parentElement.childNodes[comment.parentElement.parentElement.childNodes.length-1].outerHTML = newComment;
    // console.log(parentEl)
    let tempElement = document.createElement('div')
    // tempElement.innerHTML = 'hello'
    // comment.parentElement.parentElement.append(tempElement)
    // parentEl.append(tempDiv)
    // parentEl.append('your comment has been posted')



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
    }).then(getFavInfo()).then(data.innerHTML = 'favorited <i class="fa fa-star"></i>')
  }
  ).then(() => {
    console.log('column:', prevThird)
  if (prevThird == calendarColumn) {
    openCalendar(universalDayName)
  }
  })
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
  // console.log(catDetails)
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
  prevThird = viewer;
  viewId.style.display = 'block';
  // viewIdBack.style.display = 'block';
  //get request to the Firebase collection. Param is snapshot because that is what the collection is referred to in documentation
  await db.collection('wisdomcollection').get().then((snapshot) => {
    // viewer.innerHTML = '';
    let sortedDocs = []
    let relevantDocFound = false;
    totalDocs = 0;
    totalWeight = 0;
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
        let popularWatermark = `<span class="burst"><i class="fa fa-lightbulb-o"></i><i style="color: rgb(6, 190, 6)" class="fa fa-envira"></i><span class="popClass">popular wisdom</span></span>`
        if (item.className == 'result-li') popularWatermark = '';
        item.innerHTML = `<div class="wisouterborder">${doc.category}${subText}</div><div class="commenttop${subClass}" name="${doc.id}">${popularWatermark} "${doc.wisdom}" <div class="authdiv">~ ${doc.user}</div></div>`;
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
            addStar.innerHTML = 'favorite <i class="fa fa-star-o"></i>';
            addStar.addEventListener('click',(event) => submitFavorite(event, addStar))
            needStar = true;
          }
          if (needStar === false) {
            let favorited = document.createElement("div");
            item.appendChild(favorited);
            favorited.className= `favorited ${subClass}`;
            favorited.innerHTML = 'favorited <i class="fa fa-star"></i>';
            needStar = true;
          }
    }


        let populateComments = document.createElement("div")
        // populateComments.style.borderRadius = '0% 0% 10% 10%'
        let elemCount = 0;
          doc.wisComments.forEach(element => {
            let currentComment = document.createElement("div");
            currentComment.innerHTML = `<p class="displaycomment">${element.commentkey}</p><p class="displaycommentuser">comment by ${element.userkey}<br></p>`
            populateComments.appendChild(currentComment)
            currentComment.id = element.commentId;
            if (element.commentUser == userId) {
              let delComButton = document.createElement("BUTTON")
              delComButton.name = doc.id;
              delComButton.value = element.commentId
              delComButton.placeholder = element.id;
              delComButton.innerHTML = 'delete comment';
              delComButton.className = 'delcombutton';
              populateComments.append(delComButton)
              let commentData = element
              console.log(commentData, 'this is comment data')
              delComButton.addEventListener('click', (e) => delComment(e, commentData))
              elemCount ++
            }
            })
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
      viewer.innerHTML += `<br>This section has no wisdom yet! Click 'CREATE A WISBIT' to be the first!`
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
      linkBoxes[i].addEventListener('click', (e) => {
        console.log(linkBoxes[i])
        let thisName = linkBoxes[i].attributes.name.value;
        openDetailsColumn(linkBoxes[i], thisName)
      })
    }
  });
};

const checkWisColorScheme = (weight, totalDocs, totalWeight) => {
  // console.log('color check:', weight, (totalDocs/totalWeight))
  if (weight > (totalDocs / totalWeight) + 1) {
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
  prevThird = viewer;
  viewId.style.display = 'block';
  // viewIdBack.style.display = 'block';
  //get request to the Firebase collection. Param is snapshot because that is what the collection is referred to in documentation
  await db.collection('wisdomcollection').get().then((snapshot) => {
    // viewer.innerHTML = '';
    let sortedDocs = []
    totalDocs = 0;
    totalWeight = 0;
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
    // console.log(leftoverDocs, 'leftoverdocs')

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
        let popularWatermark = `<span class="burst"><i class="fa fa-lightbulb-o"></i><i style="color: rgb(6, 190, 6)" class="fa fa-envira"></i><span class="popClass">popular wisdom</span></span><br>`
        if (item.className == 'result-li') popularWatermark = ''
        // console.log(`the value of this list item is: ${item.value}`)
        //displays readable data for the user
        item.innerHTML = `<div class="wisouterborder">${doc.category}${subText}</div><div class="commenttop${subClass}" name=${doc.id}>${popularWatermark} "${doc.wisdom}" <div class="authdiv">~ ${doc.user}</div></div>`;
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
            addStar.innerHTML = 'Favorite <i class="fa fa-star-o"></i>';
            addStar.addEventListener('click',(event) => submitFavorite(event, addStar))
            needStar = true;
          }
          if (needStar === false) {
            let favorited = document.createElement("div");
            item.appendChild(favorited);
            favorited.className= `favorited${subClass}`;
            // favorited.style.padding ="3px";
            favorited.innerHTML = 'favorited <i class="fa fa-star"></i>';
            needStar = true;
          }
    }
        let populateComments = document.createElement("div")
        let elemCount = 0;
        doc.wisComments.forEach(element => {
          let currentComment = document.createElement("div");
          currentComment.innerHTML = `<p class="displaycomment">${element.commentkey}</p><p class="displaycommentuser">comment by ${element.userkey}<br></p>`
          populateComments.appendChild(currentComment)
          currentComment.id = element.commentId;
            if (element.commentUser == userId) {
              let delComButton = document.createElement("BUTTON")
              delComButton.name = doc.id;
              delComButton.value = element.commentId
              delComButton.placeholder = element.id;
              delComButton.innerHTML = 'delete comment';
              delComButton.className = 'delcombutton';
              populateComments.append(delComButton)
              let commentData = element
              console.log(commentData, 'this is comment data')
              delComButton.addEventListener('click', (e) => delComment(e, commentData))
              elemCount ++
            }
          })
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
          // let extraLine = document.createElement("div");
          // extraLine.className = 'add-extra-line';
          // item.appendChild(extraLine)
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
          // console.log(commentLink.parentElement.name)
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
        // console.log(newWisLog)
        for (let i = 0; i < leftoverDocs.length; i++) {
          // console.log(leftoverDocs)
          if (leftoverDocs[i].id == doc.id) {
            // console.log(leftoverDocs)
            return leftoverDocs.splice(i, 1)
          }
        }
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
              let popularWatermark = `<span class="burst"><i class="fa fa-lightbulb-o"></i><i style="color: rgb(6, 190, 6)" class="fa fa-envira"></i><span class="popClass">popular wisdom</span></span>`
              if (item2.className == 'result-li') popularWatermark = '';
              // console.log(`the value of this list item is: ${item.value}`)
              //displays readable data for the user
              item2.innerHTML = `<div class="wisouterborder">${leftoverDocs[i].category}${subText}</div><div class="commenttop${subClass}" name=${leftoverDocs[i].id}>${popularWatermark} "${leftoverDocs[i].wisdom}" <div class="authdiv">~ ${leftoverDocs[i].user}</div></div>`;
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
                  addStar.innerHTML = 'favorite<i class="fa fa-star-o"></i>';
                  addStar.addEventListener('click',(event) => submitFavorite(event, addStar))
                  needStar = true;
                }
                if (needStar === false) {
                  let favorited = document.createElement("div");
                  item2.appendChild(favorited);
                  favorited.className= `favorited${subClass}`;
                  // favorited.style.padding ="6px";
                  favorited.innerHTML = 'favorited <i class="fa fa-star"></i>';
                  needStar = true;
                }
          }

          
              let populateComments = document.createElement("div")
              let elemCount = 0;
              leftoverDocs[i].wisComments.forEach(element => {
                let currentComment = document.createElement("div");
                currentComment.innerHTML = `<p class="displaycomment">${element.commentkey}</p><p class="displaycommentuser">comment by ${element.userkey}<br></p>`
                populateComments.appendChild(currentComment)
                currentComment.id = element.commentId;
              if (element.commentUser == userId) {
                let delComButton = document.createElement("BUTTON")
                delComButton.name = leftoverDocs[i].id;
                delComButton.value = element.commentId
                delComButton.placeholder = element.id;
                delComButton.innerHTML = 'delete comment';
                delComButton.className = 'delcombutton';
                populateComments.append(delComButton)
                let commentData = element
                // console.log(commentData, 'this is comment data')
                delComButton.addEventListener('click', (e) => delComment(e, commentData))
                elemCount ++
              }
            })
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
            // console.log('2',tempDetails, contextLink.parentElement.name)
            wisDetailsColumnBody.innerHTML = ''
            columnToggle(wisDetailsColumn)
            detailsHeadWrapper.addEventListener('click', backToPrevThird)
            // console.log(contextLink.parentElement.name)
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
      linkBoxes[i].addEventListener('click', (e) => {
        console.log(linkBoxes[i])
        let thisName = linkBoxes[i].attributes.name.value;
        openDetailsColumn(linkBoxes[i], thisName)
      })
    }
    dbcount.innerHTML = `<b>${dbCounter}</b> wisbits currently in database`;
  })
}


const searchRes = async (term) => {
  if (term == '') return;
  lastSecondColumn = viewer;
  // console.log(catDetails)
  //hides the form column if it is open
  let commentableArray = false;
  viewer.innerHTML = '';
    let emptyBlock = document.createElement('div')
  emptyBlock.style.height = '60px';
  viewer.appendChild(emptyBlock)
    viewId.innerHTML = 'Search Results'
  columnToggle(viewer);
  prevThird = viewer;
  viewer.innerHTML += `Results for the term "${term}":<br><br>`
  viewId.style.display = 'block';
  // viewIdBack.style.display = 'block';
  //get request to the Firebase collection. Param is snapshot because that is what the collection is referred to in documentation
  await db.collection('wisdomcollection').get().then((snapshot) => {
    // viewer.innerHTML = '';
    let sortedDocs = []
    let relevantDocFound = false;
    totalDocs = 0;
    totalWeight = 0;
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
      let text = doc.wisdom
      console.log(text)

      const removePunc = (str) => {
        //create an array of characters
        let charArray = []
        //iterate through the str
        for (let i = 0; i < str.length; i++) {
          //if character in string is between a-z, it is pushed into char array
          if (str[i] >= 'a' && str[i] <= 'z') {
            charArray.push(str[i])
          };
        };
        //join the char array and output as a string
        let checkedStr = charArray.join('');
        return checkedStr;
      };


      const returnWordsObject = (text) => {
        console.log(text)
        const wordsObject = {};
        let wordsArray = text.toLowerCase().split(' ');
        
        for (let i = 0; i < wordsArray.length; i++) {
          let currentWord = wordsArray[i];
          //remove any commas, periods, etc
          currentWord = removePunc(currentWord);
          wordsObject[currentWord]? wordsObject[currentWord]++ :     wordsObject[currentWord] = 1;
        }
        return wordsObject;
        }
      let wisdomWords = returnWordsObject(text);
      console.log(typeof wisdomWords, wisdomWords)
      console.log(wisdomWords[term])
      if (wisdomWords[term]) {
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
        let popularWatermark = `<span class="burst"><i class="fa fa-lightbulb-o"></i><i style="color: rgb(6, 190, 6)" class="fa fa-envira"></i><span class="popClass">popular wisdom</span></span>`
        if (item.className == 'result-li') popularWatermark = '';
        item.innerHTML = `<div class="wisouterborder">${doc.category}${subText}</div><div class="commenttop${subClass}" name="${doc.id}">${popularWatermark} "${doc.wisdom}" <div class="authdiv">~ ${doc.user}</div></div>`;
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
            addStar.innerHTML = 'favorite <i class="fa fa-star-o"></i>';
            addStar.addEventListener('click',(event) => submitFavorite(event, addStar))
            needStar = true;
          }
          if (needStar === false) {
            let favorited = document.createElement("div");
            item.appendChild(favorited);
            favorited.className= `favorited ${subClass}`;
            favorited.innerHTML = 'favorited <i class="fa fa-star"></i>';
            needStar = true;
          }
    }


        let populateComments = document.createElement("div")
        // populateComments.style.borderRadius = '0% 0% 10% 10%'
        let elemCount = 0;
          doc.wisComments.forEach(element => {
            let currentComment = document.createElement("div");
            currentComment.innerHTML = `<p class="displaycomment">${element.commentkey}</p><p class="displaycommentuser">comment by ${element.userkey}<br></p>`
            populateComments.appendChild(currentComment)
            currentComment.id = element.commentId;
            if (element.commentUser == userId) {
              let delComButton = document.createElement("BUTTON")
              delComButton.name = doc.id;
              delComButton.value = element.commentId
              delComButton.placeholder = element.id;
              delComButton.innerHTML = 'delete comment';
              delComButton.className = 'delcombutton';
              populateComments.append(delComButton)
              let commentData = element
              console.log(commentData, 'this is comment data')
              delComButton.addEventListener('click', (e) => delComment(e, commentData))
              elemCount ++
            }
            })
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
      viewer.innerHTML += `<br>0 results.`
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
      linkBoxes[i].addEventListener('click', (e) => {
        console.log(linkBoxes[i])
        let thisName = linkBoxes[i].attributes.name.value;
        openDetailsColumn(linkBoxes[i], thisName)
      })
    }
  });
};

let tempDetails = '';
const openDetailsColumn = (e, id) => {
  e.preventDefault;
  if (wisDetailsColumn.style.display == 'block' && tempDetails == e.srcElement.attributes['1'].nodeValue) {
    columnToggle(prevThird)
  } else {
  wisDetailsColumnBody.innerHTML = ''
  columnToggle(wisDetailsColumn)
  detailsHeadWrapper.addEventListener('click', backToPrevThird)
  let source;
  if (e.srcElement) {
    source = e.srcElement.attributes['1'].nodeValue;
  } else {
    source = id
  }
  db.collection('wisdomcollection').doc(source).get().then((snapshot) => {
    let doc = snapshot.data()
    createDetails(doc, loggedIn, userId, db, favInfo, snapshot.id, wisDetailsColumnBody)
  })
}
tempDetails = e.srcElement.attributes['1'].nodeValue
console.log(e.srcElement.attributes.name.value)
}




const createDetails = (doc, loggedIn, userId, db, favInfo, id, wisDetailsColumnBody) => {
  // console.log(wisDetailsColumnBody.firstChild)
  // console.log(doc)
  let commentableArray = false;
  let wisbitDetails = document.createElement("div");
  wisbitDetails.className = 'details details-header';
  wisbitDetails.id = 'detailsid'
  if (document.getElementById('detailsid')) document.getElementById('detailsid').innerHTML = '';

  let category = document.createElement('div');
const findThisCat = () => {
  let resultString = '<br>'
  if (doc.category) resultString += doc.category;
  if (doc.subCat) resultString += '/' + doc.subCat;
  return resultString
}
category.innerHTML = findThisCat()
category.style.color = '#008B8B';
wisbitDetails.append(category)

  let wisbitDate = document.createElement("div");
  wisbitDate.innerHTML = `created on ${doc.readableDateSubmitted}`
  wisbitDate.style.color = '#5F9EA0'
    wisbitDetails.append(wisbitDate)


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
      addStar.innerHTML = 'favorite<i class="fa fa-star-o"></i><br><br>';
      addStar.addEventListener('click',(event) => submitFavorite(event, addStar))
      needStar = true;
    }
    if (needStar === false) {
      let favorited = document.createElement("div");
      wisbitDetails.appendChild(favorited);
      favorited.className= `details-favorited`;
      favorited.style.padding ="6px";
      favorited.innerHTML = 'favorited <i class="fa fa-star"></i><br><br>';
      needStar = true;
    }
}

  let wisbitWisdom = document.createElement("div");

    wisbitWisdom.innerHTML = `"${doc.wisdom}"<br><br>`
  wisbitWisdom.className = 'bold-detail'
  // console.log(wisbitWisdom)

  wisbitDetails.append(wisbitWisdom)

  if (doc.originalAuthor) {
    let wisbitOrigAuthDiv = document.createElement("div");
    wisbitOrigAuthDiv.style.color = '#008B8B';
    wisbitOrigAuthDiv.style.textAlign = 'right';
    wisbitOrigAuthDiv.innerHTML = `-${doc.originalAuthor}<br><br>`;
    wisbitDetails.append(wisbitOrigAuthDiv)
    wisbitOrigAuthDiv.className = 'bold-detail'
  }

  let wisbitAuthor = document.createElement("div");
  wisbitAuthor.style.color = '#008B8B';
  wisbitAuthor.style.textAlign = 'right';
  wisbitAuthor.innerHTML = `submitted by ${doc.user}`;
  // wisbitAuthor.className = 'bold-detail'
  wisbitDetails.append(wisbitAuthor);

  let wisbitMoreContext = document.createElement("div");
  if (doc.opContext) wisbitMoreContext.innerHTML = `<h5 class="wisdetails-heading">Wisbit context from the author:</h5>${doc.opContext}<br><br>`
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
  wisbitOpDetails.innerHTML = `<h5 class="wisdetails-heading">Demographic Information of Original Poster:</h4>
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
  wisbitDemo.innerHTML = `<h5 class="wisdetails-heading">Demographic information about this wisbit:</h4>
    country of origin: ${doc.countryOfOrigin}<br>
    cultural origin: ${doc.ethnicity}<br>

    <br>
    <br>`;
  wisbitDetails.append(wisbitDemo);




    let populateComments = document.createElement("div")
    let elemCount = 0;
      doc.wisComments.forEach(element => {
        elemCount ++
        console.log(element)
        populateComments.innerHTML += `<p class="details-displaycomment">${element.commentkey}</p><p class="displaycommentuser">comment by ${element.userkey}<br></p>`
      if (element.commentUser == userId) {
        let delComButton = document.createElement("BUTTON")
        delComButton.name = doc.id;
        delComButton.value = element.commentId
        delComButton.placeholder = element.id;
        delComButton.innerHTML = 'delete comment';
        delComButton.className = 'delcombutton';
        populateComments.append(delComButton)
        let commentData = element
        console.log(commentData, 'this is comment data')
        delComButton.addEventListener('click', (e) => {
          delComment(e, commentData, id);
          doc.wisComments = doc.wisComments.splice(elemCount, 1)
          console.log(doc.wisComments, 'these are the remaining comments')
          createDetails(doc, loggedIn, userId, db, favInfo, id, wisDetailsColumnBody);
          console.log(doc)
        }
        )
      }
    })
      if (!doc.wisComments[0])  {
        populateComments.className = `details-populatecomments`
        
      } else {
        populateComments.className = `details-populatecomments-notlogged`
      }
      let commentsHeader = document.createElement("h5")
      commentsHeader.innerHTML = 'Comments:'
      commentsHeader.className = 'wisdetails-heading'
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
      <input type="text" class="postcommentid" style"visibility: hidden placeholder=${id}><input type="text" class="actualcomment" name="actualcomment"/><button type="submit" class="details-postcommentbutton buttonclass" style="margin-left: 4px" name=${id}>comment</button></form>`;
      populateComments.className = `details-populatecomments`
      populateComments.appendChild(postCommentForm)
      //add document object "submitComment" for comment button function
        // console.log('generating comment buttons')
        let postCommentButton = document.getElementsByClassName("buttonclass");
          for (let i = 0; i < postCommentButton.length; i++) {
            postCommentButton[i].addEventListener('click',(event) => submitComment(event, postCommentButton[i]));
          }
    
    
  }
//add document object "submitComment" for comment button function
}


    const delComment = async (e, commentData, delDetail) => {
      e.preventDefault()
      console.log(e)
      let currentWisbit = '';
      if (e.srcElement.name) currentWisbit = e.srcElement.name.toString('');
      if (delDetail) currentWisbit = delDetail;
      console.log(currentWisbit, e.srcElement.value)
  await db.collection("wisdomcollection").doc(currentWisbit).update({
    'wisComments': firebase.firestore.FieldValue.arrayRemove(commentData)
    })
    let deletedComment = null;
   if (commentData.commentId) deletedComment = document.getElementById(commentData.commentId)
    if (deletedComment != null) {
    deletedComment.nextElementSibling.style.display = 'none';
    deletedComment.style.display = 'none';
    }
  }






const backToPrevThird = (e) => {
  e.preventDefault;
  columnToggle(prevThird)
}


const openReg2 = (e) => {
  e.preventDefault()
  regNav1.style.display = 'none';
  regNav3.style.display = 'none';
  regNav2.style.display = 'block';
  regP3.style.display = 'none';
  regP1.style.display = 'none';
  regP2.style.display = 'block';
}

const openReg1 = (e) => {
  e.preventDefault()
  regNav1.style.display = 'block';
  regNav2.style.display = 'none'
  regP2.style.display = 'none';
  regP1.style.display = 'block';
}

const openReg3 = (e) => {
  e.preventDefault()
  regNav3.style.display = 'block';
  regNav2.style.display = 'none';
  regP2.style.display = 'none';
  regP3.style.display = 'block';
}






//VERIFICATION SECTION

const checkWisInput = (str) => {
  console.log(str.length)
  if (typeof str != 'string') return false;
  if (str.length > 299) {
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

let beforeSubmit = viewer;
makeSubmit.addEventListener('click', () => {
  if (formColumn.style.display == 'none' && promptColumn.style.display == 'none') {
    let toCheck = prevThird;
  openSubmit();
    if (promptColumn.style.display == 'block' && toCheck != promptColumn) beforeSubmit = toCheck;
  } else if (promptColumn.style.display == 'block') {
    columnToggle(beforeSubmit)
  } else if (formColumn.style.display == 'block' && prevThird == formColumn) {
    if (beforeSubmit != formColumn) {
    columnToggle(beforeSubmit)
    } else {
      getNewest()
    }
  } else {
  columnToggle(prevThird);
}
});
headLoginButton.addEventListener('click', openLoginColumn);
getSubmit.addEventListener('click', checkLogin);
promptLogin.addEventListener('click', openLoginColumn);
regButton.addEventListener('click', openReg);
regSubmit.addEventListener('click', regNewUser);
headRegButton.addEventListener('click', openReg);
logoutLink.addEventListener('click', logoutFunction);
accountLink.addEventListener('click', openAccount);
favoritesLink.addEventListener('click', openFavorites);
// calendarLink.addEventListener('click', () => openCalendar(universalDayName));
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
// getPass.addEventListener('input', addAsteriskLogin)
regNext1.addEventListener('click', openReg2);
regBack2.addEventListener('click', openReg1);
regBack3.addEventListener('click', openReg2);
regNext2.addEventListener('click', openReg3);
regBack1.addEventListener('click', (e) => {e.preventDefault()});
howDoes.addEventListener('click', () => columnToggle(howDoesColumn));
howDoesHeadWrapper.addEventListener('click',() => columnToggle(prevThird));
howDoesDash.addEventListener('click', () => {
  if (howDoesColumn.style.display == 'none') {
    columnToggle(howDoesColumn);
  } else {
    columnToggle(prevThird);
  }
})
mobCat.addEventListener('click', () => {
  if (isSidebar) {
    isSidebar = false;
    categoriesColumn.style.display = 'none';
    checkButtons();
  } else {
    isSidebar = true;
  columnToggle('noColumn');
  categoriesColumn.style.display = 'block';
  checkButtons();
  }
})

categoriesColumn.addEventListener('change', () => {
  if (categoriesColumn.style.display == 'block') {
    document.getElementById("top-nav-1-id").className = '.top-nav-1-alt';
  } else {
    if (categoriesColumn.style.display == 'none') {
      document.getElementById("top-nav-1-id").className = '.top-nav-1';
    }
  }
})

searchButton.addEventListener('click', (e) => {
e.preventDefault()
searchRes(searchBar.value)
searchBar.value = '';
})

mSearchButton.addEventListener('click', (e) => {
e.preventDefault()
searchRes(mSearchBar.value)
mSearchBar.value = '';
})

test1.addEventListener('touchstart', () => {
  if (test2.style.display == 'none') {
    test2.style.display = 'block';
  } else {
     test2.style.display = 'none';
  }
})



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
// columnToggle(welcomeColumn)
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

if (window.localStorage.getItem('stayLogged') == 'true') {
  console.log('found login info')
  if (!window.localStorage.getItem('stayLogged'))
  if (window.localStorage.getItem('savedLocalEmail') && window.localStorage.getItem('savedLocalPass')) {
    console.log('working')
    getEmail.value = window.localStorage.getItem('savedLocalEmail');
    getPass.value = window.localStorage.getItem('savedLocalPass');
    // getPass.name = window.localStorage.getItem('savedLocalPass');
    // for (let i = getPass.name.length; i > 0; i--) {
    //   getPass.value += '*'
    // }
  }
  if (window.localStorage.getItem('stayLogged') == 'true')
  // stayLogged.checked = true;
  // saveLoginInfo.checked = true;
  stayLogged.checked = true;
  saveLoginInfo.checked = true;
  if (window.localStorage.getItem('savedLocalEmail') && window.localStorage.getItem('savedLocalPass')) {
    console.log('working')
    getEmail.value = window.localStorage.getItem('savedLocalEmail');
    getPass.value = window.localStorage.getItem('savedLocalPass');
}
checkLogin()
}

const forgotPassFunction = (e) => {
  e.preventDefault()
  console.log('reset check');
  firebase.auth().sendPasswordResetEmail(resEmail.value);
  resetForm.style.display = 'none';
  let resetMsg = document.getElementById("resetmsg");
  resetMsg.innerHTML = 'Reset link sent. Check your email and follow the instructions.'
  resetMsg.style.color = 'blue'

}


// const forgotPassFunction = () => {
//   let displayName = saveduser;
//   let email = getEmail.value;
//   const userEmail = getEmail.value;
//   firebase.auth().generatePasswordResetLink(userEmail)
//     .then((link) => {
//       // Construct password reset email template, embed the link and send
//       // using custom SMTP server.
//       return sendCustomPasswordResetEmail(email, displayName, link);
//     })
//     .catch((error) => {
//       // Some error occurred.
//     });
// }

// // Admin SDK API to generate the password reset link.
forgotPass.addEventListener('click',() => {
  columnToggle(forgotColumn)
  if (getEmail.value) resEmail.value = getEmail.value
})
sendPass.addEventListener('click', forgotPassFunction)

const calBackFunction = () => {
  dateOffset--
  getCal()
}

const calNextFunction = () => {
  dateOffset++
  getCal()
}


calBack.addEventListener('click', calBackFunction)
calNext.addEventListener('click', calNextFunction)
calEdit.addEventListener('click', () => openCalendar(universalDayName))

console.log(`Hello fellow programmer! Welcome to my source code. Beware that this was meant to be a student project. When I started building Wiser, I barely knew what an array or object was. Bear that in mind when you explore and scrutinize my code. There are many, many things I will reorganize and restructure when I create verson 2 of this site. If you are a recruiter or senior engineer and you like my site, I am available for hire! Contact me: bensultan1985@gmail.com`)

// console.log(window.innerWidth)
// if (window.innerWidth >= '741') {
//   document.getElementById('cat-row-mob').style.display = 'none';
//   document.getElementById('cat-row').style.display = 'grid';
// } else {
//   document.getElementById('cat-row-mob').style.display = 'grid';
//   document.getElementById('cat-row').style.display = 'none';
// }

// window.addEventListener('resize', () => {
//   console.log(window.innerWidth)
// })

mGuideButton.addEventListener('click', () => {
  if (howDoesColumn.style.display == 'none') {
  columnToggle(howDoesColumn);
  } else {
    columnToggle(prevThird)
  }
})

mCatButton.addEventListener('click', () => {
  if (mCategoriesColumn.style.display == 'none') {
  columnToggle(mCategoriesColumn);
  // checkButtons()
  } else {
    columnToggle(prevThird)
  }
})

mCreateButton.addEventListener('click', () => {
  if (formColumn.style.display == 'none' && promptColumn.style.display == 'none') {
    let toCheck = prevThird;
  openSubmit();
    if (promptColumn.style.display == 'block' && toCheck != promptColumn) beforeSubmit = toCheck;
  } else if (promptColumn.style.display == 'block') {
    columnToggle(beforeSubmit)
  } else if (formColumn.style.display == 'block' && prevThird == formColumn) {
    if (beforeSubmit != formColumn) {
    columnToggle(beforeSubmit)
    } else {
      getNewest()
    }
  } else {
  columnToggle(prevThird);
}
});

document.getElementById('top-nav-6-id').addEventListener('click', () => {
  if (dashboardColumn.style.display == 'none') {
    openDashboard();
  } else {
    console.log(prevThird)
    if (prevThird != dashboardColumn) {
      columnToggle(prevThird);
  } else {
    columnToggle(viewer)
  }
  }
})

let cycle = false;

window.addEventListener('resize', () => {
  if (cycle == true) {
  let isCat = false;
  if (window.innerWidth >= 740) {
    if (mCategoriesColumn.style.display == 'block') {
      isCat = true;
      mCategoriesColumn.style.display = 'none';
      console.log(isCat)
      isSidebar = true;
      columnToggle('noColumn');
      categoriesColumn.style.display = 'block';
      columnToggle(prevThird)
    }
  }
  cycle = false;
}
})

window.addEventListener('resize', () => {
  if (!cycle) {
    let isCat = false;
  if (window.innerWidth < 740) {
    if (categoriesColumn.style.display == 'block') {
      isCat = true;
    categoriesColumn.style.display = 'none';
    isSidebar = true;
    columnToggle(mCategoriesColumn)
  }
  }
  cycle = true;}
})

document.body.addEventListener('touchmove', function(e){ 
  document.getElementsByTagName('body')[0]. style .height = "100vh";
  document.getElementsByTagName('body')[0]. style. overflow = "hidden";
});






// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
window.addEventListener('keydown', preventDefaultForScrollKeys, false);