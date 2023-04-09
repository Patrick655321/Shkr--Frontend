import { AppBar, Box, Button, Container, Toolbar, Typography, responsiveFontSizes} from "@mui/material"
import AdbIcon from '@mui/icons-material/Adb'
import shadows from "@mui/material/styles/shadows"

const pages = ['Search By Name', 'Search By Ingredient', '5 Fruity', '5 Fizzy', '5 Strong', '5 Non-Alc']

function NavBar() {
    return (
        <AppBar style={{ background:  '#7332cf'}} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={require("../../images/cocktail32.png")} alt="Cocktail image" style={{shadows: {ShadowRadius: 5}}}/>
                    <Typography variant="h4"
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
                        ml: 1,
                    }}
                    >
                        SHKR
                    </Typography>
                    <Box sx={{flexGrow: 1, display: 'flex'}}>
                        {pages.map((page) => (
                        <Button key={page} onClick='' sx={{my:2, color: 'white', display: 'block'}}>
                            {page}
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar