import React from "react";

export interface SearchProps {}

const Search: React.FunctionComponent<SearchProps> = (props) => {
  return (
    <div>
      <span className="pageTitle">Search</span>
    </div>
  );
};

export default Search;
