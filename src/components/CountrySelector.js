import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { List, ListItem, ListItemIcon, ListItemText, Checkbox, Divider, Typography } from "@material-ui/core"
// import { ExpandMore, ExpandLess } from "@material-ui/icons";

import countries from "../lib/countries"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: '100%'
  },
  drawerPaper: {
    minWidth: 125,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  divider: {
    minHeight: 350
  },
  menuText: {
    textAlign: "center",
    fontSize: 14
  }
}))

const CountrySelector = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Divider className={classes.divider} orientation="vertical" />
      <List>
          <Typography className={classes.menuText}>Compare Countries</Typography>
          {countries.map(country => (
            <ListItem button key={country.name}>
              <Checkbox />
              <Typography className={classes.menuText}>
                <ListItemText
                  className={classes.drawerPaper}
                  secondary={country.name}
                />
              </Typography>
              <ListItemIcon>{country.emoji}</ListItemIcon>
            </ListItem>
          ))}
      </List>
    </div>
  )
}

export default CountrySelector