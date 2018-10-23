let addCookie = (cookieName, cookieValue, days) => {

  if (days) {

    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  
  } else
  	var expires = "";

  document.cookie = cookieName+"="+cookieValue+expires+"; path=/";
}

let getCookie = (cookieName) => {

  var name = cookieName + "=";
  var arrayCookie = document.cookie.split(';');

  for(var i=0; i<arrayCookie.length; i++) {

    var singleCookie = arrayCookie[i];

    while (singleCookie.charAt(0)==' ') {

        singleCookie = singleCookie.substring(1);
    }

    if (singleCookie.indexOf(name) == 0) {

        return singleCookie.substring(name.length, singleCookie.length);
    }

  }

  return "";
} 

let editCookie = (cookieName, cookieValue, days) => {

  var date = new Date();

  date.setTime(date.getTime() + (days*24*60*60*1000));

  var dateExpires = "dateExpires="+date.toUTCString();

	if (getCookie(cookieName)) {

	  var arrayCookie = document.cookie.split(';');
	  var singleCookie = "";

	  for (var i=0; i<arrayCookie.length; i++) {

	    singleCookie = arrayCookie[i].split("=");

	    if (singleCookie[0] == cookieName)
  			document.cookie = cookieName + "=" + cookieValue + "; " + dateExpires+ "; path=/";
		}

	} 
	else
		addCookie(cookieName, cookieValue, days);
} 

let deleteCookie = (name) => {
    addCookie(name,"",-1);
}

let deleteAllCookie = () => {

  var arrayCookie = document.cookie.split(';');
  var singleCookie;

  for (var i=0; i<arrayCookie.length; i++) {
  	
  	singleCookie = document.cookie.split(';');

		addCookie(singleCookie[0], "", -1);

  }
}

let Cookies = {
	add: addCookie,
	get: getCookie,
	edit: editCookie,
	delete: deleteCookie,
	deleteAll: deleteAllCookie
};

export default Cookies;