import ListItem from './ListItem';
import '../Stylesheets/NavMenu.css'

export default function NavMenu(props) {

    const listitems = [
        {
          id : 1,
          Item : "Home",
          Link : "/"
        },
        {
          id : 2,
          Item : "Services",
          Link : "/Services"
        },
        { 
          id : 3,
          Item : "About Us",
          Link : "AboutUs"
        },
        { 
          id : 4,
          Item : "Contact",
          Link : "/Contact"
        }
      ]

      
    

  return (
    <>
    <div style={{ display: props.MenuDisplay }} className={`Nav_Menu ${props.MenuDisplay == 'block' ? 'ent_anim' : ''} ${props.MenuDisplay == 'none' && 'ext_anim'}`}>
          {listitems.map((li) => {
            return <ListItem key={li.id} linked={li.Link} title={li.Item} ToggleIcon={props.ToggleIcon} />;
          })}
    </div>
    </>
  )
}
