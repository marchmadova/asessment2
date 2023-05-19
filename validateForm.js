<!DOCTYPE html>
<html>
<head>
    <title>API Form</title>
</head>
<body>
    <form id="apiForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>
        <span id="nameError" style="color: red;"></span><br><br>

        <label for="city">City:</label>
        <input type="text" id="city" name="city" required><br>
        <span id="cityError" style="color: red;"></span><br><br>

        <label for="state">State:</label>
        <input type="text" id="state" name="state" required><br>
        <span id="stateError" style="color: red;"></span><br><br>

        <input type="submit" value="Submit">
    </form>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            $("#apiForm").submit(function(event) {
                event.preventDefault();

                if (validateForm()) {
                    var formData = {
                        name: $("#name").val(),
                        city: $("#city").val(),
                        state: $("#state").val()
                    };

                    // Kirim data ke API menggunakan AJAX
                    $.ajax({
                        url: "https://api.openbrewerydb.org/breweries",
                        type: "POST",
                        dataType: "json",
                        data: formData,
                        success: function(response) {
                            // Tanggapan dari API setelah berhasil dikirim
                            console.log(response);
                            // Lakukan tindakan lanjutan jika diperlukan
                        },
                        error: function(error) {
                            // Tanggapan dari API jika terjadi kesalahan
                            console.log(error);
                            // Lakukan tindakan lanjutan jika diperlukan
                        }
                    });
                }
            });

            function validateForm() {
                var name = $("#name").val();
                var city = $("#city").val();
                var state = $("#state").val();

                var isValid = true;

                if (name.trim() === "") {
                    $("#nameError").text("Name is required");
                    isValid = false;
                } else {
                    $("#nameError").text("");
                }

                if (city.trim() === "") {
                    $("#cityError").text("City is required");
                    isValid = false;
                } else {
                    $("#cityError").text("");
                }

                if (state.trim() === "") {
                    $("#stateError").text("State is required");
                    isValid = false;
                } else {
                    $("#stateError").text("");
                }

                return isValid;
            }
        });
    </script>
</body>
</html>
