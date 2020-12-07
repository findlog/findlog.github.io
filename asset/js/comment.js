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
        log("コメントの送信が完了しました。<br>コメント内容は、管理者の承認後に一般公開されます。");
    }
  }, function(res){
    log("送信失敗しました");
  })
})

function log(mes) {
    $('#commentlog').html(mes);
}
