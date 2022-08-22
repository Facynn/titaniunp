import styles from '../../../public/styles/all.module.css';

export default function CookieAlert() {
    return (
        <div className={styles.cookieAlert}>
            <span>We use cookies to improve our services.</span>
            <div>
                <a href="/policy" target="_blank">Privacy Policy</a>
                <button className={styles.pageButton}>In agreement</button>
            </div>
        </div>
    )
}
