import React, { useEffect, useState } from "react";
import Spinner from "../components/ui/Spinner.component";
import axios from "axios";
import { baseUrl } from "../constans/api"
import CoinsComponent from "../components/coins/Coins.component";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [error, setError] = useState([""]);

  useEffect(() => {
    setLoading(true);
    axios(baseUrl)
      .then((response) => {
        setLoading(false)
        setData (response.data);

      })
      .catch(error => {
        setError("An Error Occured");
      });

  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Crypto Tracking</h1>
          <h4>A place to manage all of your trade informations and actions</h4>
          <h4>Do not forget to always using asset and risk management!!!!!</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          
          {loading ? <Spinner /> : error !== "" ? <h1>{error}</h1> : <CoinsComponent data={data} />}


          {<CoinsComponent data={data} />}
        </div>
      </div>



    </div>
  )
}

export default HomePage;
