---
permalink: "contact"
subject: "お問い合わせフォーム"
---

<form action="#" id="contactform">

<input type="hidden" name="site" value="findlog" />
<input type="hidden" name="mode" value="contact" />
<input type="hidden" name="id" value="" />

<p>お名前(省略可)<br>
  <input type="text" name="name" value="" /></p>
<p>メールアドレス(省略可)<br>
  <input type="text" name="email" value="" /></p>
<p>お問い合わせ内容<br>
  <textarea name="message" style="max-width:100%;height:200px;"></textarea></p>
<p><input type="button" value="送信する" /></p>

<p id="contactlog">
<!--ご意見やご感想をお書きください。<br>
メールアドレスの記入がある場合は、できる限り返信します。<br>-->
</p>

</form>

<script src="../asset/js/library/jquery/jquery.min.js"></script>
<script src="../asset/js/contact.js"></script>
