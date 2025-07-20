'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './NewFormCard.module.scss';

export const NewFormCard = () => {
  return (
    <Link href="/forms/new" className={styles['new-form']}>
      <Image
        src="/new-form.png"
        alt="create new form"
        fill
        className={styles['new-form__img']}
      />
    </Link>
  );
};
