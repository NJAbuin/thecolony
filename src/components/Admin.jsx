import React from "react";

import { AdminStyle } from '../templates/AdminStyle'

function Admin(props) {
    return (<AdminStyle>
        <div style={{ color: "blue", backgroundColor: "grey" }}>
            {Object.keys(props.admin).map(prop => <p key={prop} style={{ margin: '2px' }}>{prop}</p>)}
        </div>
    </AdminStyle >
    );
}

export default Admin
