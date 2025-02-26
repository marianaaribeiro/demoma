import Button, { ButtonProps } from '@mui/material/Button';
import clsx from 'clsx';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

type PurchaseButtonProps = ButtonProps & {
	className?: string;
};

/**
 * The purchase button.
 */
function PurchaseButton(props: PurchaseButtonProps) {
	const {
		className = '',
		children = (
			<>
				<span>Purchase</span>
				<span className="flex items-center space-x-4">
					<span>Project M.A.</span>
				</span>
			</>
		),
		...rest
	} = props;

	return (
		<Button
			component="a"
			href="#"
			target="_blank"
			rel="noreferrer noopener"
			role="button"
			className={clsx('space-x-4 whitespace-nowrap', className)}
			variant="contained"
			color="secondary"
			startIcon={<FuseSvgIcon size={16}>heroicons-outline:shopping-cart</FuseSvgIcon>}
			{...rest}
		>
			{children}
		</Button>
	);
}

export default PurchaseButton;
