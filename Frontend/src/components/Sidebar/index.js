import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import logo from "./logo-xd.gif";
import "./index.scss";
import { Waypoint } from "..";

export default class Sidebar extends Component {
  render() {
    const waypoints = this.props.waypoints || [];
    return (
      <div className="sidebar">
        <img src={logo} className="logo" />

        <h1>Status</h1>
        <p> aktualna pozycja: x,y,z; stan: leci, </p>
        <p> </p>

        <h1>Trasa [Load][Save]</h1>
        <div className="waypoints">
          {waypoints.map((x, i) => (
            <Waypoint
              key={`waypoint_${i}`}
              i={i}
              n={waypoints.length}
              {...x}
              onDelete={() => this.props.onWaypointDelete?.(i)}
              onUp={() => this.props.onWaypointMoveUp?.(i)}
              onDown={() => this.props.onWaypointMoveDown?.(i)}
            />
          ))}
        </div>

        <Grid container className="actions">
          <Button
            className="actions__start"
            variant="contained"
            color="primary"
          >
            Start
          </Button>
          <Button className="actions__stop" variant="contained" color="primary">
            Stop
          </Button>
        </Grid>
      </div>
    );
  }
}
