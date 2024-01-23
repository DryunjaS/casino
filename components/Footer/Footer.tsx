import styles from '@/components/Footer/footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.nav}>
            <Link href="/">
                О проекте
            </Link>
            <Link href="/">
                Контакты
            </Link>
        </div>
    </div>
  )
}

export default Footer