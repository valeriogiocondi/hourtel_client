import Superagent from 'superagent';
import URLs from '../const/urls.js';
import Cookies from './cookies.js';

const DAYS_COOKIES_EXPIRE = 365;

let fetchLogin = (email, password, callback) => {

  let url;
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (
    email !== '' &&
    password !== ''
  ) {

    if (
      re.test(String(email).toLowerCase())
    ) {

      url = URLs.server.login;

      Superagent
      .post(url)
      .send({
        email: email,
        password: password
      })
      .set('Accept', 'application/json')
      .then(res => {
      
        Cookies.add('user_info', JSON.stringify(res.body.user_info), DAYS_COOKIES_EXPIRE);
        callback();

      }) .catch(err => {

        // err.message, err.response
      });

    } else
      alert("Inserire un'email valida");
  
  } else
    alert("Compila tutti i campi");

};

let checkLogin = () => {

	return Cookies.get("user_info");
}

let logout = () => {

	return Cookies.delete("user_info");
}

let Login = {

	fetch: fetchLogin,
	check: checkLogin,
	logout: logout

};

export default Login;