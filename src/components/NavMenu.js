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
    <div style={{ display: `${props.MenuDisplay}` }} className="Nav_Menu">
          {listitems.map((li) => {
            return <ListItem key={li.id} linked={li.Link} title={li.Item} />;
          })}
    </div>
    </>
  )
}
