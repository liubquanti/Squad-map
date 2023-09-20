    // Get your own API Key on https://myprojects.geoapify.com
    const myapiKey = "c9368ddddcb94c50aade1db06d23c633";
  
    // The Leaflet map Object
    const map = L.map('map', {zoomControl: false}).setView([38.908838755401035, -77.02346458179596], 12);
  
    // Retina displays require different mat tiles quality
    const isRetina = L.Browser.retina;
  
    const baseUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=c9368ddddcb94c50aade1db06d23c633";
    const retinaUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey=c9368ddddcb94c50aade1db06d23c633";
  
    // Add map tiles layer. Set 20 as the maximal zoom and provide map data attribution.
    L.tileLayer(isRetina ? retinaUrl : baseUrl, {
      attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" rel="nofollow" target="_blank">(c) OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" rel="nofollow" target="_blank">(c) OpenStreetMap</a> contributors',
      apiKey: myapiKey,
      maxZoom: 20,
      id: 'osm-bright'
    }).addTo(map);
  
    // add a zoom control to bottom-right corner
    L.control.zoom({
      position: 'bottomright'
    }).addTo(map);