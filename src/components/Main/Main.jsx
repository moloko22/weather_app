import React from 'react';
import './Main.css';
import {Route, Switch, Redirect} from "react-router-dom";
import {ROUTES} from "../../constants/routes";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import HomePage from "../../Pages/HomePage/HomePage";
import SelectedCityPage from "../../Pages/SelectedCityPage/SelectedCityPage";

const Main = (props) => {
    const {
        timeTravelBackward,
        geolocation,
        city,
        redirect,
        weather,
        getWeather,
        changeCity,
    } = props;

    const renderWeather = () => {
        if(!weather) return;
        return <div className={'weather_wrapper'}>
            <div>
                <div className={'weather_geolocation'}>
                    <svg data-v-740df42c="" data-v-6206e1dc="" viewBox="0 0 736 980"
                         className="icon-geo-location" style={{'marginRight': '4pt', 'width': '14px', 'minHeight': '20px'}}>
                        <g data-v-740df42c="" transform="translate(0.000000,980.000000) scale(0.100000,-0.100000)"
                           fill="#48484a" stroke="none">
                            <path data-v-740df42c="" d="M3395 9790 c-850 -75 -1592 -401 -2214 -973 -544 -501 -938 -1190
                                -1095 -1917 -148 -684 -96 -1381 161 -2165 400 -1222 1307 -2616 2603 -4000
                                201 -215 574 -584 670 -665 87 -71 165 -88 246 -51 70 32 498 448 824 801
                                1871 2028 2855 3990 2761 5505 -38 608 -207 1163 -510 1674 -582 982 -1595
                                1640 -2736 1777 -153 18 -568 26 -710 14z m507 -1965 c813 -108 1430 -763
                                1487 -1579 70 -991 -713 -1834 -1704 -1836 -457 -1 -889 177 -1213 499 -522
                                518 -655 1304 -333 1966 323 663 1035 1047 1763 950z">
                            </path>
                        </g>
                    </svg>
                    <h4>{weather.city + ',' + weather.country}</h4>
                </div>
                <div className={'weather_main'}>
                    <img src={`https://openweathermap.org/img/wn/${weather.icon}.png`} alt={'weather_icon'}/>
                    <h3>{Math.round(weather.temp)}{`°C`}</h3>
                </div>
                <div className={'weather_description'}>
                    <p>Feels like {Math.round(weather.feels_like)} {`°C`}, {weather.description}, visibility: {weather.visibility/1000}km</p>
                    <ul>
                        <li>Humidity: {weather.humidity}%</li>
                        <li>
                            <svg data-v-7bdd0738="" data-v-c7ed4c70="" viewBox="0 0 96 96"
                                 style={{'marginRight': '4pt', 'width': '25px', 'minHeight': '20px'}}
                                 className="icon-pressure">
                                <g data-v-7bdd0738="" transform="translate(0,96) scale(0.100000,-0.100000)"
                                   fill="#48484a" stroke="none">
                                    <path data-v-7bdd0738="" d="M351 854 c-98 -35 -179 -108 -227 -202 -27 -53 -29 -65 -29 -172 0
                                            -107 2 -119 29 -172 38 -75 104 -141 180 -181 58 -31 66 -32 176 -32 110 0
                                            118 1 175 32 77 40 138 101 178 178 31 57 32 65 32 175 0 110 -1 118 -32 176
                                            -40 76 -106 142 -181 179 -49 25 -71 29 -157 32 -73 2 -112 -1 -144 -13z m259
                                            -80 c73 -34 126 -86 161 -159 24 -50 29 -73 29 -135 0 -62 -5 -85 -29 -135
                                            -57 -119 -161 -185 -291 -185 -130 0 -234 66 -291 185 -24 50 -29 73 -29 135
                                            0 130 66 234 185 291 82 40 184 41 265 3z">
                                    </path>
                                    <path data-v-7bdd0738="" d="M545 600 c-35 -35 -68 -60 -80 -60 -27 0 -45 -18 -45 -45 0 -33 -50
                                            -75 -89 -75 -18 0 -41 -5 -53 -11 -20 -11 -20 -11 3 -35 12 -13 33 -24 46 -24
                                            17 0 23 -6 23 -23 0 -13 10 -33 23 -45 30 -28 47 -13 47 43 0 32 6 47 28 68
                                            15 15 37 27 48 27 26 0 44 18 44 44 0 12 26 47 60 81 l60 61 -28 27 -28 27
                                            -59 -60z">
                                    </path>
                                </g>
                            </svg>
                            {weather.pressure}
                        </li>
                        <li>
                            {weather.wind_speed}m
                            <svg data-v-47880d39="" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000"
                                 xmlSpace="preserve" className="icon-wind-direction" style={{transform: 'rotate(320deg)', 'marginRight': '4pt', 'width': '15px', 'minHeight': '15px'}}><g data-v-47880d39="" fill="#48484a">
                                <path data-v-47880d39="" d="M510.5,749.6c-14.9-9.9-38.1-9.9-53.1,1.7l-262,207.3c-14.9,11.6-21.6,6.6-14.9-11.6L474,48.1c5-16.6,14.9-18.2,21.6,0l325,898.7c6.6,16.6-1.7,23.2-14.9,11.6L510.5,749.6z"></path><path
                                data-v-47880d39=""
                                d="M817.2,990c-8.3,0-16.6-3.3-26.5-9.9L497.2,769.5c-5-3.3-18.2-3.3-23.2,0L210.3,976.7c-19.9,16.6-41.5,14.9-51.4,0c-6.6-9.9-8.3-21.6-3.3-38.1L449.1,39.8C459,13.3,477.3,10,483.9,10c6.6,0,24.9,3.3,34.8,29.8l325,898.7c5,14.9,5,28.2-1.7,38.1C837.1,985,827.2,990,817.2,990z M485.6,716.4c14.9,0,28.2,5,39.8,11.6l255.4,182.4L485.6,92.9l-267,814.2l223.9-177.4C454.1,721.4,469,716.4,485.6,716.4z"></path></g></svg>
                        </li>
                    </ul>
                </div>
                <span></span>
            </div>
        </div>
    };

    return (
        <main className={'main'}>
                <Switch>
                    <Route exact path={ROUTES.HOME} component={() => <HomePage city={city}
                                                                               renderWeather={renderWeather}
                                                                               geolocation={geolocation}
                                                                               getWeather={getWeather}
                                                                               weather={weather}
                                                                               changeCity={changeCity}

                    />}/>
                    <Route path={ROUTES.SELECTED_CITY} component={() => <SelectedCityPage city={city}
                                                                                          redirect={redirect}
                                                                                          timeTravelBackward={timeTravelBackward}
                                                                                          renderWeather={renderWeather}
                    />}/>
                    <Route path={ROUTES.ABOUT} component={() => <AboutPage/>}/>
                    <Redirect from={ROUTES.UNDEFINED} to={ROUTES.HOME} />
                </Switch>
        </main>
    );
};

export default Main;