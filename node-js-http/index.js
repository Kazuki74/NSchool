'use strict';
// Node.js における HTTP のモジュール読み込み
const http = require('http');
// httpモジュールの機能でサーバーを作成
// req リクエストを表すオブジェクト
// res レスポンスを表すオブジェクト
const server = http.createServer((req, res) => {
		// リクエストが来た時の挙動
		res.writeHead(200,{
			// 内容の形式と文字セットに関する情報
			'Content-Type': 'text/plain; charset=utf-8'
		});
		// HTTPのレスポンス内容を書き出す
		// リクエストヘッダのuser-agentの中身がレスポンス内容
		res.write(req.headers['user-agent']);
		// レスポンスの書き出しを終了
		res.end();
});
// HTTP が起動するポートを宣言
const port = 8000;
// サーバーを起動して、起動した際に実行する関数を渡す
server.listen(port, () => {
	console.log('listening on ' + port);
});