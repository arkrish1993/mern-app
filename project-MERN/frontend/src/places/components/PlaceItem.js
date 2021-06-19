import React, { useState } from "react";
import Button from "../../shared/components/Form/Button";
import Card from "../../shared/components/UI/Card";
import Modal from "../../shared/components/UI/Modal";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal
        show={showModal}
        onCancel={closeModal}
        header={props.place.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeModal}>CLOSE</Button>}
      >
        <div className="map-container">
          <h2>The Map!</h2>
        </div>
      </Modal>
      <li class="place-item">
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
            <Button inverse onClick={openModal}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.place.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
