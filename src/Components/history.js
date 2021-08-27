import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { historyGet } from '../Service/api';

const History = () => {
    const email = useSelector((state => state.email))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(historyGet(email));
    }, []);
    const history = useSelector((state => state.history))
    console.log("his",history)
    return (
        <>
            <h3> History page </h3>

            <table>
                <thead>
                    <tr>
                        <th> id </th>&nbsp;&nbsp;
                        <th>email</th>&nbsp;&nbsp;
                        <th>city</th>&nbsp;&nbsp;
                        <th>Date</th>&nbsp;&nbsp;

                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(data => (
                            <tr>
                                <td>{data._id}</td>&nbsp;&nbsp;
                                <td>{data.email}</td>&nbsp;&nbsp;
                                <td>{data.city}</td>&nbsp;&nbsp;
                                <td>{data.date}</td>&nbsp;&nbsp;   
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default History;