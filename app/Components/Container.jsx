import defautlStyles from '@Styles/page.module.css'

export default function Container({ children, styles }) {

    return(
        <main className={defautlStyles.main || styles.container}>
            {children}
        </main>
    )

}