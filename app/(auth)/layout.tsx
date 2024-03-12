import React from 'react'

export const Layout= ({children}:{children: React.ReactNode}) => {
  return (
    <main className='auth'>{children}</main>
  )
}
export default Layout