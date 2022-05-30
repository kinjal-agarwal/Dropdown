import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "./Countries.css";

const Countries = ({ lang }) => {
  
  
  return (
     <Autocomplete
        id="country-select-demo"
        sx={{ width: 300 }}
        options={lang}
        style={
          {
            alignSelf: "center",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "17px"
          }
        }
        autoHighlight
        getOptionLabel={(option) => option.country}
        renderOption={(props, option) => (
          <Box component="li"  {...props} >

            {option.country}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            type="text"
            {...params}
            className="search"
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
      />

  );
};
export default Countries;