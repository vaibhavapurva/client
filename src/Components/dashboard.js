import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { city , currentLoc } from '../actions';
import { weatherByCity ,currentLocApi } from '../Service/api';

const Dashboard=()=>{
    const dispatch = useDispatch();
     const history = useHistory();
    const data = useSelector((state => state.city))
    const res = useSelector((state=> state.cityResopnse));
    const cur = useSelector((state => state.cur));
    const email = useSelector((state => state.email));
    console.log(cur) 

    // useEffect(()=>{
    //     dispatch(currentLocApi(lat , log));
    // })
    console.log("data aaa 0",res)
    const onValueCity=(e)=>{
        dispatch(city({  [e.target.name]:e.target.value}))
    }
    const submitCity=()=>{
        dispatch(weatherByCity(data, email));
        history.push("/login");
    }
    const currentCity=()=>{
        if(!navigator.geolocation){
            // setState('Geoloaction is not Supported')
        }else{
            // setState("Loacting...");
            navigator.geolocation.getCurrentPosition((location)=>{
                // setState(null);
                console.log("aaaaaaaaa");
                const lat = (location.coords.latitude);
                const log = (location.coords.longitude);
                console.log(lat , log)
                dispatch(currentLocApi(lat , log));
            })
        }
    }

    return(
        <>
        <h1> Dashboard </h1>
        {/* <form onSubmit={() => submitCity()} > */}
        <form>
                City:<input name="city" type="text" placeholder="ENTER CITY NAME" onChange={(e) => onValueCity(e)} />
                <br>
                </br>
                <button onClick={() => submitCity()} variant="primary" type="submit" > search </button>
                {/* <button onClick={() => currentCity()} variant="primary" type="submit" > current </button> */}
        </form>
        <button onClick={() => currentCity()} variant="primary" type="submit" > current </button>

        <table>
                    <thead>
                        <tr>
                            <th> id </th>
                            <th>main</th>
                            <th>description</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            res.map(post => (
                                <tr>
                                    <td>{post.id}</td>
                                    <td>{post.main}</td>
                                    <td>{post.description}</td>
                                    <td>{post.userId}</td> 
                                </tr>
                            ))
                        }






                    </tbody>
                </table>

                <table>
                    <thead>
                        <tr>
                            <th> id </th>
                            <th>main</th>
                            <th>description</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            cur.map(post => (
                                <tr>
                                    <td>{post.id}</td>
                                    <td>{post.main}</td>
                                    <td>{post.description}</td>
                                    <td>{post.userId}</td> 
                                </tr>
                            ))
                        }






                    </tbody>
                </table>



        </>
    )
}

export default Dashboard;