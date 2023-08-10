import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import Accordian from './Accordian';
import { menu } from './Header';



export default function MenuDrawer() {

    const [state, setState] = useState(false)

    const toggleDrawer =
        () =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState(false);
            };

    return (
        <div>
            <button className='md:hidden' onClick={() => setState(true)}>
                <MenuIcon />
            </button>
            <Drawer
                anchor={'left'}
                open={state}
                onClose={toggleDrawer()}
            >
                <List sx={{ backgroundColor: '#242346', height: "100vh", color: "white" }}>
                    {['Box-Model', 'Flex', 'Border-Radius', 'Display-Property'].map((text, index) => (
                        <Link to={`/${text.toLocaleLowerCase()}`}>
                            <ListItem key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                              <Accordian menu={menu} />

                </List>
            </Drawer>

        </div>
    );
}