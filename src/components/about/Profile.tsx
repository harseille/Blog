import Image from 'next/image';

const Profile = () => {
  return (
    <section>
      <div>
        <Image
          src={'https://avatars.githubusercontent.com/u/85827017'}
          alt="프로필 사진"
          width={200}
          height={200}
        />
      </div>
    </section>
  );
};

export default Profile;
