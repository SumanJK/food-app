function navbar() {
  return `<div id="navbar">
    <div id="searchBar">
        <div id="icon">
        <a href="index.html"><h1 id="title">MEALS JUNCTION</h1></a>
        
        </div>
        <input type="text" id="searchTerm" oninput="showCancel()" placeholder="Search">
        <div id="button"></div>
        <button id="searchButton" ><img src="https://img.icons8.com/ios-glyphs/60/000000/search--v1.png"/></button>
        <a href="random.html">random</a>
        <a href="trending.html">trending</a>
    </div>
</div>`;
}

export default navbar;
