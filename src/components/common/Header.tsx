import Link from 'next/link';
import Image from 'next/image';
import { BLOG_TITLE } from '@/constants/common';

const Header = () => (
  <header className="bg-white sticky top-0">
    <nav className="mx-auto flex max-w-screen-xl items-center justify-center py-6 ">
      <div className="flex flex-1">
        <span className="sr-only">{BLOG_TITLE}</span>
        <Link href={'/'} className="-m-1.5 p-1.5">
          {/* <Image
            src={'/img/logos/mark.svg?color=indigo&shade=600'}
            width={'50'}
            height={'20'}
            alt="로고"
          /> */}
          <h1 className="text-3xl font-bold">Plog</h1>
        </Link>
      </div>
      <div className="flex gap-x-8">
        <Link href={'/posts'}>Posts</Link>
        <Link href={'/about'}>about</Link>
        <Link href={'/contact'}>contact</Link>
      </div>
    </nav>
  </header>
);

export default Header;
