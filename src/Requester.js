import $ from 'jquery';

function _makeRequest(lat, lon) {
    let url = "https://api.darksky.net/forecast/75a865c6e798d8b985688c027348ba0d/" + lat + "," + lon;
    return $.ajax({
        method: "GET",
        url: url,
        dataType: 'jsonp'
    });
}

export default _makeRequest;