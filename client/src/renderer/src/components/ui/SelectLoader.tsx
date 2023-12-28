import Select, { Props } from 'react-select'

export const SelectLoader = (props: Props): JSX.Element => {
  return <Select className="w-full h-10" {...props} />
}
