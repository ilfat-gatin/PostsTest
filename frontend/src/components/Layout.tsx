import { NavLink, Outlet } from "react-router-dom"
import styles from '../styles/Layout.module.css'

export const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <NavLink to='/' className={styles.link}>Главная</NavLink>
                <NavLink to='/posts' className={styles.link}>Статьи</NavLink>
                <NavLink to='/about' className={styles.link}>О приложении</NavLink>
            </header>
            <div className={styles.container}>
                <Outlet />   
            </div>
            <footer className={styles.footer}>
                <h2>Москва 2023</h2>
            </footer>            
        </div>
    )
}