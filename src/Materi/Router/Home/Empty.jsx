import React from "react";
import { useParams } from "react-router-dom";

const Empty = () => {
    const data = useParams();

    return (
        <div className="d-flex justify-content-center mt-5">
            Halaman Ini Menggunakan Params {data.params}
        </div>
    )
}

export default Empty;