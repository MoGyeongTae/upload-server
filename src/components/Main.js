import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const styles = theme => ({
    root : {
        flexGrow : 1,
        zIndex:1,
        overflow:'hidden',
        position:'relative',
        display:'flex'
    },
    flex: {
      flexGrow: 1,
    },
    appbar : {
        zIndex : theme.zIndex.drawer + 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    toolbar : theme.mixins.toolbar,
    content : {
        flexGrow : 1,
        backgroundColor:theme.palette.background.default,
        padding : theme.spacing.unit * 50
    }
  });
  

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appbar} color="secondary">
                    <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Gyeongtae.com 서버 파일 업로드 페이지
                    </Typography>
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent">
                    <div className={classes.toolbar} />
                    <List component="nav">
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Menu1" />
                        </ListItem>
                        <ListItem button>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                            <ListItemText primary="Menu2" />
                        </ListItem>
                    </List>
                    <Divider />
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Typography variant="display3">환영합니다!</Typography>
                    <Typography variant="caption">Gyeongtae.com 서버 파일 업로드 메인 페이지 입니다</Typography>
                </main>
            </div>
        )
    }
}

export default withStyles(styles)(Main);