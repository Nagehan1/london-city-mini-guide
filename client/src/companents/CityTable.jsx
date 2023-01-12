import React from 'react';
import {Table} from "react-bootstrap";

const CityTable = (props) => {
    return (
        <div>
            <Table xm striped bordered hover style={{margin:"8px"}} >
                <thead>
                <tr>
                    <th>name</th>
                    <th>address</th>
                    <th>phone</th>
                    <th>web-site</th>
                </tr>
                </thead>
                <tbody>
                {props.data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.phone}</td>
                            <td><a href={item.website} target={"_blank"}>{item.name}</a> </td>
                        </tr>
                    )}
                )}
                </tbody>
            </Table>
        </div>
    );
};

export default CityTable;