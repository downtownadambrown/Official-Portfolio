import classnames from "classnames";
import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const NavBarItem = ({ label, route, first, altroute }) => {
    const history = useHistory();
    const location = useLocation();
    const selected = location.pathname.includes(route) || location.pathname.includes(altroute);
    const unselected = !location.pathname.includes(route) && !location.pathname.includes(altroute);

    const className = classnames({
        "underline-from-left": unselected,
        "navbar-item-selected": selected,
    }, "navbar-border navbar-item");

    return (
        <div className={classnames({ "ml-2": !first }, "navbar-item-container centered nav__item")} onClick={() => history.push(route)}>
            <span className={classnames({ "font-weight-bold": selected }, "navbar-item nav__link centered")}>
                {label}
            </span>
            <div className={className} />
        </div>
    );
};

export default NavBarItem;
