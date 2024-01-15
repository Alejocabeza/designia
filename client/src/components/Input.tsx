import { Input as InputChakra, InputProps } from '@chakra-ui/react'

interface Props extends InputProps {}

export const Input = ({ ...props }: Props): JSX.Element => <InputChakra {...props} />
