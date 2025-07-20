import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        src="/google-forms-logo.webp"
        width={128}
        height={128}
        alt="Google Forms Logo"
        className={styles.logo__image}
        priority
      />
      <span className={styles.logo__text}>Forms</span>
    </Link>
  );
};
