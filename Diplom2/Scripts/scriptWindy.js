const options = {
    key: '32sFWNgiuR2HVH1fMAmTauVFML3KF3uR',
    verbose: true,
    lat: 56.0,
    lon: 92.55,
    zoom: 4,
};

var pickerObj = null;
var mapObj = null;

function onMapClick(e) {
    pickerObj.open({ lat: e.latlng.lat, lon: e.latlng.lng });
}

function markerOnClick(e) {
    var marker = e.target;
    if (marker.description != null) {
        L.popup({ maxWidth: 640, maxHeight: 480 })
            .setLatLng(e.latlng)
            .setContent("<div style=\"padding-right:40\">" + marker.description + "</div>")
            .openOn(mapObj);
    }
    else {
        $.ajax({
            url: 'Default/GetPlaceMarkJson',
            type: "POST",
            data: { id: marker.stationID },
            dataType: "json",
            success: function (data) {
                marker.description = data.Description;
                L.popup({ maxWidth: 640, maxHeight: 480 })
                    .setLatLng(e.latlng)
                    .setContent("<div style=\"padding-right:40\">" + marker.description + "</div>")
                    .openOn(mapObj);
            },
            error: function (j, s, e) { alert(s + " - " + e) }
        });
    }
}
windyInit(options, windyAPI => {
    const { map, picker, utils } = windyAPI;
    mapObj = map;
    pickerObj = picker;
    map.on('click', onMapClick);
    var tds = document.querySelectorAll('td');
    for (var i = 0; i < tds.length; i++) {

        var n = tds[i].innerHTML;
        var w = parseFloat(tds[i + 1].innerHTML);
        var l = parseFloat(tds[i + 2].innerHTML);
        
        var marker = L.marker([w, l]);
        marker.stationID = i;
        marker.addTo(map).on('click', markerOnClick);
        marker.bindTooltip(n);

        i = i + 3;
    }
});