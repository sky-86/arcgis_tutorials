import './styles.css'
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import esriConfig from "@arcgis/core/config";

esriConfig.apiKey = import.meta.env.VITE_API_KEY; 

const map = new Map({
  basemap: "arcgis-topographic",
  ground: "world-elevation"
});

const view = new SceneView({
  map: map,
  container: "viewDiv",
  camera: {
    position: {
      x: -118.808, //Longitude
      y: 33.961, //Latitude
      z: 2000 //Meters
    },
    tilt: 75
  }
});

view.when(() => {
  console.log("Map is loaded");
})
