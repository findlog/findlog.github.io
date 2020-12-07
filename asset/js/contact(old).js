var url = 'https://script.google.com/macros/s/AKfycbweSmtcdX87-J16LzQprTRZYn3Da6rl9308kPQEUgtO/dev';

$('#send').click(function () {
    log('送信中...');
    var nameinput = $('#name').val();
    var emailinput = $('#email').val();
    var messageinput = $('#message').val();
    
    $.ajax({
        data: {
            mode: "contact",
            site: "findlog",
            name: nameinput,
            email: emailinput,
            message: messageinput
        },
        url: url,
        dataType: 'jsonp'
    }).done(function (res) {
        var result = res.params.parameter.result;
        if (result = "success") {
            log("お問い合わせを受け付けました。<br>貴重なご意見、ありがとうございます。");
        }
    });
});

function log(mes) {
    $('#log').html(mes);
}
