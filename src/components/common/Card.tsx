import Link from 'next/link';

const Card = () => {
  return (
    <section className="drop-shadow-md border-card-round bg-sky-200 h-80 ">
      <Link href={'/'}>
        <div className="h-[11rem] rounded-t-2xl"></div>
        <article className="h-[9rem] bg-white rounded-b-2xl p-5 flex flex-col">
          <span className="text-sm text-gray-500">Next</span>
          <h3 className="flex-grow font-bold text-lg">
            Next로 정적 페이지 만들기
          </h3>
          <span className="text-gray-500 text-sm">2023.03.30</span>
        </article>
      </Link>
    </section>
  );
};

export default Card;
