export default function Footer() {
  return (
    <footer className='bg-gray-100 py-4'>
      <div className='max-w-6xl mx-auto px-4'>
        <p className='text-center text-sm'>
          &copy; {new Date().getFullYear()} MDX Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
