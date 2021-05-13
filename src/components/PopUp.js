import React,{useState} from 'react'
import styles from "./PopUp.module.scss"

const PopUp = ({name,description,image,handler,active}) => {
    const [isActive,setIsActive] = useState(true)
    
    
    return (
        <div className={styles.popUp} style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${image}")`,
            backgroundPosition:"top center",
            backgroundPositionX:"right",
            backgroundRepeat:"no-repeat",
            backgroundAttachment:"fixed",
            backgroundColor:"#111",
            }}>

                <div className={styles.popUpInfo}>
                    <h1>{name}</h1>
                    <h2>{description}</h2>
                </div>
                
                    
                </div>
    )
}

export default PopUp
