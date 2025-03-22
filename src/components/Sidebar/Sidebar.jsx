import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import HomeIcon from "@mui/icons-material/Home";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import PersonIcon from "@mui/icons-material/Person";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { useState } from "react";
import { useStore } from "../../lib/store";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const darkMode = useStore((state) => state.darkMode);
  const [setCurrentEdition] = useState("ar.alafasy");

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        padding: "16px",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onChange={(event) => {
        setCurrentEdition(event.target.value);
      }}
      style={{ backgroundColor: darkMode ? "#0D0059" : "#1E745E" }}
    >
      <List>
        {[
          { text: "Home", icon: <HomeIcon />, path: "/" },
          { text: "Reciters", icon: <GraphicEqIcon />, path: "/reciters" },
          { text: "About", icon: <PersonIcon />, path: "/about" },
          { text: "Feedback", icon: <ReviewsIcon />, path: "/feedback" },
        ].map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              marginBottom: "20px",
              color: darkMode ? "#ffffff" : "#000000",
            }}
          >
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                borderRadius: "8px",
                transition: "background-color 0.3s ease, color 0.3s ease",
                "&:hover": {
                  backgroundColor: darkMode ? "#333333" : "#f0f0f0",
                  transform: "scale(1.05)",
                  transition: "transform 0.5s ease",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "40px",
                  color: darkMode ? "#ffffff" : "#000000",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {item.text}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <svg
        style={{ cursor: "pointer" }}
        onClick={toggleDrawer(true)}
        stroke="white"
        fill="none"
        strokeWidth="0"
        viewBox="0 0 24 24"
        className="mx-2 cursor-pointer bg-transparent hover:text-gray-400"
        height="28"
        width="28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        ></path>
      </svg>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
