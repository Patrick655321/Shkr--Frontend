import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  responsiveFontSizes,
} from "@mui/material";

const NavBarItems = [
  { title: "Search By Name", id: "#name" },
  { title: "Search By Ingredient", id: "#base" },
  { title: "5 Fruity", id: "#fruity" },
  { title: "5 Fizzy", id: "#fizzy" },
  { title: "5 Strong", id: "#heavy" },
  { title: "5 Non-Alc", id: "#non-alc" },
  { title: "Add Forbidden", id: "#addForbidden" },
];

function NavBar() {
  return (
    <AppBar style={{ background: "#7332cf" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={require("../../images/cocktail32.png")}
            alt="Cocktail image"
            style={{ shadows: { ShadowRadius: 5 } }}
          />
          <Typography
            variant="h4"
            noWrap
            component="a"
            src="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "1rem",
              color: "inherit",
              textDecoration: "none",
              ml: 1,
            }}
          >
            SHKR
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {NavBarItems.map((page) => (
                <a 
                key={page.title} 
                style = {{textDecoration: 'none'}}             
                href={``}>
              <Button
                key={page.id}
                onClick=""
                sx={{ my: 2, color: "white", display: "block"}}
              >
                {page.title}
              </Button>
            </a>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
