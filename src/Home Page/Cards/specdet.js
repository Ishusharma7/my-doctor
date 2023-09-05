import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Doct from "./dcard";
import Left from "./leftbar";
import axios from 'axios';


const specialityDropdownWrapper = {
  display: "flex",
  flexDirection: "column",
};

const Spdet = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const [itemsPerPageFilter, setItemsPerPageFilter] = useState(12);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const speciality = searchParams.get("sp");
  const name = searchParams.get("q");

  const drawerWidth = 240;
  const itemsPerPage = [9, 12, 18, 30];

    const paramObject = {};
    if (speciality) {
      paramObject.speciality = speciality;
    }
    if (name) {
      paramObject.name = name;
    }

    const params = new URLSearchParams(paramObject);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://my-doctors.net:8090/doctors?$limit=56&$skip=0&${params}`);
        const data = response.data.data; // Accessing the 'data' array from the response
        setDoctorsData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  

  const handleItemsPerPageFilter = (e) => {
    setItemsPerPageFilter(e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        mt: { xs: "12rem", md: "9rem" },
      }}
    >
      <Left />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)`,marginTop:'10em' },
        }}
      >
        <Box component="section" sx={{ p: "0 2rem 2rem 2rem" }}>
          {isLoading && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CircularProgress size="1.4rem" />
              <Typography variant="body2" sx={{ fontSize: "16px", m: "1rem" }}>
                {`Searching for : '${name || speciality}'`}
              </Typography>
            </Box>
          )}
          {!isLoading && doctorsData.length === 0 ? (
            <Typography
              variant="body2"
              sx={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.54)", mb: "0.5rem" }}
            >
              {`No results found for '${name || speciality}'`}
            </Typography>
          ) : (
            <>
            <Box sx={{display:'flex', justifyContent:'flex-end'}}>
              <Box sx={specialityDropdownWrapper}>
                <Typography variant="h4" sx={{ fontSize: "2rem", mb: "0.5rem" }}>
                  {`Showing results for : '${speciality}'`}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "2rem",
                    color: "rgba(0, 0, 0, 0.54)",
                    mb: "0.5rem",
                  }}
                >
                  {`${doctorsData.length} doctors found`}
                </Typography>
                </Box>
                <Box sx={{ width:'44vw'}}></Box>
                <Box>
                <FormControl variant="standard" sx={{ minWidth: 120, width: "10vw" }}>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{ fontSize: '2rem' }}>
                    Items per page
                  </InputLabel>
                  <NativeSelect
                    id="demo-simple-select"
                    value={itemsPerPageFilter}
                    onChange={handleItemsPerPageFilter}
                    size="large"
                    sx={{ fontSize: '2rem' }}
                  >
                    {itemsPerPage.map((count) => (
                      <option key={count} value={count}>
                        {count}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
                </Box>
                </Box>
              <Box>
                <Doct key={itemsPerPageFilter} displayedData={doctorsData.slice(0, itemsPerPageFilter)} />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Spdet;