import Image from 'next/image';
import { FaTwitter } from 'react-icons/fa';
import myIconImage from '@/static-image/my-icon.png';
import {
  introduction,
  profile,
  profImage,
  twitterLink,
  name,
} from '@/components/organisms/profile/Profile.css';

const Profile = () => {
  return (
    <div className={profile}>
      <Image
        className={profImage}
        src={myIconImage}
        alt="プロフィール画像"
        height={100}
        width={100}
      />
      <div>
        <p className={name}>
          モノのふー
          <a
            className={twitterLink}
            href="https://twitter.com/mono_nofoo"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </p>
        <p className={introduction}>
          元 PHPer、現フロントエンドエンジニア。主に Next.js 書いてます。
        </p>
      </div>
    </div>
  );
};

export default Profile;
