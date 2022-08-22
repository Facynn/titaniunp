import { MainLayout } from '../components/Layouts/MainLayout';
import styles from '../public/styles/all.module.css'
import documentSetTitle from '../components/Title/documentSetTitle';

export default function Notfound() {
documentSetTitle('Not found | TitaNiunP')
  return (
    <MainLayout>
      <div>pagina no encontrada</div>
    </MainLayout>
  )
}