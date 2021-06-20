import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/Form/Input";
import Button from "../../shared/components/Form/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../hooks/form-hook";
import "./PlaceForm.css";
import Card from "../../shared/components/UI/Card";

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
    creator: "u1",
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <Card>
          <h2>Loading...</h2>
        </Card>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={submitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
