import React from 'react';


const CityTable = (props) => {
    return (
        <div>
            <table style={{margin:"8px" , border:"1px solid red"}} >
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
            </table>
        </div>
    );
};

export default CityTable;