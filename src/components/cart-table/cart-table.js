import React from 'react';
import './cart-table.css';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../actions';

const CartTable = ({ items, deleteFromCart }) => {
    if (items.length === 0) {
        return (
            <div className="cart__empty">
                Корзина пуста. Пожалуйста, выберите товары в меню.
            </div>
        );
    }

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {items.map((item) => {
                    const { title, price, url, id, amount } = item;
                    return (
                        <div key={id} className="cart__item">
                            <img
                                src={url}
                                className="cart__item-img"
                                alt={title}
                            ></img>
                            <div className="cart__item-title">{title}</div>
                            <div className="cart__item-price">{price}$</div>
                            <div
                                className="cart__close"
                                onClick={() => deleteFromCart(id)}
                            >
                                &times;
                            </div>

                            <div className="cart__item-amount">{amount}</div>

                            <div className="cart__item-total">
                                {amount * price}$
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

const mapStateToProps = ({ items }) => {
    return {
        items,
    };
};

const mapDispatchToProps = {
    deleteFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
