import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { List, ListItem, ListItemIcon, ListItemText, Checkbox, Divider, Typography} from "@material-ui/core"
// import { ExpandMore, ExpandLess } from "@material-ui/icons";

import countries from "../lib/countries"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: '100%'
  },
  drawerPaper: {
    minWidth: 150,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  divider: {
    minHeight: 350
  }
}))

const CountrySelector = ({ data }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Divider className={classes.divider} orientation="vertical" />
      <List>
          <Typography>Select Countries to Compare</Typography>
          {countries.map(country => (
            <ListItem button key={country.name}>
              <Checkbox />
              <ListItemText
                className={classes.drawerPaper}
                primary={country.name}
              />
              <ListItemIcon>{country.emoji}</ListItemIcon>
            </ListItem>
          ))}
      </List>
    </div>
  )
}

export default CountrySelector
