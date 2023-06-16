import React, { useState } from "react";
import { Cards } from "../cards/Cards";
import { SearchBar } from "../searchbar/SearchBar";
import { Box } from "@mui/material";

export const App = () => {
  const cardsData = [
    {
      id: 1,
      img: "photosnap",
      company: "Photosnap",
      post: "NEW!",
      featured: "FEATURED",
      jobtitle: "Senior Frontend Developer",
      time: "1d ago",
      contract: "Full Time",
      location: "USA only",
      skill: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      img: "manage",
      company: "Manage",
      post: "NEW!",
      featured: "FEATURED",
      jobtitle: "Fullstack Developer",
      time: "1d ago",
      contract: "Part Time",
      location: "Remote",
      skill: ["Fullstack", "Midweight", "Python", "React"],
    },
    {
      id: 3,
      img: "account",
      company: "Account",
      post: "NEW!",
      jobtitle: "Junior Frontend Developer",
      time: "2d ago",
      contract: "Part Time",
      location: "USA only",
      skill: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
    },
    {
      id: 4,
      img: "myhome",
      company: "MyHome",
      jobtitle: "Junior Frontend Developer",
      time: "5d ago",
      contract: "Contract",
      location: "USA only",
      skill: ["Frontend", "Junior", "CSS", "Javascript"],
    },
    {
      id: 5,
      img: "loop-studios",
      company: "Loop Studios",
      jobtitle: "Software Engineer",
      time: "1w ago",
      contract: "Full Time",
      location: "Worldwide",
      skill: ["Fullstack", "Midweight", "Javascript", "Sass", "Ruby"],
    },
    {
      id: 6,
      img: "faceit",
      company: "FaceIt",
      jobtitle: "Junior Backend Developer",
      time: "2w ago",
      contract: "Full Time",
      location: "UK only",
      skill: ["Backend", "Junior", "Ruby", "RoR"],
    },
    {
      id: 7,
      img: "shortly",
      company: "Shortly",
      jobtitle: "Junior Developer",
      time: "2w ago",
      contract: "Full Time",
      location: "Worldwide",
      skill: ["Frontend", "Junior", "HTML", "Sass", "JavaScript"],
    },
    {
      id: 8,
      img: "insure",
      company: "Insure",
      jobtitle: "Junior Frontend Developer",
      time: "2w ago",
      contract: "Full Time",
      location: "USA only",
      skill: ["Frontend", "Junior", "Vue", "JavaScript", "Sass"],
    },
    {
      id: 9,
      img: "eyecam-co",
      company: "Eyecam Co.",
      jobtitle: "Full Stack Engineer",
      time: "3w ago",
      contract: "Full Time",
      location: "Worldwide",
      skill: ["Fullstack", "Midweight", "Javascript", "Django", "Python"],
    },
    {
      id: 10,
      img: "the-air-filter-company",
      company: "The Air Filter Company",
      jobtitle: "Front-end Dev",
      time: "1mo ago",
      contract: "Part Time",
      location: "Worldwide",
      skill: ["Frontend", "Junior", "React", "Sass", "Javascript"],
    },
  ];

  const [searchTags, setSearchTags] = useState([]);

  return (
    <>
      {searchTags.length !== 0 ? (
        <Box sx={{ height: "100px", backgroundColor: "#58a9a7" }}></Box>
      ) : (
        <Box
          sx={{ height: "100px", backgroundColor: "#58a9a7" }}
          mb="45px"
        ></Box>
      )}

      {searchTags.length !== 0 && (
        <SearchBar
          searchTags={searchTags}
          setSearchTags={setSearchTags}
        />
      )}

      <Cards
        cardsData={cardsData}
        searchTags={searchTags}
        setSearchTags={setSearchTags}
      />
    </>
  );
};
