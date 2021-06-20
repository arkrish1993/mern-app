import React, { useState } from "react";
import Button from "../../shared/components/Form/Button";
import Card from "../../shared/components/UI/Card";
import Map from "../../shared/components/UI/Map";
// import ReactGoogleMap from "../../shared/components/UI/ReactGoogleMap";
import Modal from "../../shared/components/UI/Modal";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const openMap = () => {
    setShowMap(true);
  };

  const closeMap = () => {
    setShowMap(false);
  };

  const openDeleteConfirm = () => {
    setShowConfirm(true);
  };

  const closeDeleteConfirm = () => {
    setShowConfirm(false);
  };

  const deleteHandler = () => {
    closeDeleteConfirm();
    console.log("DELETING...");
  };

  return (
    <>
      <Modal
        show={showConfirm}
        onCancel={closeDeleteConfirm}
        header="Confirm Delete"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={closeDeleteConfirm}>
              CANCEL
            </Button>
            <Button danger onClick={deleteHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <p>Are you sure you want to delete this place?</p>
      </Modal>
      <Modal
        show={showMap}
        onCancel={closeMap}
        header={props.place.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMap}>CLOSE</Button>}
      >
        <div className="map-container">
          {/* <ReactGoogleMap
            coordinates={props.place.coordinates}
            defaultZoom={8}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          /> */}
          <Map center={props.place.coordinates} zoom={16} />
        </div>
      </Modal>
      <li className="place-item">
        <Card>
          <div className="place-item__image">
            <img src={props.place.imageUrl} alt={props.place.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.place.title}</h2>
            <h3>{props.place.address}</h3>
            <p>{props.place.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMap}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.place.id}`}>EDIT</Button>
            <Button onClick={openDeleteConfirm} danger>
              DELETE
            </Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
