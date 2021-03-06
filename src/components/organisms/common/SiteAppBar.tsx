import {AppBar, IconButton, InputBase, Toolbar, Typography} from "@material-ui/core";
import React, {useCallback, useState} from "react";
import SearchIcon from '@material-ui/icons/Search';
import {createStyles, fade, makeStyles, Theme} from '@material-ui/core/styles';
import {useRouter} from 'next/router';
import {PagePaths} from "../../../constants/PagePaths";
import {HomeIcon} from "../../atoms/icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: "relative",
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
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

const SiteAppBar = () => {
    const router = useRouter();
    const classes = useStyles();
    const [search, setSearch] = useState('');

    const handleKeyPress = useCallback(async e => {
        if (e.key.toUpperCase() === 'ENTER') {
            await router.push({
                pathname: PagePaths.ANIMATIONS,
                query: {
                    search: search,
                    page: 1,
                },
            });
        }
    }, [search]);

    const handleSearchChange = useCallback(e => {
        setSearch(e.target.value);
    }, [])

    const handleHomeClick = useCallback(async () => {
        await router.push(PagePaths.HOME);
    }, []);

    return (
        <div className={"relative"}>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleHomeClick}
                    >
                        <HomeIcon/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Anime
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                            onKeyPress={handleKeyPress}
                            onChange={handleSearchChange}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default SiteAppBar;