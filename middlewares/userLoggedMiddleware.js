const db = require('../database/models');

async function userLoggedMiddleware (req, res, next) {
	const emailInCookie = req.cookies.userEmail;
	if (emailInCookie) {
		const userSearch = await db.User.findOne ({where: {email: emailInCookie}})
		const buisnessSearch = await db.Restaurant.findOne ({where: {email: emailInCookie}})
		
			if (userSearch == null) {
				req.session.userLogged = buisnessSearch;
				res.locals.userLogged = req.session.userLogged;	
				console.log('Estoy logeado por una cookie de NEGOCIO');
			} else {
				req.session.userLogged = userSearch;
				res.locals.userLogged = req.session.userLogged;	
				console.log('Estoy logeado por una cookie');
			}
		
	} else if (req.session.userLogged) {
		res.locals.userLogged = req.session.userLogged;
		console.log('No hay cookie pero reconozco la session');
	} else {
		console.log('no hay sesion');
	}
	next();
}
module.exports = userLoggedMiddleware;