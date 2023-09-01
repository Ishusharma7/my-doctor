import * as React from "react";
import Box from "@mui/material/Box";
import c from './images/c.svg'
import b from './images/b.svg'
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Divider } from "@mui/material";
import Form from "./forms/form";
import Register from './forms/register';
import Doct from './forms/doc';
import css from './login.module.css'

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ marginTop: "15em", backgroundColor: "#fafafa" }}>
    <TabContext value={value}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: { xs: "0", md: "60%" } }}></Box>
        <Box
          sx={{
            border: 1,
            borderColor: "divider",
            width: { xs: "90%", md: "40%" },
            mr: { lg: "10rem", md: "4rem" },
            ml: { lg: "10rem", md: "4rem" },
          }}
        >
          <TabList
            variant="fullWidth"
            onChange={handleChange}
            aria-label="wrapped label tabs example"
          >
            <Tab  sx={{ fontSize: {xs:'1rem', md:'1.5rem'}, padding: {xs:'1rem', md:'2rem'} }}label="LOGIN" value="1" />
            <Divider
              orientation="vertical"
              style={{
                height: "4rem",
                alignSelf: "center",
              }}
            />
            <Tab  sx={{ fontSize: {xs:'1rem', md:'1.5rem'}, padding: {xs:'1rem', md:'2rem'} }} label="PATIENT SIGN UP" value="2" />
            <Divider
              orientation="vertical"
              style={{
                height: "4rem",
                alignSelf: "center",
              }}
            />
            <Tab sx={{ fontSize: {xs:'1rem', md:'1.5rem'}, padding: {xs:'1rem', md:'2rem'} }} label="DOCTOR SIGN UP" value="3" />
          </TabList>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: { xs: "0", md: "60%" } }}>
          {value === "1" ? (
            <img
              className={css.image}
              src={b}
              alt="background image"
            />
          ) : (
            <img
              className={css.image}
              src={c}
              alt="background image"
            />
          )}
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "40%" },
            mr: { lg: "10rem", md: "4rem" },
            ml: { lg: "10rem", md: "4rem" },
          }}
        >
          <TabPanel sx={{ p: 0, pt: 4 }} value="1">
            <Form />
          </TabPanel>
          <TabPanel sx={{ p: 0, pt: 4 }} value="2">
            <Register />
          </TabPanel>
          <TabPanel sx={{ p: 0, pt: 4 }} value="3">
          <Doct />
          </TabPanel>
        </Box>
      </Box>
    </TabContext>
    </Box>
  );
}