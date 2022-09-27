import './styles.css'
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import esriConfig from "@arcgis/core/config";

esriConfig.apiKey = import.meta.env.VITE_API_KEY; 

const map = new Map({
  basemap: "arcgis-topographic"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 12
});

view.when(() => {
  console.log("Map is loaded");
})
