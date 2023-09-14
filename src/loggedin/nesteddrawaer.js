import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from "react-router-dom";

const NestedDrawer = () => {

    const navigate = useNavigate();

    const itemsList = [
        {
            text: "My Profile",
            location: "/myprofile",
            icon :  <AccountCircle sx={{fontSize:'3rem'}}/>
          },
        {
          text: "Change Password",
          location: "/changepassword",
          icon : <LockOutlinedIcon sx={{fontSize:'3rem'}}/> 
        }
      ];

      const handleNav = (smpage)=>{
        console.log(smpage);
         navigate(smpage);
      }

    return ( 
        <List sx={{ml:'8rem', cursor:'pointer', mt:'-1rem'}}>
        {itemsList.map((item, index) => {
          const { text, location, icon } = item;
          return (
            <ListItem key={text} disablePadding onClick={()=>handleNav(location)} sx={{pb:'12px'}}>
              <ListItemButton>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
     );
}
 
export default NestedDrawer;