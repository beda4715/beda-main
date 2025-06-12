import Link from 'next/link';

export default function Header() {
  return (
    <header className='sticky top-0 z-10 bg-white/30 backdrop-blur-xl h-[70px] items-center flex px-4 border-b border-black/10'>
      <Link href='/' className='text-2xl font-bold'>
        MDX Blog
      </Link>
    </header>
  );
}
