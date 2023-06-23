import { Outlet} from "react-router-dom";

function Root() {

    return (
        <div className="Root" id="details">
           <Outlet />
        </div>
    );
}

export default Root;