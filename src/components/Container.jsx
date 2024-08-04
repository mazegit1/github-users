import React, { Children } from 'react'

const Container = ({children}) => {
  return (
   <>
   <div className='max-w-[1240px] mx-auto w-full'>{children}</div>
   </>
  )
}

export default Container