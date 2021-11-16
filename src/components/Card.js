import React, { Suspense } from "react";

const CardItem = React.lazy(() => import("./CardItem"));

const Card = ({ cartItems, isActive }) => {

  return (
    <div className={`shopping-card ${isActive && "active"}`}>
      <Suspense fallback={<div>Yükleniyor...</div>}>
        {cartItems?.length > 0 ? cartItems.map((item) => <CardItem key={item.id} {...item} />) : <div className="shopping-card__empty" data-testid="notFoundProduct">Sepetiniz boş</div>}
      </Suspense>
    </div>
  );
};

export default Card;
