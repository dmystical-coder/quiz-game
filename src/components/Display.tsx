interface DisplayProps {
  question: string;
}

const Display = ({question}: DisplayProps) => {
return <h2>{question}</h2>
}

export default Display;