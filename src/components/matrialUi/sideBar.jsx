import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function SideBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const list = (
    <Box 
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        color="inherit"
        aria-label="open drawer"
        sx={{ m: 1 }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
}



//  <div
//       className="transition decoration-300ease-in-out
//       bg-white/80 dark:bg-slate-900/80
//        backdrop-blur-xl border-r
//         border-slate-200/50 dark:border-slate-800/50
//         flex flex-col relative z-10"
//     >
//       {/* logo */}
//       <div
//         className="p6 border-b
//        border-slate-200/50 dark:border-slate-700/50"
//       >
//         <div
//           className="m-5 flex items-center space-x-3
//    border-b border-slate-200 "
//         >
//           <div
//             className=" w-10 h-10 bg-gradient-to-r
//              from-blue-600 to-purple-600 rounded-xl
//           flex items-center justify-center shadow-lg "
//           >
//             <DashboardIcon className=" text-white" />
//           </div>
//           {/* conditional render */}
//           <div>
//             <h1 className=" text-2xl font-bold text-slate-900 dark:text-gray-200">
//               DashBoard
//             </h1>
//             <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
//               Admin Panel
//             </p>
//           </div>
//           {/* Navigation */}
//         </div>
//       </div>
//       {/* Navigation */}
//       <nav>
//         <SideBar />
//       </nav>
//     </div>
