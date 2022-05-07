import Image from 'next/image';
import { FaTwitter } from 'react-icons/fa';
import myIconImage from '@public/images/common/my-icon.png';
import * as styles from '@/components/organisms/profile/Profile.css';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Image
        className={styles.profImage}
        src={myIconImage}
        alt="プロフィール画像"
        height={100}
        width={100}
      />
      <div>
        <p className={styles.name}>
          モノのふー
          <a
            className={styles.twitterLink}
            href="https://twitter.com/mono_nofoo"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </p>
        <p className={styles.introduction}>
          元 PHPer、現フロントエンドエンジニア。主に Next.js 書いてます。
        </p>
      </div>
    </div>
  );
};

export default Profile;
