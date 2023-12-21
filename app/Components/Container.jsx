import styles from '@Styles/page.module.css'

export default function Container({ children }) {

    return(
        <main className={styles.main}>
            {children}
        </main>
    )

}