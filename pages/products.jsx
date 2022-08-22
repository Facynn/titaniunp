import { Fragment } from 'react'
import { MainLayout } from '../components/Layouts/MainLayout';
import styles from '../public/styles/all.module.css'
import documentSetTitle from '../components/Title/documentSetTitle';

export default function Products() {
  documentSetTitle('Products | TitaNiunP')

  return (
    <MainLayout>
        <div className={styles.pageContent}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>No products available at the moment.</h2>
            <p className={styles.pageText}>We are working on it, so that you can have a more dynamic list to access the products of our Amazon online store.</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    </MainLayout>
  )
}
