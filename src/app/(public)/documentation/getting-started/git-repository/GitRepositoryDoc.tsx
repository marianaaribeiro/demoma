import Typography from '@mui/material/Typography';

/**
 * Git Repository Doc
 * This document provides information on how to get the M.A. LDA's Github repository.
 */
function GitRepositoryDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				Github Repository
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				You can also check out M.A. LDA from the Github repository. M.A. LDA's Github repository is private,
				you can get an invitation by filling the{' '}
				<a
					href="http://support.withinpixels.com/github"
					target="_blank"
					rel="noreferrer noopener"
				>
					invitation form
				</a>
				.
			</Typography>
		</>
	);
}

export default GitRepositoryDoc;
