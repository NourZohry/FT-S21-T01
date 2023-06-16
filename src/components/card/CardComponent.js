import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Box, useMediaQuery } from "@mui/material";
import "./CardComponent.css";

export const CardComponent = ({ cardData, searchTags, setSearchTags }) => {
  function addSkillToSearchTags(skill) {
    if (!searchTags.includes(skill)) {
      setSearchTags([...searchTags, skill]);
    }
  }

  const matches = useMediaQuery("(min-width:800px)");

  return (
    <Card sx={{ minWidth: 275, maxWidth: "80vw", mb: "20px", mx: "auto", borderLeft: "4px solid #58a9a7" }}>
      <CardContent sx={{ ml: "5px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: matches === true ? "row" : "column" }}>
          <Box sx={{ display: "flex ", gap: "20px" }}>
            <Box>
              <img
                alt={cardData.company}
                src={require("../../images/" + cardData.img + ".svg")}
              />
            </Box>

            <Box
              sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
              mb={1}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <h1 className="company">{cardData.company}</h1> {cardData.post && <h4 className="post">{cardData.post}</h4>} {cardData.featured && <h4 className="featured">{cardData.featured}</h4>}
              </Box>
              <h2 className="job">{cardData.jobtitle}</h2>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <h3 className="jobdetails">
                  {cardData.time} <span className="bullet">•</span> {cardData.contract} <span className="bullet">•</span> {cardData.location}
                </h3>
              </Box>
            </Box>
          </Box>
          <CardActions>
            <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {cardData.skill.map((skill, i) => {
                return (
                  <h5
                    onClick={() => addSkillToSearchTags(skill)}
                    key={i}
                    className="skill"
                  >
                    {skill}
                  </h5>
                );
              })}
            </Box>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};
