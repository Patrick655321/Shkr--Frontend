import { AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb'

function NavBar() {
    return (
        <AppBar style={{ background:  '#7332cf'}} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={require("../../images/cocktail32.png")} alt="Cocktail image"/>
                    <Typography variant="h6"
                    noWrap
                    component="a"
                    src='/'
                    sx={{
                        mr: 2,
                        display: {xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'non',
                        ml: 1
                    }}
                    >
                        SHKR
                    </Typography>
                    <Box sx={{flexGrow: 1, display: 'flex'}}>
                        <Button sx={{my:2, color: 'white', display: 'block'}}>
                            SEARCH
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar