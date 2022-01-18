import * as React from "react";
import "./scss/NotFound.scss";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const NotFound = () => {
    const history = useHistory();

    return (
        <div className="not-found-container h-100">
            <div style={{ marginBottom: 20 }}>Oops!  We couldn't find that page! (404)</div>
            <Button color="info" onClick={() => history.push("/about")} variant="outlined">Back to Home</Button>
        </div>
    )
};

export default NotFound;