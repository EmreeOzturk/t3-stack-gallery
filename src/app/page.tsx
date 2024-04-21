export const dynamic = "force-dynamic";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Images from "./_components/Images";


export default async function HomePage() {

  return (
    <main className="flex flex-col">
      <div className="p-6 flex flex-wrap gap-4 justify-center">
        <SignedOut>
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Welcome to T3 Gallery</h1>
            <p className="text-lg">Please sign in to view images</p>
          </div>
        </SignedOut>
        <SignedIn>
          <Images />
        </SignedIn>
      </div>
    </main>
  );
}
