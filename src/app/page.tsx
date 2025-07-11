import fs from 'fs';
// import Image from 'next/image';
import Link from 'next/link';
import path from 'path';

export default async function Home() {
  const dir = path.join(process.cwd(), 'src', 'content');
  const files = fs.readdirSync(dir);

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '');
      const mod = await import(`../content/${slug}.mdx`);
      return { slug, metadata: mod.metadata };
    }),
  );

  return (
    <div className='w-full flex flex-col items-center px-4 py-8'>
      <div className='max-w-6xl w-full grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 grid'>
        {posts.map((post) => (
          <div key={post.slug} className='border2 rounded-lg shadow-md border-black/10'>
            <div className='p-4'>
              <h2 className='text-2xl font-bold hd'>
                <Link href={`/posts/${post.slug}`}>{post.metadata.title}</Link>
              </h2>
              <div className='text-gray-600 mb-4'>{post.metadata.description}</div>
              <Link
                href={`/posts/${post.slug}`}
                className='text-blue-500 hover:underline'>
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
