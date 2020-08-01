import React from 'react';
import './SelectedCityPage.css';

const SelectedCityPage = (props) => {
    const {
        city,
        changeCity,
        weather,
        redirect,
    } = props;

    React.useEffect(() => {
        window.addEventListener('keydown', onCloseHandler);
        return function cleanUp(){
            window.removeEventListener('keydown', onCloseHandler)
        }
    });

    const onCloseHandler = (e) => {
        if(e.code === 'Escape'){
            return redirectFn();
        }
    };

    const redirectFn = () => {
        return redirect('push', '/');
    };

    const renderWeather = () => {
        return <div>
            weather for {city}
        </div>
    };

    const showError = () => {
        return <div className={'modal'}>
            <div className={'modal_content'}>
                <span className={'close'}
                      onClick={() => redirectFn()}
                >&times;</span>
                <p>First of all you should select city.</p>
            </div>
        </div>
    };

    return (
        <div>
            {
                city
                ? renderWeather()
                : showError()
            }
        </div>
    );
};

export default SelectedCityPage;