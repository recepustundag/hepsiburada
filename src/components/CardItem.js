import React, { Suspense } from "react";

const Modal = React.lazy(() => import("./Modal"));

const CardItem = ({ id, image, title }) => {
  return (
    <>
      <div className="shopping-card__item">
        <div>
          <img data-testid="cartItemImage" src={image} alt={title} />
        </div>
        <div>
          <p data-testid="cartItemTitle">{title}</p>
          <a href="#open-modal" className="btn-remove" data-testid="openModal">
            Kaldır
          </a>
        </div>
      </div>
      <Suspense fallback={<div>Yükleniyor...</div>}>
        <Modal id={id} />
      </Suspense>
    </>
  );
};

export default CardItem;
