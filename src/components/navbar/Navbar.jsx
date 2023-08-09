import React, {useEffect} from 'react';
import styles from './Navbar.module.css'
import themeIcon from '../../assets/img/themeIcon.svg'
const Navbar = () => {

    useEffect(()=>{
        setTheme()
    },[])
    function changeTheme() {
        switch (localStorage.getItem('theme')) {
            case 'light':
                localStorage.setItem('theme','dark')
                setTheme()
                break
            case 'dark':
                localStorage.setItem('theme','light')
                setTheme()
                break
            default:
                localStorage.setItem('theme','light')
                setTheme()
        }
    }
    function setTheme(){
        const theme = localStorage.getItem('theme')
        if(theme === null){
        return document.documentElement.setAttribute('data-theme', 'dark')
        }
        document.documentElement.setAttribute('data-theme', theme)
    }
    return (
        <nav className={styles.navigation}>
            <p>WEBTENSEI - <a href={'https://t.me/webtensei'} rel={'noopener'} className={styles.headerLink} target={'_blank'}>TG</a> | Тестовое задание для компании <strong>Cybernetically</strong></p>

            <button className={styles.changeTheme} onClick={e => {changeTheme()}}><img alt={'Изменить тему сайта'} src={themeIcon}/></button>
        </nav>
    );
};

export default Navbar;