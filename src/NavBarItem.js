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

    const styles = {};
    if (selected) {
        styles.fontWeight = "bold";
    }

    return (
        <div className={classnames({ "ml-2": !first }, "navbar-item-container centered")} onClick={() => history.push(route)}>
            <span className="navbar-item centered" style={styles}>
                {label}
            </span>
            <div className={className} />
        </div>
    );
};

export default NavBarItem;
