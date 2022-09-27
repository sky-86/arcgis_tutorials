import './styles.css'
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import esriConfig from "@arcgis/core/config";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";

esriConfig.apiKey = import.meta.env.VITE_API_KEY; 

const map = new Map({
  basemap: "streets-vector"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 12
});

// BaseMap Toggle
const basemapToggle = new BasemapToggle({
  view: view,
  nextBasemap: "arcgis-imagery"
});
view.ui.add(basemapToggle,"bottom-right");

// BaseMap Gallery
const basemapGallery = new BasemapGallery({
  view: view,
  source: {
    query: {
      title: '"World Basemaps for Developers" AND owner:esri'
    }
  }
});
view.ui.add(basemapGallery, "top-right"); // Add to the view

view.when(() => {
  console.log("Map is loaded");
})
