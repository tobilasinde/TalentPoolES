module.exports = {
	employerSignIn: (req, res) => {
		res.render('Pages/employer-signin', { pageName: 'Employer Login' });
	},

	employerSignup: (req, res) => {
		res.render('Pages/employer-sign-up', {
			pageName: 'Employer Signup'
		});
	},
	verification: (req, res) => {
		res.render('Pages/employer-type', {
			pageName: 'Employer Signup'
		});
	}
};
