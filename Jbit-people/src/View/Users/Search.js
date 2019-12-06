import React from "react";
import UserPage from "./UserPage";

const Search = props => (
  <div class="input-field col s6">
    <textarea
      onChange={event => props.onSearch(event.target.value)}
      class="materialize-textarea"
    ></textarea>
    <i class="material-icons prefix">search</i>
  </div>
);

export default Search;
