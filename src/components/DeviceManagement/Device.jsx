import React from "react";

const Device = ({ device }) => {
    return (
      <div class="card border-primary mb-3">
        <div class="card-header">{device.name}</div>
        <div class="card-body text-primary">
            <h5 class="card-title">OK </h5>
            <p class="card-text">This is a content.</p>
        </div>
        <a class="btn btn-primary">SET</a>
    </div>
    )
}
export default Device;