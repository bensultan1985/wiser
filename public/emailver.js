/*The domainName has a maximum length of 255 characters.
The domainName is comprised of a sequence of hostNames separated by a dot, each hostName having a maximum length of 63 characters. The hostName follows the following rules:

uppercase and lowercase Latin letters A to Z and a to z;
digits 0 to 9, provided that top-level domain names are not all-numeric;
hyphen -, provided that it is not the first or last character.*/



export function isValidEmailAddress(str) {
  if (hasValidComment(str)) str = hasValidComment(str);
  let strArray = str.split('@')
  if (strArray.length < 2) {
    return false;
  }
  if (isValidLocalPart(strArray[0]) && isValidDomainName(strArray[1])) return true;
  return false;
}


//LOCAL PART VERIFICATION:

function isValidLocalPart(str) {
  if (str.length > 64) return false;
  if (str[0] === '\"' && str[str.length-1] === '\"') {
    return quotedLocalPart(str.substring(1, str.length -1));
  } else {
    return localPart(str);
  };
};

function quotedLocalPart(str) {
  if (!isAllowedSpecialChar(str)) return false;
  for (let i = 1; i < str.length -1; i++) {
    if (!isNum(str[i]) && !quotedCharCheck(str[i]) && !isAlpha(str[i])) {
      return false;
    };
  };
  return true;
};

function localPart(str) {
  if (!dotCheck(str)) return false;
  for (let i = 0; i < str.length; i++) {
    if (!isNum(str.charAt(i)) && !isChar(str.charAt(i)) && !isAlpha(str.charAt(i))) {
      return false;
    };
  };
  return true;
};

function isNum(char) {
  if (char >= "0" && char <= "9") return true;
  return false;
};


function isChar(char) {
  let validCharArray = ['!', '#', '$', '%', '&', '*', '+', '-', '/', '=', '?', '^', '_', '`', '{', '|', '}', '~', '.']
  for (let i = 0; i < validCharArray.length; i++) {
    if (char === validCharArray[i]) return true;
  };
  return false;
};

function quotedCharCheck(char) {
  let validCharArray = ['!', '#', '$', '%', '&', '*', '+', '-', '/', '=', '?', '^', '_', '`', '{', '|', '}', '~', '.', '(', ')', ',', ':', ';', '<', '>', '@', '[', ']', ' ', '\\', '\"']
  for (let i = 0; i < validCharArray.length; i++) {
    if (char === validCharArray[i]) return true;
  };
  return false;
};

function isAlpha(char) {
  let uppercaseLocalPart = char.toUpperCase()
  if (uppercaseLocalPart >= "A" && uppercaseLocalPart <= "Z") return true;
  return false;
};

function dotCheck(str) {
  if (str[0] === '.' || str[str.length - 1] === '.') return false;
  if (!doubleDotCheck(str)) return false;
  return true;
};

function doubleDotCheck(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === '.' && str[i+1] === '.') return false;
  };
  return true;
};

function isAllowedSpecialChar(str) {
  if (!isAllowedQuoteOrSlash(str)) return false;
  if (!isAllowedSpecialCharPair(str)) return false;
  return true;
}

function isAllowedQuoteOrSlash(str) {
  for (let i = 1; i < str.length; i++) {
    if (str[i] === '\"') {
      if (str[i-1] !== '\\') return false;
    }
    if (str[i] === '\\') {
      if ((str[i-1] !== '\\') && (str[i+1] !=='\\') && (str[i+1] !== '\"')) return false;
      }
  };
  return true;
};

function isAllowedSpecialCharPair(str) {
  let isPair = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '\"') {isPair = !isPair;};
    if (str[i] === '\\') {isPair = !isPair;};
  }
  return isPair;
}

//DOMAIN NAME VERIFICATION:

function isValidDomainName(domainName) {
  if (domainName.length > '255') return false; // checks domain name length
  if (domainName[0] === '[' && domainName[domainName.length-1] === ']') {
    let domainNameBracketsRemoved = domainName.substring(1, domainName.length-1);
    if (isIP(domainNameBracketsRemoved)) return true;
    return false;
  } else {
    if (isValidStr(domainName)) return true;
    return false;
  }
}

function isValidStr(str) { //still need to add hostname verification
  if (str[0] === '.' || str[str.length-1] === ".") return false;
  let strArray = str.split('.');
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === '') return false; //checks for two dots in a row
    if (strArray[i].length-1 > '63') return false;
    for (let j = 0; j < str[i].length; j++) {
      if (!isAlpha(strArray[i,j]) && !isDigits(strArray[i,j])) return false;
    }
  }
  return true;
}

function isValidHostName() {

}


function isDigits(char) {
    if (char >= "0" && char <= "9") return true;
  }

function isValidTopLevel(str) {
  let strArray = str.split('.');
  let finalArrayPart = strArray[strArray.length-1];
  for (let i = 0; i < finalArrayPart.length; i++) {
    if (isAlpha(finalArrayPart[i])) {
      return false;
    }
  }
  return true;
}

function isIP(str) {
  let arrayParts = str.split('.')
  let finalArrayPart = arrayParts[arrayParts.length];
  if (arrayParts.length !== 4) return false;
  for (let i = 0; i < arrayParts.length; i++) {
    if ((arrayParts[i] >= '0' && arrayParts[i] <= '255') && (arrayParts[i].length <= 3)) {
      continue;
    }
    return false;
  }
  return true;
}

function hasValidComment(str) {
  let openComment = [];
  let closeComment = [];
  let difference = ''
  let deleted = []
  let strSansComment = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '\(') {openComment.push(i);
}
    if (str[i] === '\)') {closeComment.push(i);
}
  }
   for (let i = 0; i < openComment.length; i++) {
      if (closeComment[i] > openComment[i]) {
        difference = closeComment[i] - openComment[i];
        deleted = deleted + strSansComment.splice(openComment[i], difference+1);
        openComment[i+1] = (openComment[i+1]) - (difference +1);
        closeComment[i+1] = (closeComment[i+1]) - (difference +1);//+1 makes closeComment inclusive
      }
      str = strSansComment.join('')
  }
  console.log(str)
  return str;
}

export default isValidEmailAddress;