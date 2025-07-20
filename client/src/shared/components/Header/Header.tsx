'use client';

import { Logo } from '../Logo';
import styles from './Header.module.scss';
import { Container } from '../../Container';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__content}>
          <Logo />
        </div>
      </Container>
    </header>
  );
};
