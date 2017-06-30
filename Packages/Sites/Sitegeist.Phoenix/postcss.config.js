module.exports = {
	plugins: [
		require('postcss-import')(),
		require('postcss-css-variables')({
			variables: {
				//
				// Color definitions from the styleguide
				//
				'--black': '#000000',
				'--white': '#ffffff',
				'--brandColorPrimary': '#00ADEE',
				'--brandColorSecondary': '#26224C',

				'--grayDarker': '#141414',
				'--grayDark': '#222',
				'--grayMedium': '#323232',
				'--grayLight': '#3f3f3f',

				'--textOnWhite': '#252525',
				'--textOnGray': '#fff',
				'--textSubtle': '#5b5b5b'
			}
		}),
		require('postcss-map')({
			maps: [{
				media: {
					'screen-sm': 'only screen and (max-width: 767px)'
				}
			}]
		}),
		require('precss'),
		require('autoprefixer')
	]
};
