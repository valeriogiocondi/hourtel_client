let urlServer = 'http://localhost:3001/';
let urlHotelsByMap = urlServer+'lista-hotel-by-map/';
let urlHotelProfile = urlServer+'hotel/';
let urlLogin = urlServer+'login/';
let urlLogout = urlServer+'logout/';

let URLs = {

	server: {
		main: urlServer,
		login: urlLogin,
		logout: urlLogout,
		hotelsByMap: urlHotelsByMap,
		hotelProfile: urlHotelProfile
	}
};

module.exports = URLs;