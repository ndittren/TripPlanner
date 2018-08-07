const mapboxgl = require("mapbox-gl");

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png'
};


const buildMarker = (type, coords) => {
  if (type === 'hotels'){
    let markEl = document.createElement("div");
    markEl.style.width = "32px";
    markEl.style.height = "39px";
    markEl.style.backgroundImage = `url(${iconURLs.hotels})`;
    return new mapboxgl.Marker(markEl).setLngLat(coords)
    } else if (type === 'restaurants'){
      let markEl = document.createElement("div");
      markEl.style.width = "32px";
      markEl.style.height = "39px";
      markEl.style.backgroundImage = `url(${iconURLs.restaurants})`;
        return new mapboxgl.Marker(markEl).setLngLat(coords)
      } else if (type === 'activities'){
        let markEl = document.createElement("div");
        markEl.style.width = "32px";
        markEl.style.height = "39px";
        markEl.style.backgroundImage = `url(${iconURLs.activities})`;
        return new mapboxgl.Marker(markEl).setLngLat(coords)
      }
};

module.exports = buildMarker;
