import React, { useCallback, useState } from "react";
import Drawer from "@material-ui/core/Drawer/Drawer";
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

const Sidebar = ({
    anchor = 'left',
    defaultOpen = false,
}) => {
    const [drawer, setDrawer] = useState(defaultOpen);

    const toggleDrawer = useCallback((event) => {
        event.stopPropagation();
        event.preventDefault();

        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawer(!drawer);
    }, [setDrawer, drawer]);

    const list = () => (
        <div
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <React.Fragment>
            <Button onClick={toggleDrawer}>
                <MenuOpenIcon fontSize='large' />
            </Button>
            <Drawer anchor={anchor} open={drawer} onClose={toggleDrawer}>
                {list()}
            </Drawer>
        </React.Fragment>
    );
};

export default Sidebar;
