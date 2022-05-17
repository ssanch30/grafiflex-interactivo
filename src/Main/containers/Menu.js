
import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import {
    useTranslate,
    MenuItemLink,
    useSidebarState
} from 'react-admin';

import admin from '../../admin';
import orden from '../../orden'

import SubMenu from './SubMenu';

//const MenuName = 'menuAdmin' | 'menuOrden' ;

const CustomMenu = ({ dense = false }) => {
    const [state, setState] = useState({
        menuAdmin: true,
        menuOrden: false,
        menuProduct:false,
    });
    const translate = useTranslate();
    const [open] = useSidebarState();
    
    //useSelector((state) => state.theme); // force rerender on theme change
    const classes = useStyles();

    const handleToggle = (menu) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <div
            className={classnames(classes.root, {
                [classes.open]: open,
                [classes.closed]: !open,
            })}
        >

            <SubMenu
                handleToggle={() => handleToggle('menuAdmin')}
                isOpen={state.menuAdmin}
                name='Administración'
                icon={<admin.icons.main/>}
                dense={dense}
            >
                <MenuItemLink
                    to={{
                        pathname: '/clientes',
                        state: { _scrollToTop: true },
                    }}
                    primaryText={translate(`Clientes`, {
                        smart_count: 2,
                    })}
                    leftIcon={<admin.icons.customer />}
                    dense={dense}
                />                
            </SubMenu>

            <SubMenu
                handleToggle={() => handleToggle('menuProduct')}
                isOpen={state.menuProduct}
                name='Productos'
                icon={<PictureAsPdfIcon/>}
                dense={dense}
            >
                <MenuItemLink
                    to={{
                        pathname: '/Productos',
                        state: { _scrollToTop: true },
                    }}
                    primaryText={translate(`Productos`, {
                        smart_count: 2,
                    })}
                    leftIcon={<PictureAsPdfIcon/>}
                    dense={dense}
                />                
            </SubMenu>
            <MenuItemLink
                    to={{
                        pathname: '/Ordens',
                        state: { _scrollToTop: true },
                    }}
                    primaryText={translate(`Ordenes`, {
                        smart_count: 3,
                    })}
                    leftIcon={<orden.icons.pendientes/>}
                    dense={dense}
                /> 
        
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    open: {
        width: 200,
    },
    closed: {
        width: 50,
    },
}));

export default CustomMenu;




/*import * as React from 'react';
import admin from '../../admin';




import {
    Menu,
    MenuItem,
    MenuItemCategory,
    MultiLevelMenu,
} from '@react-admin/ra-navigation'

import { Typography } from '@mui/material/styles/createTypography';



const CustomMenu = () => {

    return (
        <MultiLevelMenu variant="categories">
           
            <MenuItemCategory
                name="admin"
                label="Administracion"
                icon={<admin.icons.main/>}
            >
                    <Typography variant="h4" gutterBottom>
                        Administración
                    </Typography>
                    <Menu>
                        
                        <MenuItem
                            name="clientes"
                            to={'/clientes?filter={}'}
                            label="Clientes"
                            icon={<admin.icons.main/>}
                        />

                    </Menu>
            </MenuItemCategory>   
        </MultiLevelMenu>
    );
};


export default CustomMenu;

/*import React, { useEffect, ReactElement } from 'react';
import admin from '../../admin';
import orden from '../../orden'
import { makeStyles } from '@mui/core/styles';
import classnames from 'classnames';
import LabelIcon from '@mui/icons/Label';
import SettingsIcon from '@mui/icons/Settings';

import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import {
    useTranslate,
    MenuItemLink,
} from 'react-admin';



import {
    Menu,
    MenuItem,
    MenuItemCategory,
    MultiLevelMenu,
} from '@react-admin/ra-navigation'

import { createMemoryHistory } from 'history';
import Card from '@mui/core/Card';
import CardContent from '@mui/core/CardContent';
import Typography from '@mui/core/Typography';

const useStyles = makeStyles({
    configuration: {
        marginTop: 'auto',
    },
});

const CustomMenu = () => {
    const classes = useStyles();

    return (
        <MultiLevelMenu variant="categories">
            {/* The empty filter is required to avoid falling back to the previously set filter }
            <MenuItemCategory
                name="admin"
                label="Administracion"
                icon={<admin.icons.main/>}
            >
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Administración
                    </Typography>
                    <Menu>
                        {/* The empty filter is required to avoid falling back to the previously set filter }
                        <MenuItem
                            name="clientes"
                            to={'/clientes?filter={}'}
                            label="Clientes"
                            icon={<admin.icons.main/>}
                        />
                        <MenuItem
                            name="usuarios"
                            to={'/cognitoUsers?filter={}'}
                            label="Usuarios"
                            icon={<admin.icons.user/>}
                        />=
                        <MenuItem
                            name="grupos"
                            to={'/cognitoGroups?filter={}'}
                            label="Grupos"
                            icon={<admin.icons.user/>}
                        />

                    </Menu>
                </CardContent>
            </MenuItemCategory>
            <MenuItemCategory
                name="productos"
                label="Productos"
                to="/productos?filter={}"
                icon={<PictureAsPdfIcon/>}
            >
            </MenuItemCategory>
            <MenuItemCategory
                name="ordenes"
                label="Ordenes"
                icon={<orden.icons.main/>}
            >
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Ordenes
                    </Typography>
                    <Menu>
                        <MenuItem
                            name="pendientes"
                            to={'/ordens?filter={}'}
                            label="Pendientes"
                            icon={<orden.icons.pendientes/>}
                        />
                        <MenuItem
                            name="buqueda general"
                            to={'/ordens?filter={}'}
                            label="Buscar Orden"
                            icon={<orden.icons.buscar/>}
                        />
                        <MenuItem
                            name="todos"
                            to={'/Todos?filter={}'}
                            label="Todos"
                            icon={<LabelIcon/>}
                        />
                    </Menu>
                </CardContent>
            </MenuItemCategory>
            <MenuItemCategory
                className={classes.configuration}
                name="configuracion"
                to="/"
                exact
                label="Configuración"
                icon={<SettingsIcon />}
            />
        </MultiLevelMenu>
    );
};


export default CustomMenu;



//////////
import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LabelIcon from '@mui/icons/Label';
import { makeStyles } from '@mui/core/styles';
import classnames from 'classnames';
import {
    useTranslate,
    MenuItemLink,

} from 'react-admin';

import admin from '../../admin';
import orden from '../../orden'

import SubMenu from './SubMenu';

const MenuName = 'menuAdmin' | 'menuOrden' ;

const CustomMenu = ({ dense = false }) => {
    const [state, setState] = useState({
        menuAdmin: true,
        menuOrden: true,
    });
    const translate = useTranslate();
    const open = useSelector((state) => state.admin.ui.sidebarOpen);
    useSelector((state) => state.theme); // force rerender on theme change
    const classes = useStyles();

    const handleToggle = (menu) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <div
            className={classnames(classes.root, {
                [classes.open]: open,
                [classes.closed]: !open,
            })}
        >

            <SubMenu
                handleToggle={() => handleToggle('menuAdmin')}
                isOpen={state.menuAdmin}
                name='Administración'
                icon={<admin.icons.main/>}
                dense={dense}
            >
                <MenuItemLink
                    to={{
                        pathname: '/clientes',
                        state: { _scrollToTop: true },
                    }}
                    primaryText={translate(`Clientes`, {
                        smart_count: 2,
                    })}
                    leftIcon={<admin.icons.customer />}
                    dense={dense}
                />                
                <MenuItemLink
                    to={{
                        pathname: '/usuarios',
                        state: { _scrollToTop: true },
                    }}
                    primaryText={translate(`Usuarios`, {
                        smart_count: 2,
                    })}
                    leftIcon={<admin.icons.user/>}
                    dense={dense}
                />
            </SubMenu>

            <SubMenu
                handleToggle={() => handleToggle('menuOrden')}
                isOpen={state.menuOrden}
                name='Ordenes'
                icon={<orden.icons.main/>}
                dense={dense}
            >
                <MenuItemLink
                    to={{
                        pathname: '/ordens',
                        state: { _scrollToTop: true },
                    }}
                    primaryText={translate(`Pendientes`, {
                        smart_count: 2,
                    })}
                    leftIcon={<orden.icons.pendientes/>}
                    dense={dense}
                />                
                <MenuItemLink
                    to={{
                        pathname: '/ordens',
                        state: { _scrollToTop: true },
                    }}
                    primaryText={translate(`Buscar Orden`, {
                        smart_count: 2,
                    })}
                    leftIcon={<orden.icons.buscar/>}
                    dense={dense}
                />
                <MenuItemLink
                    to={{
                        pathname: '/Todos',
                        state: { _scrollToTop: true },
                    }}
                    primaryText={translate(`TEST DB`, {
                        smart_count: 2,
                    })}
                    leftIcon={<LabelIcon/>}
                    dense={dense}
                />
            </SubMenu>
        
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    open: {
        width: 200,
    },
    closed: {
        width: 55,
    },
}));

export default CustomMenu;

*/

