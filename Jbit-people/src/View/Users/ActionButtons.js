import React from "react";

const ActionButtons = props => (
  <ul class="right hide-on-med-and-down">
    <li>
      <a onClick={props.onRefresh}>
        <i class="material-icons">refresh</i>
      </a>
    </li>
    <li>
      <a onClick={props.onLayoutChange}>
        <i class="material-icons">
          {props.isGrid ? "view_list" : "view_module"}
        </i>
      </a>
    </li>
  </ul>
);

export default ActionButtons;
