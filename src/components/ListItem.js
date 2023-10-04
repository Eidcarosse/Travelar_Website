import React, { useContext } from 'react'
import '../Stylesheets/Listitem.css'
import { Link } from 'react-router-dom'
import DataContext from './DataContext'

export default function ListItem(props) {
  const Scroll_Top = useContext(DataContext);
  return (
    <div className='Items_Container'>
     <span className='Cntent_Wraper'><Link onClick={()=>{props.ToggleIcon(); Scroll_Top();}} id='LinkAdd' className="Lst_Anim" to={props.linked}>{props.title}</Link></span>
    </div>
  )
}
