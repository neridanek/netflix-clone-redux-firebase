import React,{useState,useEffect} from 'react'
import styles from './Nav.module.scss'
import {useHistory} from 'react-router-dom'

export const Nav = () => {
    const history = useHistory()
    const [show,handleShow] = useState(false);
    const transitionNavBar = () =>{
        if (window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar)
        return ()=> window.removeEventListener('scroll',transitionNavBar)
    },[])
    return (
        <div className={!show ? styles.nav : styles.navBlack}>
            <div className={styles.navContent}>
                <img onClick={()=>history.push("/")} className={styles.navContentLogo} src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/> 
                <img onClick={()=>history.push("/profiles")} className={styles.navContentAvatar} src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt=""/> 
                
            </div>    
        </div>
    )
}

export default Nav