interface DescriptionProps {
	text: string;
}

export function Description({ text }: DescriptionProps) {
	return <h3 className="description">{text}</h3>;
}
