import React,{useState,useEffect} from 'react'
import styles from './PlansScreen.module.scss'
import db from '../firebase'


const PlansScreen = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        db.collection("products")
          .where("present", "==", true)
          .get()
          .then((querySnapshot) => {
            const products={};
            querySnapshot.forEach((productDoc) => {
                products[productDoc.id] = productDoc.data()
            
            })  
            setProducts(products)  
        });   
    },[])
    console.log(products)

    return (
        <div className={styles.plansScreen}>
            {Object.entries(products).map(([productId,productData])=>{
                return(
                    <div className={styles.plansScreenPlan}>
                        <div className={styles.plansScreenInfo}>
                        <h5>{productData.name}</h5>
                        <h6>{productData.description}</h6>
                        </div>
                        <button>Subscribe</button>
                    </div>
                )
            })}
            
            
        </div>
    )
}

export default PlansScreen
