function _makeRequest(url) {
    return $.ajax({
        method: "GET",
        url: url,
        dataType: 'jsonp'
    });
}