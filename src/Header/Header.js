import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import MoreT from "../MoreTools/MoreT";
import Login from "../Login/Login";
import "tippy.js/themes/light.css";

const Header = ({ search, setSearch }) => {
    return (
        <div className="header">
            <div className="header__first">
                <img
                    src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                    alt="filpkart logo"
                />
                <div className="header__first1">
                    <span
                        style={{
                            fontSize: "11px",
                            color: "white",
                            fontStyle: "italic",
                        }}
                    >
                        Explore
                    </span>
                    <span
                        style={{
                            color: "#f9e107",
                            fontSize: "11px",
                            fontStyle: "italic",
                        }}
                    >
                        Plus
                    </span>
                    <span>
                        <img
                            width="10"
                            src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                            alt="Error"
                        />
                    </span>
                </div>
            </div>
            <div className="header__second">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for products"
                    type="text"
                />
                <SearchIcon />
            </div>
            <div className="header__third">
                <Tippy
                    // visible={true}
                    theme="light"
                    content={<Login></Login>}
                    interactive={true}
                    offset={[5, 18]}
                >
                    <button>Login</button>
                </Tippy>
            </div>
            <div className="header__fourth">
                <p>Become a Seller</p>
            </div>
            <div className="header__fifth">
                <Tippy
                    theme="light"
                    content={<MoreT></MoreT>}
                    interactive={true}
                    offset={[5, 18]}
                >
                    <span>More</span>
                </Tippy>
                <ExpandMoreIcon />
            </div>
            <div className="header__sixth">
                <ShoppingCartIcon />
                <p>Cart</p>
            </div>
        </div>
    );
};

export default Header;
