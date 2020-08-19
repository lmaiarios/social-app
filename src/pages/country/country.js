import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './country.css';

function Country() {
    const {country_name} = useParams();
    const [info, setInfo] = useState();

    const getCountry = () => {
        fetch('https://restcountries.eu/rest/v2/name/'+country_name)
        .then(
            res => res.json()
        )
        .then(
            data => setInfo(data[0])
        )
    }

    useEffect(
        getCountry, []
    )

    return (
        <div className="country">
            {
                info &&
                <>
                    <img id="country-flag" src={info.flag} alt={info.name+' flag'} />
                    <h4>{info.name}</h4>
                    <p>População: {info.population}</p>
                    <p>Área: {info.area}</p>
                </>
            }
        </div>
    );
}

export default Country;