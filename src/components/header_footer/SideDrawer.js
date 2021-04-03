import { Drawer, List, ListItem } from '@material-ui/core'
import React from 'react'

function SideDrawer(props) {
    const {open, onClose} = props;

    return (
      <Drawer anchor="left" open={open} onClose={() => onClose(false)}>
          <List component="nav">
              <ListItem button onClick={() => console.log("About Me")}>
                درباره من
              </ListItem>

              <ListItem button onClick={() => console.log("CV")}>
                رزومه
              </ListItem>

              <ListItem button onClick={() => console.log("Contact Me")}>
                تماس با من
              </ListItem>
          </List>
      </Drawer>
    )
}

export default SideDrawer
