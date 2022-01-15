import { useState } from 'react'
import {componentDatas,mensCategory} from './componentsData'
import Overlay from'./../overlays/overlay'

import ProductInfo from './../productInfo'
import './components.css'
const Components = (props) =>{
    const [products, setProducts] = useState('')
    const [olay,setOlay] = useState(false)

return <>



{componentDatas.map(data=>{
        const {id,category} = data
        const closeOverlay = () =>{
            setOlay(false)
        }
        const openInfo = (e) =>{
            const keys = e.target.parentElement.id
            const product = mensCategory[keys -1]
            const productComp = document.querySelector('.productInfoDiv')
            productComp.style.zIndex = 3
            productComp.style.visibility = 'visible'
            setOlay(true)
            setProducts(product)
        }
        return <section id={category} className='componentsSection' key={id}><div className ='componentsDiv'>
            <h2>{category}</h2>
            </div>
            <article>
                 {mensCategory.map(item=>{
                     const {id,image,price,name,discount,percentageOff} = item
                    return <div id ={id} className='card' key={id} onClick={e=>openInfo(e)}>
                        <img src={image}/>
                        <div>
                        <h3>{name}</h3>
                        <h3>{price}</h3>
                        {discount && <h3 className='discount'>{percentageOff}% Off</h3>}

                        </div>
                    </div>
                })}
                {olay && <Overlay/>}

            </article>
               <ProductInfo changeCart = {props.changeCart} product = {products} overlay = {()=>closeOverlay()}/>
            </section>
        
    })}</>

   

    

    
}

export default Components