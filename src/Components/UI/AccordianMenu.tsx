import { Divider, List, ListItem, ListItemText } from '@mui/material'
import { MenuTypes } from './Header'
import { Link } from 'react-router-dom'


const style = {
    width: '100%',
    maxWidth: 200,
    bgcolor: 'none',
    color: "white"
}

function AccordianMenu({ menu }: { menu: MenuTypes[] }) {

    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            {menu?.map((menu) => {
                return (
                    <Link to={menu.link}>
                        <ListItem button>
                            <p>{menu.title}</p>
                        </ListItem>
                        <Divider sx={{ background: "violet" }} />
                    </Link>

                )
            })}
        </List>
    )
}

export default AccordianMenu