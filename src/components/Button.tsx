interface ButtonProps {
	children: string;
	onClickFunc: () => void;
	colorClass: string;
}

export function Button({ children, onClickFunc, colorClass }: ButtonProps) {
	return (
		<button className={`btn btn__large ${colorClass}`} onClick={onClickFunc}>
			{children}
		</button>
	);
}
