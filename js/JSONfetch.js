fetch("imageSlider.JSON")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                alert('error: ' + err);
            });

function appendData(data) {
    $("#construction-img").attr("src", data[0].path);
    $("#image2slider").attr("src", data[1].path);
    $("#image3slider").attr("src", data[2].path);
    $("#image4slider").attr("src", data[3].path);

}