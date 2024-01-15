import { FormLabel, FormLabelProps } from '@chakra-ui/react'

interface Props extends FormLabelProps {}

export const Label = ({ children, ...props }: Props): JSX.Element => (
  <FormLabel {...props}>{children}</FormLabel>
)
