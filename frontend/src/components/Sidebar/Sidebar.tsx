import { Button, Drawer } from "@mui/material";

function Sidebar() {
  return (
    <div>
      <Drawer variant="permanent">
        <Button variant="contained">Home</Button>
        <Button variant="contained">Club</Button>
        <Button variant="contained">Log out</Button>
        <Button variant="contained">Settings</Button>
      </Drawer>
    </div>
  );
}

export default Sidebar;
