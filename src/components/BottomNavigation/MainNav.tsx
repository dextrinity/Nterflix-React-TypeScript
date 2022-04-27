import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation, { BottomNavigationProps} from "@mui/material/BottomNavigation";
import BottomNavigationAction, { BottomNavigationActionProps } from "@mui/material/BottomNavigationAction";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'
import { alpha, styled } from '@mui/material/styles';

const CustomizedNav = styled(BottomNavigation)<BottomNavigationProps>(({ theme }) => ({
  backgroundColor: "#2d313a",
  position: "fixed",
  bottom: 0,
  width: "100%",
  
 
}));

const CustomizedNavAction = styled(BottomNavigationAction)<BottomNavigationActionProps>(({ theme }) => ({
  color: "white",
  '&:hover, &.Mui-focusVisible': {
    color: "red",

  },
}));



export default function SimpleBottomNavigation() {



  const [value, setValue] = React.useState(0);
  const history = useNavigate();

  // useEffect(()=> {
  //   if (value === 0) history("/");
  //   else if (value === 1) history("/movies");
  //   else if (value === 2) history("/tvshows");
  //   else if (value === 3) history("/search");
  // }, [value, history]);

  const navigateTo = (value) => {
    if (value === 0) history("/");
    else if (value === 1) history("/movies");
    else if (value === 2) history("/tvshows");

  }

  return (
    // <Box sx={{ 
    // width: "100%",  
    // bottom: 0,
    // backgroundColor: "#2d313a",
    // Zindex: 100,
    // position: "fixed" }}>
      
      <CustomizedNav
        showLabels
        value={value}
        onChange={(event, newValue) => {
          navigateTo(newValue);
        }}

      >
        <CustomizedNavAction label="Trending" icon={<WhatshotIcon />} />
        <CustomizedNavAction label="Movies" icon={<MovieIcon />} />
        <CustomizedNavAction label="TV Shows" icon={<LiveTvIcon />} />
      </CustomizedNav>
      // </Box>
  );
}
