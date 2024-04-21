import {  SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
const Navbar = () => {
  return (
    <header className="w-full flex items-center p-4 font-semibold text-3xl border-b">
      <nav className="flex items-center w-full justify-between max-w-7xl m-auto">
        <div>Gallery</div>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Navbar