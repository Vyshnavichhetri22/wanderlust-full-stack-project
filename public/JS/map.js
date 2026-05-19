const mapDiv = document.getElementById("map");

if (mapDiv) {
    const coords = JSON.parse(mapDiv.dataset.coords);
    const title = mapDiv.dataset.title;

    console.log("MAP JS LOADED");

    const map = new maplibregl.Map({
        container: 'map',
        style: "https://tiles.openfreemap.org/styles/bright",
        center: coords,
        zoom: 9,
    });

    const markerImg = document.createElement("img");
    markerImg.src = "/images/Airbnb.jpeg";
    markerImg.classList.add("airbnb-marker");

    new maplibregl.Marker({ element: markerImg })
    .setLngLat(coords)
    .setPopup(new maplibregl.Popup({ offset: 25 }).setHTML(
        `<h4>${title}</h4><p>Exact Location will be provided after booking</p>`
    ))
    .addTo(map);

    map.flyTo({
        center: coords,
        zoom: 14,
    });
   
};