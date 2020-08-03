import React, {useEffect} from 'react';
import './HomePage.css';

const HomePage = (props) => {
    const {
        renderWeather,
        geolocation,
        city,
        changeCity,
        weather,
        getWeather,
        getGeoFromLS,
    } = props;

    const fetchWeather = async(data, obj) => {
        await getGeoFromLS();
        if(data || geolocation){
            const query = data ? data : `lat=${geolocation.latitude}&lon=${geolocation.longitude}`;
            const fetchData = async () => {
                return getWeather(query, obj);
            };
            return fetchData();
        }
    };

    useEffect(() => {
        if(){
            fetchWeather();
        }

    }, [weather, fetchWeather]);

    const renderSelectCity = () => {
        return <div>
            <select name={'select_city'}
                    defaultValue={'Choose another city'}
                    onChange={(e) => changeCity(e.target.value)}
                    id={'select_city'}>
                <option value={'Choose another city'} disabled hidden>Choose another city</option>
                <option value={'London'}>London</option>
                <option value={'Moscow'}>Moscow</option>
                <option value={'Minsk'}>Minsk</option>
                <option value={'Kyiv'}>Kyiv</option>
                <option value={'Warsaw'}>Warsaw</option>
            </select>
            {
                city
                    ? <button disabled={city === weather.city}
                        onClick={() => fetchWeather(`q=${city}`, {method: 'push', nextUrl: `/city/${city.toLowerCase()}`})}>
                        Get weather for {city}
                    </button>
                    : null
            }
        </div>
    };

    return (
        <section>
            {renderWeather()}
            {renderSelectCity()}
        </section>
    );
};

export default HomePage;