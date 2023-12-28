interface Props {
  children: React.ReactNode
}

export const IconBox = ({ children }: Props): JSX.Element => {
  return (
    <div className="flex flex-row items-center gap-4">
      <button className="w-[2.2rem] h-[2.2rem] rounded-full flex justify-center items-center border-[2px] shadow border-[#ccc]">
        {children}
      </button>
    </div>
  )
}
