import React from 'react'
import '../Stylesheets/Listitem.css'
import { Link } from 'react-router-dom'

export default function ListItem(props) {
  return (
    <div className='Items_Container'>
     <span className='Cntent_Wraper'><Link className="Lst_Anim" to={props.linked}>{props.title}</Link></span>
    </div>
  )
}
