import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

/**
 * Theme Schemes Doc
 */
function ThemeSchemesDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				Theme Schemes
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				The M.A. LDA uses material-ui's theming by default. You can create theme color schemes with defining
				theme configuration objects.
			</Typography>

			<Typography
				className="text-2xl mt-20 mb-10 font-700"
				variant="h5"
			>
				Configuration
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				For the configuration options checkout{' '}
				<a
					href="https://mui.com/customization/theming"
					target="_blank"
					rel="noopener noreferrer"
				>
					Material UI's theme configuration options.
				</a>
			</Typography>
			<Typography
				className="mb-16"
				component="p"
			>
				Theme configurations are located at <code>src/configs/themesConfig.ts</code> file.
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx"
			>
				{`
				/**
				* The themesConfig object is a configuration object for the color themes of the Fuse application.
				*/
				export const themesConfig: FuseThemesType = {
					default: {
						palette: {
							mode: 'light',
							divider: '#D6D6D6',
						text: {
							primary: '#212121',
							secondary: '#5F6368'
						},
						common: {
							black: '#000000',
							white: '#FFFFFF'
						},
						primary: {
							light: '#536D89',
							main: '#0A74DA',
							dark: '#00418A',
							contrastText: '#FFFFFF'
						},
						secondary: {
							light: '#6BC9F7',
							main: '#00A4EF',
							dark: '#0078D7',
							contrastText: '#FFFFFF'
						},
						background: {
							paper: '#F4F4F4',
							default: '#E8E8E8'
						},
						error: {
							light: '#FFCDD2',
							main: '#D32F2F',
							dark: '#B71C1C',
							contrastText: '#FFFFFF'
							}
						}
					},
				}`}
			</FuseHighlight>
		</>
	);
}

export default ThemeSchemesDoc;
