import { db } from "~/server/db";
export const dynamic = "force-dynamic";
import { SignedIn, SignedOut } from "@clerk/nextjs";


export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  });
  console.log(images)
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
          {[...images, ...images].map((image) => (
            <div
              key={image.id}
              className="w-1/2 sm:w-1/3 md:w-1/5 p-4 "
            >
              <img
                src={image.url}
                alt={image.name}
                className="w-full h-auto rounded-xl"
              />
              {image.id}
            </div>
          ))}
        </SignedIn>
      </div>
    </main>
  );
}
