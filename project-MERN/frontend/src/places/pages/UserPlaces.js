import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const UserPlaces = () => {
  const userId = useParams().userId;
  const PLACES = [
    {
      id: "p1",
      title: "Mitsuike Park",
      address:
        "2-chōme-28 Kajiyama, Tsurumi Ward, Yokohama, Kanagawa 230-0072, Japan",
      description:
        "A 30-hectare park featuring 3 ponds, cherry trees, a swimming pool, tennis courts & softball fields.",
      imageUrl:
        "https://images.unsplash.com/photo-1519882189396-71f93cb4714b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      coordinates: {
        lat: 35.5286253,
        lng: 139.6594703,
      },
      creator: "u1",
    },
    {
      id: "p2",
      title: "Empire State Building",
      address: "20 W 34th St, New York, NY 10001, United States",
      description:
        "A 102-story Art Deco skyscraper in Midtown Manhattan in New York City, United States.",
      imageUrl:
        "https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80",
      coordinates: {
        lat: 40.7485492,
        lng: -73.9879522,
      },
      creator: "u2",
    },
  ];
  return (
    <PlaceList places={PLACES.filter((place) => place.creator === userId)} />
  );
};

export default UserPlaces;
