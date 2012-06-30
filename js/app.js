$(function() {

    $("#convert").click(function() {
        var uri = $("#querystring").val()
        var queryString = {}
        uri.replace(
            new RegExp("([^?=&]+)(=([^&]*))?", "g"), function($0, $1, $2, $3) {
                queryString[$1] = $3
            })

        var appendStr = ""
        for (var key in queryString) {
            if (queryString.hasOwnProperty(key)) {
                appendStr = appendStr + "<tr><td>" + key + "</td>" + "<td>" + queryString[key] + "</td></tr>"
            }
        }

        $('#result > tbody').empty()
        $('#result > tbody:last').append(appendStr)

    })

})
