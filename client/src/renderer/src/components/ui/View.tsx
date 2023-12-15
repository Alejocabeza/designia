import React from 'react'

export const View = ({ children, ...props }): React.ReactElement => {
  return (
    <div className="flex justify-center items-center h-screen w-screen" {...props}>
      {children}
    </div>
  )
}
