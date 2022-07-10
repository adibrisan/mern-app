import React from "react";

import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

import "./PlaceList.css";

const PlaceList = (props) => {
  return (
    <>
      {props.items.length === 0 ? (
        <div className="place-list center">
          <Card>
            <h2>No places found. Maybe create one?</h2>
            <Button to="/places/new">Share Place</Button>
          </Card>
        </div>
      ) : (
        <ul className="place-list">
          {props.items.map((place) => (
            <PlaceItem
              key={place.id}
              id={place.id}
              image={place.imageUrl}
              title={place.title}
              description={place.desctiption}
              address={place.address}
              creatorId={place.creator}
              coordinates={place.location}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default PlaceList;
