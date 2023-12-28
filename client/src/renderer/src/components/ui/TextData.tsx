interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  handleOptionInfo?: () => string
}

export const TextData = ({ ...props }: Props): JSX.Element => {
  return <p {...props}></p>
}
