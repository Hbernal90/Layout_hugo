import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import SettingsIcon from "@material-ui/icons/Settings";
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
            color: "#8f96a1",
            maxWidth: "1500px",
            width: "100%",
            margin: "auto",
            padding: 0,
        },
        toolBar: {
            flex: 0.1,
        },
        Logo: {
            maxWidth: "100%",
            maxHeight: "100%",
            minWidth: "150px"
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
            display: "flex",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            width: '100%',
            flex: "0.75",
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: "0 10px",
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
            width: "100%",
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            transition: theme.transitions.create('width'),
            width: '100%',
        },
        profileWrapper: { 
            height: "60px",
            width: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flex: "0.1",
        },
        gearButton:{
            width: "40px",
            height: "40px",
            cursor: "pointer"
        },
        profileButton: {
            width: "60px",
            height: "60px",
            borderRadius: "30px",
            backgroundColor: "#6B25A1",
            color: "#FFFFFF",
            cursor: "pointer",
            fontSize: "25px",
            lineHeight: "60px"
        }
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
                    <div className={classes.profileWrapper}>
                            <SettingsIcon className={classes.gearButton}/>
                            <div className={classes.profileButton}>CC</div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );

}

export default Header;