import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { city } from '../actions';
import { weatherByCity, currentLocApi } from '../Service/api';
import { Button , From} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';


const Dashboard = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(()=>{
        
    })
    const resp = useSelector((state => state.cityResopnse));
    const data = useSelector((state => state.city))
    const cur = useSelector((state => state.cur));
    const email = useSelector((state => state.email));
    const onValueCity = (e) => {
        dispatch(city({ [e.target.name]: e.target.value }))
    }
    const submitCity = () => {
        dispatch(weatherByCity(data, email));
        history.push("/login");
    }
    const currentCity = () => {
        if (!navigator.geolocation) {
            // setState('Geoloaction is not Supported')
        } else {
            // setState("Loacting...");
            navigator.geolocation.getCurrentPosition((location) => {
                // setState(null);;
                const lat = (location.coords.latitude);
                const log = (location.coords.longitude);
                dispatch(currentLocApi(lat, log));
            })
        }
    }

    return (
        <>
            <h3> Dashboard </h3>
            {/* <form onSubmit={() => submitCity()} > */}
            <form >
                City:<input name="city" type="text" placeholder="ENTER CITY NAME" onChange={(e) => onValueCity(e)} />
                <br>
                </br>
                <Button onClick={() => submitCity()} variant="primary" type="submit" > Search City </Button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th> id </th>&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>main</th>&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>description</th>&nbsp;&nbsp;&nbsp;&nbsp;

                    </tr>
                </thead>
                <tbody>
                    {
                        resp.map(post => (
                            <tr>
                                <td>{post.id}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                                <td>{post.main}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                                <td>{post.description}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                                <td>{post.userId}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Button onClick={() => currentCity()} variant="primary" type="submit" > Current Location </Button>

            <br></br>
            <table>
                <thead>
                    <tr>
                        <th> id </th>&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>main</th>&nbsp;&nbsp;&nbsp;&nbsp;
                        <th>description</th>&nbsp;&nbsp;&nbsp;&nbsp;

                    </tr>
                </thead>
                <tbody>
                    {
                        cur.map(post => (
                            <tr>
                                <td>{post.id}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                                <td>{post.main}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                                <td>{post.description}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Dashboard;