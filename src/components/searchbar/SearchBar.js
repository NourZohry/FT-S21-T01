import { Box, Paper } from "@mui/material";
import React from "react";
import "./SearchBar.css";
import CloseIcon from "@mui/icons-material/Close";

export const SearchBar = ({ searchTags, setSearchTags }) => {
  function removeSearchTag(tagToRemove) {
    setSearchTags(
      searchTags.filter((searchtag) => {
        return searchtag !== tagToRemove;
      })
    );
  }

  function removeAllSearchTags() {
    setSearchTags([]);
  }

  return (
    <>
      <Paper sx={{ minWidth: 275, maxWidth: "80vw", mb: "20px", mx: "auto", mt: "-25px" }}>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "50px" }}
          pl={2}
          pr={2}
        >
          <Box sx={{ display: "flex", gap: "10px" }}>
            {searchTags.map((searchtag, i) => {
              return (
                <Box
                  key={i}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <h5 className="searchskill">{searchtag}</h5>
                  <CloseIcon
                    onClick={() => removeSearchTag(searchtag)}
                    sx={{ color: "white", backgroundColor: "#58a9a7", height: "100%", borderTopRightRadius: "5px", borderBottomRightRadius: "5px", ":hover": { cursor: "pointer", backgroundColor: "darkgreen" }, transition: "background-color 0.3s" }}
                  />
                </Box>
              );
            })}
          </Box>
          <h5
            onClick={() => removeAllSearchTags()}
            className="clear"
          >
            Clear
          </h5>
        </Box>
      </Paper>
    </>
  );
};
