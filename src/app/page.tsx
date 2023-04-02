import Card from '@/components/common/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-screen">
      <section className="main-section_wrap">
        <header className="carousel-card_header">
          <h2 className="text-2xl font-bold">추천 아티클</h2>
          <div className="flex gap-2">
            <button>left</button>
            <button>right</button>
          </div>
        </header>
        <div className="bg-slate-500 h-[24rem] border-card-round"></div>
      </section>
      <section className="main-section_wrap">
        <header className="carousel-card_header">
          <h2 className="text-2xl font-bold">최신 아티클</h2>
          <div className="flex gap-2">
            <button>left</button>
            <button>right</button>
          </div>
        </header>
        <ul className="flex flex-wrap justify-start gap-6">
          <li className="w-[calc(33.3333%-1rem)]">
            <Card />
          </li>
          <li className="w-[calc(33.3333%-1rem)]">
            <Card />
          </li>
          <li className="w-[calc(33.3333%-1rem)]">
            <Card />
          </li>
          <li className="w-[calc(33.3333%-1rem)]">
            <Card />
          </li>
          <li className="w-[calc(33.3333%-1rem)]">
            <Card />
          </li>
        </ul>
      </section>
    </main>
  );
}
