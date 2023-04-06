import Image from 'next/image';
import Link from 'next/link';

const Profile = () => {
  const profileInfo = [
    {
      label: 'name',
      value: '박 준하',
      icon: '🪪',
    },
    {
      label: 'github',
      value: <Link href={'https://github.com/harseille'}>@harseille</Link>,
      icon: '🧑‍💻',
    },
    {
      label: 'email',
      value: 'joonhabaak@gmail.com',
      icon: '✉️',
    },
  ];
  const ProfileInfoList = profileInfo.map(({ label, value, icon }) => {
    return (
      <li key={label} className="flex flex-col gap-2">
        <div>
          <span className="mr-2">{icon}</span>
          <span className="mr-4">{label}:</span>
          <span>{value}</span>
        </div>
      </li>
    );
  });

  return (
    <section>
      <div className="flex items-center">
        <Image
          src={'https://avatars.githubusercontent.com/u/85827017'}
          alt="프로필 사진"
          width={200}
          height={200}
          className="border rounded-full"
        />
        <div className="ml-6">
          <ul>{ProfileInfoList}</ul>
          <button>Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
