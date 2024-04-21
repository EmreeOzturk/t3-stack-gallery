"use client"

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { UploadButton } from '~/utils/uploadthing'
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const router = useRouter()
  return (
    <header className="w-full flex items-center p-4 font-semibold text-3xl border-b">
      <nav className="flex items-center w-full justify-between max-w-7xl m-auto">
        <div>Gallery</div>
        <div className='flex gap-4 items-center justify-center '>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UploadButton endpoint='imageUploader' className='text-lg' onClientUploadComplete={
              () => {
                router.refresh()
              }
            } />
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Navbar