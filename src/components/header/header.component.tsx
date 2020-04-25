import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import apexLogo from '../../assets/apex-logo.png';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            justifyContent: 'space-between',
            background: 'white'
        },
        appBar: {
            background: 'white',
            position: 'static'
        },
        toolBarContainer: {
            justifyContent: "space-between", 
            color: "#8f96a1"
        },
        toolBar: {
            display: 'flex', 
            alignItems:'center'
        },
        Logo: {
            width: '210px'
        },
        navigation: {
            display: 'inline-flex', 
            listStyle: 'none', 
            margin: '0', 
            paddingInlineStart: '0',
            '& li': {
                marginLeft: '15px',
                '& a': {
                    textDecoration: 'none',
                    color: 'inherit',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    '&:hover': {
                        color: '#64686e'
                    }
                }
            }
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }),
);

const Header = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolBarContainer}>
                    <div className={classes.toolBar}>
                        <Link to="/">
                            <img className={classes.Logo} src={apexLogo} alt="APEX" />
                        </Link>
                        <ul className={classes.navigation}>
                            <li >
                                <Link to="/assign">
                                    <span>Assign</span>
                                </Link>
                            </li>
                            <li >
                                <Link to="/">
                                    <span>Info</span>
                                </Link>
                            </li>
                            <li >
                                <Link to="/">
                                    <span>Confirmation</span>
                                </Link>
                            </li>
                            <li >
                                <Link to="/">
                                    <span>Building</span>
                                </Link>
                            </li>
                            <li >
                                <Link to="/">
                                    <span>Export</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );

}

export default Header;