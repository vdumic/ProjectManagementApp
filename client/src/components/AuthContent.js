import { useState, useEffect } from "react";
import { request } from "../axios/axios_helper";

const AuthComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    request("GET", "/dummy", {}).then((response) => {
        console.log(response);
      setData(response.data);
    });
  }, []);

  return (
    <div className="row justify-content-md-center">
      <div className="col-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Backend response</h5>
            <p className="card-text">Content:</p>
            <ul>{data && data.map((line) => <li key={line}>{line}</li>)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
