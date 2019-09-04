


function Authenticate() {

    _data = {
        "Id": 1,
        "FirstName": "Test",
        "LastName": "User",
        "Username": "test",
        "Password": "test"
    };

    $.ajax({

        url: '/api/user/authenticate',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(_data),
        dataType: 'json',
        success: function (data) {
            alert('Data: ' + data);
            document.cookie = "jwt=" + data.token;
        },
        error: function (request, error) {
            alert("Request: " + JSON.stringify(request));
        }
    });
}
