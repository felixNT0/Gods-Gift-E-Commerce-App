import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, Divider, ListItemIcon, Tooltip } from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useAppContext } from "../../contexts/useAppContext";
import logo from "../../assets/logo.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    color: "white",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = ["Home", "About", "Contact"];

  const { toggleCartDialog } = useAppContext();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Avatar src={logo} alt="logo" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            className="text-white"
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            God's Gift
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon className="text-white" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search products..."
              aria-label="search"
              className="text-white"
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          {/* <Box
            sx={{
              display: { xs: "none", sm: "block" },
              marginRight: 5,
            }}
          >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box> */}
          <IconButton
            size="large"
            aria-label="open shopping cart"
            color="inherit"
            className="text-white"
            onClick={toggleCartDialog}
          >
            <Badge badgeContent={10} color="error">
              <ShoppingCartIcon className="text-white" />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="open notification"
            color="inherit"
          >
            <Badge badgeContent={3} color="error">
              <NotificationsIcon className="text-white" />
            </Badge>
          </IconButton>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="large"
              color="inherit"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <AccountCircleIcon className="text-white" />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
