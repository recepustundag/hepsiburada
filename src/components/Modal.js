import React from "react";
import { useDispatch } from "react-redux";
import { RemoveToCart } from "../actions/cart";

const Modal = ({id}) => {

  const dispatch = useDispatch();
  
  return (
    <div id="open-modal" className="modal-window" data-testid="modalContainer">
      <div>
        <a href="/#" className="modal-close" data-testid="modalClosebutton">
          Kapat
        </a>
        <div className="title" data-testid="modalTitle">Ürünü silmek istediğinize emin misiniz?</div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall....
        </p>
        <div className="modal-footer">
          <button onClick={() => dispatch(RemoveToCart(id))} data-testid="removeCartItem" >Evet</button>
          <a href="/#" className="cancel" data-testid="modalFooterCloseButton">Hayır</a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
