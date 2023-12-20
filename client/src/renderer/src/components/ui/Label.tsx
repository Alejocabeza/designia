interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = ({ children, ...props }: Props): JSX.Element => (
  <label className="block text-sm font-medium leading-6 text-gray-900" {...props}>
    {children}
  </label>
)
