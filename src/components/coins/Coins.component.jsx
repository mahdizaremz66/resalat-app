import React from "react";
import './Coins.css'

const CoinsComponent = ({ data }) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Logo</th>
                    <th scope="col">Symbol</th>
                    <th scope="col">Price</th>
                    <th scope="col">24 %</th>
                    <th scope="col">Volume</th>
                    <th scope="col">Market Cap</th>
                </tr>
            </thead>
            <tbody className="table-group-divider"> 
                {
                    data.map(coin => (
                        <tr key={coin.market_cap_rank}>
                            <th scope="row">{coin.market_cap_rank}</th>
                            <td><img src={coin.image} alt="logo" className="logo-symbol" /></td>
                            <td>{coin.symbol}</td>
                            <td>{coin.current_price} $</td>
                            <td>{coin.price_change_percentage_24h} %</td>
                            <td>{coin.total_volume} $</td>
                            <td>{coin.market_cap} $</td>                            
                        </tr>

                    ))               
             }
            </tbody>
        </table>

    )
}

export default CoinsComponent;