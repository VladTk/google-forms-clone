'use client';

import React from 'react';
import { useGetFormsQuery } from '../../../../shared/api/formsApi';
import { Form } from 'shared/types';
import { Container } from '@/shared/components/layout';
import { FormCard, FormCardSkeleton } from '../../../home/components/FormCard';
import styles from './FormList.module.scss';
import { NewFormCard } from '../NewFormCard';
import clsx from 'clsx';

export const FormList = () => {
  const { data: forms, isLoading } = useGetFormsQuery();

  return (
    <section className={styles['form-list']}>
      <Container>
        <div className={styles['form-list__wrapper']}>
          <ul className={styles['form-list__list']}>
            <li className={styles['form-list__item']}>
              <NewFormCard />
            </li>

            {isLoading
              ? Array.from({ length: 5 }, (_, i) => (
                  <li
                    key={i}
                    className={clsx(
                      styles['form-list__item'],
                      styles['form-list__item--loading'],
                    )}
                  >
                    <FormCardSkeleton />
                  </li>
                ))
              : [...(forms ?? [])].reverse().map((form: Form) => (
                  <li key={form.id} className={styles['form-list__item']}>
                    <FormCard form={form} />
                  </li>
                ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
