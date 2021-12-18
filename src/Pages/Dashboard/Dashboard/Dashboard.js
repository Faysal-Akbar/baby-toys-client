import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 200;

function Dashboard(props) {
    const {logOut} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {/* link here */}
      <NavLink to="/Home">Home</NavLink> <br />
      <NavLink to="/dashboard/myOrders">My Orders</NavLink> <br />
      <NavLink to="/dashboard/review">Review</NavLink> <br />
      <NavLink to="/dashboard/addProduct">Add Product</NavLink> <br />
      <NavLink to="/dashboard/manageProduct">Manage Products</NavLink> <br />
      <NavLink to="/dashboard/manageOrders">Manage Orders</NavLink> <br />
      <NavLink to="/dashboard/makeAdmin">Make Admin</NavLink>
      <Divider />
      <button onClick={logOut}
        className="px-3 bg-blue-400 rounded-md py-2 my-3 mx-auto flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75">
        <i className="fas fa-sign-out-alt text-lg leading-lg text-gray opacity-75"></i><span className="ml-2">logout</span>
      </button>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#4298F9",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            User Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}
export default Dashboard;