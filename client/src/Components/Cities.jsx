import { useDispatch } from 'react-redux';

import { setWeather } from '../features/slices/weatherSlice';

const Cities = (props) => {
    const dispatch = useDispatch();

    const handleCityClick = (city) => {
        dispatch(setWeather(city));
    };

    const cities = props.cities.map((city, index) => (
        <li key={index} className="li" onClick={() => handleCityClick(city)}>
            {city}
        </li>
    ));

    return <ul className="ul">{cities}</ul>;
};

export default Cities;