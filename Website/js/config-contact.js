(function ($) {
    // USE STRICT
    "use strict";

    try {

        var contactFormWrapper = $('.js-contact-form');

        contactFormWrapper.each(function () {
            var that = $(this);
            that.on('submit', function (e) {
                var url = "includes/contact-form.php";

                $.ajax({
                    type: "POST",
                    url: url,
                    data: $(this).serialize(),
                    success: function (data) {
                        var result = JSON.parse(data);

                        var message = result.message;
                        var type = result.type;
                        if (type === 1) {
                            swal("Success", message, "success");
                            // that.reset();
                        } else if (type === 0) {
                            swal("Success", message, "error");
                        }
                    },
                    statusCode: {
                        404: function () {
                            swal("Oops", "Sorry, Can't Get The Mail Server To Work :( ", "error");
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {

                        swal("Oops", errorThrown, "error");
                    }
                });
                return false;
            });
        });

    } catch (err) {
        console.log(err)
    }

})(jQuery);