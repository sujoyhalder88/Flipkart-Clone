import React from "react";
import "./Login.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import StoreIcon from "@mui/icons-material/Store";
import "tippy.js/themes/light.css";

function Login() {
    return (
        <div className="login">
            <div className="login__in">
                <h5>New Customer ?</h5>
                <a href="/">
                    <h3>SignUp</h3>
                </a>
            </div>
            <hr />
            <div className="login__in">
                <AccountCircleIcon />
                <p>My Profile</p>
            </div>
            <hr />
            <div className="login__in">
                <img
                    width="20"
                    src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
                    alt=""
                />
                <p>Flipkart Plus</p>
            </div>
            <hr />
            <div className="login__in">
                <StoreIcon />
                <p>Order</p>
            </div>
            <hr />
            <div className="login__in">
                <FavoriteIcon />
                <p>Wishlist</p>
            </div>
            <hr />
            <div className="login__in">
                <ConfirmationNumberIcon />
                <p>Rewards</p>
            </div>
            <hr />
            <div className="login__in">
                <CardGiftcardIcon />
                <p>Giftcard</p>
            </div>
        </div>
    );
}

export default Login;
