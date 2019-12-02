import { ClientStyle } from '../templates/ClientStyle'

import React from "react";

export function Client({ client }) {
    return (<ClientStyle>
        {Object.keys(client).map(x => <p>{x}</p>)}
    </ClientStyle>
    );
}