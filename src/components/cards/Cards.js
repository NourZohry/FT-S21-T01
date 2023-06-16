import React from "react";
import { CardComponent } from "../card/CardComponent";

export const Cards = ({ cardsData, searchTags, setSearchTags }) => {
  return cardsData.map((cardData) => {
    // console.log(searchTags);
    // const intersection = cardData.skill.filter(skill => searchTags.includes(skill));
    let isSubArr = searchTags.every((e) => cardData.skill.includes(e));

    // if (searchTags.length === 0 || intersection.length !== 0) {
    if (searchTags.length === 0 || isSubArr === true) {
      return (
        <CardComponent
          key={cardData.id}
          cardData={cardData}
          searchTags={searchTags}
          setSearchTags={setSearchTags}
        />
      );
    }
  });
};
