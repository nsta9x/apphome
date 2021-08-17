import React from "react";
import Device from "./Device.jsx"

const DeviceManagement = ({ listDevice }) => {
    return (
    <main>
        <Device device = {listDevice[0]}></Device>
        <Device device = {listDevice[1]}></Device>
    </main>
    )
}

export default DeviceManagement;