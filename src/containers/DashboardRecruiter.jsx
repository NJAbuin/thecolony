import React from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from '../templates/Dashboard'
import { DashboardR } from '../templates/DashboardR'
import { DashboardL } from '../templates/DashboardL'


function DashboardRecruiter(props) {
    // !!! IF UNAUTH, REDIR TO HOME
    // can be done with private route jsx, might be easier

    //needs a function to do redirect depending on
    // auth permissions

    return (
        <Dashboard>
            <DashboardL>
                <div style={{ gridArea: "titlebarL" }}>
                </div>
                <div style={{ gridArea: "contentL" }}>
                </div>
            </DashboardL>

            <DashboardR>
                <div style={{ gridArea: "titlebarR" }}>
                </div>
                <div style={{ gridArea: "contentR" }}>
                </div>
            </DashboardR>
        </Dashboard>
    )

}

export default DashboardRecruiter
