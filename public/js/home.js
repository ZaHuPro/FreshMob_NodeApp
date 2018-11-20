$(document).ready(function () {
    $(document).on('click', '#join', function () {
        $("#outPutMsg").html("No Text");
        console.log("username : " + $("#inputUserName").val() + " << password : " + $("#inputPassword").val() + " << email: " + $("#inputEMali").val() + " << firstname: " + $("#inputFirstName").val() + " << lastname:" + $("#inputLastName").val() + " << phone: " + $('#inputPhone').val());
        $.ajax({
            type: 'POST',
            url: '/userregister',
            data: {
                username: $("#inputUserName").val(),
                password: $("#inputPassword").val(),
                email: $("#inputEMali").val(),
                firstname: $("#inputFirstName").val(),
                lastname: $("#inputLastName").val(),
                phone: $("#inputPhone").val()
            },
            success: function (data) {
                console.log("User Add Success");
                UpdateinPage(data);
                console.log(data);
            }
        })
    });

    $(document).on('click', '#login', function () {
        $("#outPutMsg").html("No Text");
        console.log("username : " + $("#inputUserName").val() + " << password : " + $("#inputPassword").val() + " << email: " + $("#inputEMali").val() + " << firstname: " + $("#inputFirstName").val() + " << lastname:" + $("#inputLastName").val() + " << phone: " + $('#inputPhone').val());
        $.ajax({
            type: 'POST',
            url: '/userlogin',
            data: {
                username: $("#loginUserName").val(),
                password: $("#loginPassword").val(),
            },
            success: function (data) {
                if (data != null) {
                    console.log("Id is Correct");
                    UpdateinPage(data);
                    console.log(data);
                } else {
                    alert("Invalid username and password!");
                }


            }
        })
    });

    function UpdateinPage(data) {
        var MyText;
        MyText = "<p class='output'> First Name : <span>" + data.firstname + "</span></p>"
        MyText += "<p class='output'> Last Name : <span>" + data.lastname + "</span></p>"
        MyText += "<p class='output'> UserName : <span>" + data.username + "</span></p>"
        MyText += "<p class='output'> Password : <span>" + data.password + "</span></p>"
        MyText += "<p class='output'> Email : <span>" + data.email + "</span></p>"
        MyText += "<p class='output'> Phone : <span>" + data.phone + "</span></p>"

        $("#outPutMsg").html(MyText);
    }
});