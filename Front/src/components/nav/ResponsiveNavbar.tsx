import * as React from "react";
import {
  styled,
  useTheme,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import mdTheme from "../../theme";
import { ReactComponent as HomeLogo } from "../../assets/icons/logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { ReactComponent as ExpertsIcon } from "../../assets/icons/experts.svg";
import { ReactComponent as ArticlesIcon } from "../../assets/icons/articles.svg";
import { ReactComponent as InfluencersIcon } from "../../assets/icons/influencers.svg";
import { ReactComponent as GamesIcon } from "../../assets/icons/games.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  overflow: "scroll",
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: "white",
  color: "A2209E",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

interface ResponsiveNavbarProps {
  children: React.ReactNode;
}

export const ResponsiveNavbar: React.FC<ResponsiveNavbarProps> = ({
  children,
}: ResponsiveNavbarProps) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar
            dir="rtl"
            style={{ display: "flex", justifyContent: "space-between" }}
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginLeft: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon style={{ color: "#A2209E" }} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="secondary"
            >
              <PlusIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="secondary"
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="secondary"
            >
              <Badge
                badgeContent={17}
                sx={{
                  "& .MuiBadge-badge": {
                    color: "white",
                    backgroundColor: "rgb(162, 32, 158)",
                  },
                }}
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton href="/" color="inherit">
              <HomeLogo />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
            <Avatar
              src="https://firebasestorage.googleapis.com/v0/b/to-better.appspot.com/o/female1.png?alt=media&token=b2f7ae02-c6c1-48ab-aa58-4417e5843a43"
              sx={{ marginRight: 0, marginLeft: "15px" }}
              aria-label="recipe"
            ></Avatar>
            <Typography variant="h6" color="#A2209E" align="left">
              ToBetter
            </Typography>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton href="/">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"דף הבית"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton href="/experts">
                <ListItemIcon>
                  <ExpertsIcon />
                </ListItemIcon>
                <ListItemText primary={"מומחים"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton href="/games">
                <ListItemIcon>
                  <GamesIcon />
                </ListItemIcon>
                <ListItemText primary={"משחקים"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton href="/articles">
                <ListItemIcon>
                  <ArticlesIcon />
                </ListItemIcon>
                <ListItemText primary={"מאמרים"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton href="/influencers">
                <ListItemIcon>
                  <InfluencersIcon />
                </ListItemIcon>
                <ListItemText primary={"משפיענים"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              // height: "100vh",
              overflow: "auto",
            }}
          >
            {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}> */}
            {children}
            <Copyright sx={{ pt: 4 }} />
            {/* </Container> */}
          </Box>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      ToBetter
      {" " + new Date().getFullYear()}
    </Typography>
  );
}

export default ResponsiveNavbar;
