import Typography from '@mui/material/Typography';
import Link from '@fuse/core/Link';

/**
 * Theme Layouts Doc
 * This document provides information on how to use the theme layouts.
 */
function ThemeLayoutsDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				Theme Layouts
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				Fuse comes with a variety of different Theme Layouts which you can see and try them from the
				configuration sidebar (Click on the animated, spinning cog button from the right side of your screen).
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				These layouts are accessible from <code>/src/components/theme-layouts</code> directory and you can
				modify them however you like. Each layout has its own options. Those options allow you to configure the
				layout elements such as Toolbar, Footer, and Navbar.
			</Typography>

			<Typography
				className="text-2xl mt-20 mb-10 font-700"
				variant="h5"
			>
				File Structure
			</Typography>

			<Typography
				className="my-16"
				component="div"
			>
				Inside the <code>/src/components/theme-layouts</code> directory
				<ul className="my-8 list-disc ml-16">
					<li className="mb-8">
						<b>/layout-1</b> :
						<ul className="my-8 ml-12">
							<li className="mb-8">
								<b>/components</b> : Contains Layout elements such as Toolbar, Footer, and Navbar.
							</li>
							<li className="mb-8">
								<b>/Layout1.tsx</b> : Layout 1 component
							</li>
							<li className="mb-8">
								<b>/Layout1.config.tsx</b> : Contains title, default configs and form options of the
								layout.
							</li>
						</ul>
					</li>
					<li className="mb-8">
						<b>/components</b> : Each layouts shares the components of this directory
					</li>
					<li className="mb-8">
						<b>/themeLayoutConfigs.tsx</b> : Imports all layout configs.
					</li>
					<li className="mb-8">
						<b>/themeLayouts.tsx</b> : Imports all layout components.
					</li>
					<li className="mb-8">
						<b>/layout-2</b>
					</li>
					<li className="mb-8">
						<b>/layout-3</b>
					</li>
				</ul>
			</Typography>

			<Typography
				className="text-2xl mt-20 mb-10 font-700"
				variant="h5"
			>
				Configuring
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				M.A. LDA has a powerful layout system which allows you to configure and use a different layout per
				route.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				Each route can have its own layout configuration meaning that it's very easy to have pages like login
				page where there isn't any toolbar or navbar showing, without leaving the M.A. LDA.
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				You can get more information about route configuration and its usage from{' '}
				<Link to="/documentation/configuration/routing">the Routing documentation page</Link>.
			</Typography>
		</>
	);
}

export default ThemeLayoutsDoc;
