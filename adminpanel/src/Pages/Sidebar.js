// import React from 'react';
// import { useDispatch } from 'react-redux';
// // import { logout } from './slices/authSlice';
// import { useNavigate } from 'react-router-dom';
// import { logout } from '../ReduxStore/Slices/authSlice';
// import { Box } from '@mui/material';
// import { RxExit } from 'react-icons/rx';

// const Sidebar = ({ open, onClose, role }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/login'); // Redirect to login after logout
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         p: 2,
//         color: 'white',
//         cursor: 'pointer',
//         '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
//       }}
//       onClick={handleLogout}
//     >
//       <RxExit style={{ marginRight: '10px' }} />
//       Logout
//     </Box>
//   );
// };

// export default Sidebar;



import React from 'react';
import { useSelector } from 'react-redux';
// import SidebarLink from './SidebarLink';
// import { rolePermissions } from '../../utils/rolePermissions';   
import { Link } from 'react-router-dom';

const SidebarLink = ({ to, label }) => {
  return (
    <div className="sidebar-link">
      <Link to={to}>{label}</Link>
    </div>
  );
};


const Sidebar = () => {
  const { role, permissions } = useSelector((state) => state.auth);  // Access role & permissions from Redux store

  // Define sidebar items with their required permissions
  const sidebarItems = [
    { to: '/dashboard', label: 'Dashboard', permission: 'view_dashboard' },
    { to: '/registration-approval', label: 'Registration Approval', permission: 'view_registration_approval' },
    { to: '/user-management',  label: 'User Management', permission: 'view_user_management' },
    { to: '/reports', label: 'Reports', permission: 'view_reports' },
  ];

  return (
    <div className="sidebar">
      {sidebarItems.map((item) => {
        // Check if the user has the required permission for each sidebar item
        if (permissions.includes(item.permission)) {
          return <SidebarLink key={item.to} to={item.to} label={item.label} />;
        }
        return null;  // If no permission, return nothing
      })}
    </div>
  );
};

export default Sidebar;
