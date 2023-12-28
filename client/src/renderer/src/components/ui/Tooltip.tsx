import { Tooltip } from '@chakra-ui/react'

interface Props {
  title: string
  children?: React.ReactNode
  onClick?: () => void
}

export const TooltipComponent = (props: Props): JSX.Element => {
  return (
    <Tooltip placement="bottom" label={props.title} onClick={props.onClick}>
      <button className="bg-[#ffffff10] p-2 flex flex-row rounded-full transition-colors duration-150 hover:bg-blue-600 hover:text-white shadow-md">
        {props.children}
      </button>
    </Tooltip>
  )
}
