import ListItem from './ListItem';
import '../Stylesheets/NavMenu.css'

export default function NavMenu(props) {

    const listitems = [
        {
          Item : "Home",
          Link : "/TravelerApp"
        },
        {
          Item : "Services",
          Link : "/Services"
        },
        { 
          Item : "About Us",
          Link : "AboutUs"
        },
        { 
          Item : "Contact",
          Link : "/Contact"
        }
      ]

      
    

  return (
    <>
    <div style={{ display: `${props.MenuDisplay}` }} className="Nav_Menu">
          {listitems.map((element) => {
            return <ListItem key={element.Item} linked={element.Link} title={element.Item} />;
          })}
    </div>
    </>
  )
}
