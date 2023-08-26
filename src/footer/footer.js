import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        p: "7rem",
        zIndex: 1201,
        borderTop: "1px solid",
        backgroundColor: "#eeeeee",
        borderTopColor: "#e0e0e0",
        position: "sticky",
      }}
    >
      <p style={{fontSize:'2.2rem'}}>This is some content in sticky footer</p>
    </Box>
  );
}