import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    }, 
    icon: { marginRight: '20px',},
    buttons: {
        marginTop: '40px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%' 
    },
    cardContent: {
        flexGrow: 1,

    },
    footer: {
        backgroundColor: '#002da1',
        padding: '50px 0',
        // height: '300px',
        color: 'white'
    },
    appContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    mainContent: {
        flex: 1,
    },
    
}));

export default useStyles;