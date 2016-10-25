var express = require('express');
var app = express();

// public ディレクトリのファイルをそのまま渡す
app.use(express.static(__dirname + '/public'));

// /api/ 配下はスクリプト処理してレスポンスを返す
app.get('/api/:varpath', function (req, res) {
  res.json({ value: "アクセスしたのは /api/"+req.params.varpath });
});

app.listen(3000);
