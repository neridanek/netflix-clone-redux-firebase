import React from 'react'
import styles from './ProfileScreen.module.scss'
import Nav from './components/Nav'
import { auth } from './firebase'
import {SelectUser} from './features/counter/userSlice'
import {useSelector} from 'react-redux'

const ProfileScreen = () => {
    const user = useSelector(SelectUser)
    return (
        <div className={styles.profileScreen}>
            <Nav/>
            <div className={styles.profileScreenBody}>
                <h1>Edit Profile</h1>
                <div className={styles.profileScreenBodyInfo}>
                    <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt=""/>
                    <div className={styles.profileScreenBodyInfoDetails}>
                        <h2>{user.email}</h2>
                        <div className={styles.profileScreenBodyInfoDetailsPlans}><h3>Plans</h3>
                            <button className={styles.profileScreenBodyInfoDetailsPlansSignOut} onClick={()=>auth.signOut()}>Sign Out</button>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
