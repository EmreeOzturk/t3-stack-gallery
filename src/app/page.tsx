import { db } from "~/server/db";

const mockUrls = [
  'https://utfs.io/f/39f5dc4b-ccae-4f1c-8c89-5583a78ac42d-7x4rdk.jpg',
  'https://utfs.io/f/5ba3f427-14c3-48ae-b048-9ecf9a21ddbb-c1jyl0.jpg',
  'https://utfs.io/f/8210bdac-2669-460e-9e40-79def1653c0b-7gczd4.jpg',
  'https://utfs.io/f/cc33ac62-4ee3-4525-9ea3-7a1ce359e9aa-r2cmb.jpg',
  'https://utfs.io/f/5ec7123c-7137-4eaa-ad04-382905ba1e28-66cff2.jpg',
  'https://utfs.io/f/3290efb1-6769-4366-a5f9-7de13d6ef6c0-axi32m.jpg',
  'https://utfs.io/f/c1585256-e653-4e71-bfab-359a36604e96-lnbgsf.jpg',
]

const mockData = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Title ${i}`,
  url: mockUrls[i % mockUrls.length],
}))



export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts)
  return (
    <main className="flex flex-col">
      <div className="p-6 flex flex-wrap gap-4 justify-center">
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-1/2 sm:w-1/3 md:w-1/5 p-4 "
          >
            {post.name}
          </div>
        ))}
        {mockData.map((item) => (
          <div
            key={item.id}
            className="w-1/2 sm:w-1/3 md:w-1/5 p-4 "
          >
            <img src={item.url} className="rounded-xl" />
          </div>
        ))}

      </div>
    </main>
  );
}
