import React, { useContext } from 'react'
import '../Stylesheets/Listitem.css'
import { Link } from 'react-router-dom'
import DataContext from './DataContext'

export default function ListItem(props) {
  const Scroll_Top = useContext(DataContext);
  const LinkBtn = document.querySelector('#LinkAdd')
  LinkBtn?.addEventListener('click', ()=>{
    console.log("Clicked")
  })
  return (
    <div className='Items_Container'>
     <span className='Cntent_Wraper'><Link onClick={Scroll_Top} id='LinkAdd' className="Lst_Anim" to={props.linked}>{props.title}</Link></span>
    </div>
  )
}
