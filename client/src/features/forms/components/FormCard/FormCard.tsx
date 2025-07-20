import Link from 'next/link';
import { Form } from 'shared/types';
import styles from './FormCard.module.scss';

type Props = {
  form: Form;
};

export const FormCard = ({ form }: Props) => {
  const { title, description, id } = form;

  return (
    <article className={styles.card}>
      <div className={styles.card__decor}></div>
      <div className={styles.card__info}>
        <h4 className={styles.card__title}>{title}</h4>
        <p className={styles.card__description}>{description}</p>
      </div>
      <div className={styles.card__links}>
        <Link href={`/forms/${id}/fill`} className={styles.card__link}>
          View Form
        </Link>
        <Link href={`/forms/${id}/responses`} className={styles.card__link}>
          Responses
        </Link>
      </div>
    </article>
  );
};
