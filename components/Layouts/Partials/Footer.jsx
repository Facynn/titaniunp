import styles from '../../../public/styles/all.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
            <div className={styles.links}>
                <div>
                    <span>About</span>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>

                <div>
                    <span>Contact us</span>
                    <ul>
                        <li><a href="#">this</a></li>
                        <li><a href="#">this</a></li>
                        <li><a href="#">this</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.pageLineDivisorDashed}></div>

            <div className={styles.brand}>
                    <img src="./logo.ico" className={styles.pageLogoMin}alt="TitaNiunP Logo" />
                    <span>&copy; 2022 <b>TitaNiunP</b>. All rights reserved.</span>
            </div>

            <div className={styles.pageLineDivisorDashedMin}></div>
            </div>
        </footer>
    )
}
