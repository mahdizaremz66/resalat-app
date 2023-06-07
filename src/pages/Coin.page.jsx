import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { detailsUrl } from '../constans/api';
import axios from 'axios';
import CoinsDetailComponent from '../components/coins/CoinDetails.component';
import Spinner from "../components/ui/Spinner.component";


const CoinPage = () => {
    const paramObject = useParams();
    const url = detailsUrl(paramObject.id);

    console.log(url);
    
    const [coin, setCoin] = useState({});
    const [loading, setLoading] = useState([false]);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        axios(url)
            .then((response) => {
                setLoading(false)
                setCoin(response.data);
            })
            .catch(error => {
                setError("An Error Occured");
            });
    }, [url]);


    return (
        <div className='container'>
            {
                loading ? <Spinner /> : error !== "" ? <h1>{error}</h1> : <CoinsDetailComponent coin={coin} />
            }
        </div>
    )
}

export default CoinPage;