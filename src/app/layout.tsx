import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import { dark, neobrutalism } from '@clerk/themes';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider 
    appearance={{
      UserButton:{
        baseTheme:dark
      }
    }}
    
    >


    <html lang="en">
      
      <body style={{backgroundColor:'whitesmoke'}} className={inter.className}>

        <div>
          <div className='w-full '>
            <nav className='w-full p-5 bg-black flex justify-between'>
              <div className='flex'>
                <img style={{height:"50px"}} src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />


              <h2 className='text-xl text-white ml-5 p-3'>TAILWIND BLOGGER</h2>
              </div>
              <div className='p-2'>

              <UserButton    afterSignOutUrl="/" />
              </div>
             
            </nav>
          </div>

        {children}
        </div>
        
        
        </body>
    </html>
    </ClerkProvider>
  )
}
