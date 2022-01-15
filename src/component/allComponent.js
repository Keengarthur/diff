import './allComponent.css'
// import {useEffect} from 'react'
// import img2 from './../images/2.jpg'

const ItemCategory = (props) =>{

    
    return <div className='itemCategory' style={{background:`${props.image}`}}>
        <h3>
        {props.title}
        </h3>
    </div>
}

export default ItemCategory