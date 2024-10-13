interface ButtonProps {
	text: string;
	onClickFunc: () => void;
	className: string;
}

export function Button({ text, onClickFunc, className }: ButtonProps) {
	return (
		<button className={className} onClick={onClickFunc}>
			{text}
		</button>
	);
}
