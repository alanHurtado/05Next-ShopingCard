import { Box, CircularProgress, Typography } from "@mui/material";

export const FullScreenLoadin = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 200px)"
    >
      <Typography sx={{ mb: 3 }} variant="h3" marginLeft={2}>
        Cargando ...
      </Typography>
      <CircularProgress size={100} thickness={2} />
    </Box>
  );
};
