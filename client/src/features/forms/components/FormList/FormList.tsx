'use client';

import React from 'react';
import { useGetFormsQuery } from '../../formsApi';
import { Form } from 'shared/types';
import { Container } from '@/shared/layout';
import { FormCard, FormCardSkeleton } from '../FormCard';
import styles from './FormList.module.scss';
import { NewFormCard } from '../NewFormCard';

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
              ? Array.from({ length: 8 }, (_, i) => (
                  <li key={i} className={styles['form-list__item']}>
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
