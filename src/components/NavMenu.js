import ListItem from './ListItem';
import '../Stylesheets/NavMenu.css'
import { useTranslation } from 'react-i18next';

export default function NavMenu(props) {
  const{t} = useTranslation();

    const listitems = [
        {
          id : 1,
          Item : t('Navbar.Titles.Home'),
          Link : "/"
        },
        {
          id : 2,
          Item : t('Navbar.Titles.Services'),
          Link : "/Services"
        },
        { 
          id : 3,
          Item : t("Navbar.Titles.About"),
          Link : "AboutUs"
        },
        { 
          id : 4,
          Item : t("Navbar.Titles.Contact"),
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
