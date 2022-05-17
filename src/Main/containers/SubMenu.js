import * as React from 'react';
import { Fragment } from 'react';
//import { useSelector } from 'react-redux';
import {
    List,
    MenuItem,
    ListItemIcon,
    Typography,
    Collapse,
    Tooltip,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useTranslate, useSidebarState  } from 'react-admin';

const useStyles = makeStyles(theme => ({
    icon: { minWidth: theme.spacing(5) },
    sidebarIsOpen: {
        '& a': {
            transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
            paddingLeft: theme.spacing(4),
        },
    },
    sidebarIsClosed: {
        '& a': {
            transition: 'padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
            paddingLeft: theme.spacing(2),
        },
    },
}));




    
/*const props = {
    dense: true,
    handleToggle: () => {},
    icon: <ReactElement/>,
    isOpen: true,
    name: '',
    children: <ReactNode/>,
}*/




const SubMenu = (props) => {
    const { handleToggle, isOpen, name, icon, children, dense } = props;

    


        const translate = useTranslate();
        const classes = useStyles();
        const [open] = useSidebarState()
        const sidebarIsOpen = open
    /*   
    const header = ()=>{
    
        <MenuItem dense={dense}  onClick={handleToggle}>
                <ListItemIcon className={classes.icon}>
                    {isOpen ? <ExpandMore /> : icon}
                </ListItemIcon>
                <Typography variant="inherit" color="textSecondary">
                    {translate(name)}
                </Typography>
        </MenuItem>
    }
    */

    return (
        <Fragment>
            {sidebarIsOpen || isOpen ? (
        <MenuItem dense={dense} onClick={handleToggle}>
        <ListItemIcon className={classes.icon}>
            {isOpen ? <ExpandMore /> : icon}
        </ListItemIcon>
        <Typography variant="inherit" color="textSecondary">
            {translate(name)}
        </Typography>
        </MenuItem>            ) : (
                <Tooltip title={translate(name)} placement="right">
                    {        <MenuItem dense={dense} onClick={handleToggle}>
                <ListItemIcon className={classes.icon}>
                    {isOpen ? <ExpandMore /> : icon}
                </ListItemIcon>
                <Typography variant="inherit" color="textSecondary">
                    {translate(name)}
                </Typography>
        </MenuItem>}
                </Tooltip>
            )}
            <Collapse in={isOpen} timeout="auto" >
                <List
                    dense={props.dense}
                    component="div"
                    disablePadding
                    className={
                        sidebarIsOpen
                            ? classes.sidebarIsOpen
                            : classes.sidebarIsClosed
                    }
                >
                    {children}
                </List>
            </Collapse>
        </Fragment>
    );
};

export default SubMenu;