import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox } from '@material-ui/core';

import countries from '../lib/countries'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    margin: '0 10px'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const CountrySelector = ({data}) => {
  const classes = useStyles()
  return (
    <>
        <List>
          {countries.map(country => (
            <ListItem button key={country.name}>
                <Checkbox />
                <ListItemText primary={country.name} />
                <ListItemIcon className={classes.drawerPaper}>{country.emoji}</ListItemIcon>
            </ListItem>
          ))}
        </List>

    </>
  )
}

export default CountrySelector