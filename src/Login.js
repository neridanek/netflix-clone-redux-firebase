import React,{useState} from 'react'
import {Button} from '@material-ui/core'
import styles from './Login.module.scss'
import {useDispatch} from 'react-redux'
import {login} from './features/counter/userSlice'
import {auth,provider} from './firebase'
import SignUpScreen from './SignUpScreen'

const Login = () => {
    const [signIn,setSignIn] = useState(false)
     
    return (
        <div className={styles.login}>
            <div className={styles.loginGradient}>
            </div>
            <div className={styles.loginContent}>
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
                <button onClick={()=>setSignIn(true)} color="secondary">Sign In</button>
                <div className={styles.loginGradient}>
                </div>
                

                <div className={styles.loginContentBody}>
                    {signIn ? (<SignUpScreen/>) 
                    : (
                    <>
                        <h1>Unlimited films</h1>
                        <h2>Watch anywhere</h2>
                        <h3>Ready to watch?</h3>
                        
                        <div className={styles.loginContentInput}>
                            
                            <form>
                                <input type='email' placeholder="Email Address"/>
                                <button className={styles.loginContentInputButton} onClick={()=>setSignIn(true)}>GET STARTED</button>
                            </form>
                            
                        </div>
                    </>
                    )}
                </div>
                
            </div>
            
        </div>
    )
}

export default Login
