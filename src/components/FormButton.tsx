interface FormButtonProps {
	children: string;
}

export function FormButton({ children }: FormButtonProps) {
	return (
		<button className="btn btn__large btn__secondary" type="submit">
			{children}
		</button>
	);
}
