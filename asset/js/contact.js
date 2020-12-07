var url = 'https://script.google.com/macros/s/AKfycbweSmtcdX87-J16LzQprTRZYn3Da6rl9308kPQEUgtO/dev';

$('#contactform').on('submit', function(e){
  e.preventDefault()
  log('送信中...');

  $.ajax({
    url: url,
    data: $(this).serialize(),
    dataType: 'jsonp'
  })
  .then(function(res){
    alert(res);
    var result = res.params.parameter.result;
    if (result = "success") {
        log("お問い合わせを受け付けました。<br>貴重なご意見、ありがとうございます。");
    }
  }, function(res){
    log("送信失敗しました");
  })
})

function log(mes) {
    $('#contactlog').html(mes);
}
