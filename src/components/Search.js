import React from "react";

function Search({searchQuery, setSearchQuery}) {
  console.log('searchQuery', searchQuery)
// const [searchQuery, setSearchQuery] = useState("");
// const [filteredName, setFilteredName] = useState("");

  // function handleSearch(e){
  //   console.log('yerr', e.target);
  // }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
