# Vue.jsの学習メモ

## 8/4(金)
- シンプルなストア構造
  - Vuex,babel-polyfillインストール時、上手く作動せず→Vuex4ではVue3系しか使用できない→Vuexダウングレードし、Vue2系で使用できた

## 8/9(水)
- コアコンセプト
  - ステート（state）
  - ゲッター（getter）

## 8/17(木)
- コアコンセプト
  - ミューテーション（mutations）
  - アクション（actions）
- コンポーネントでストアを使用しよう
  - メッセージの状態を管理するストア
  - メッセージを使用する
  - メッセージを更新する
``` bash
# EditFormコンポーネントが反映されなかった原因と解決法

// before main.js
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// after main.js
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

# importしたstore.jsが反映されていなかった
# importのみでは使用できないため、Vue内で読み込む必要がある
``` 

## 8/18(金)
- モジュールで大きくなったストアを分割
  - モジュールの使い方
  - 同一のミューテーションタイプ
  - ネームスペース
  - モジュールのネスト
  - ネームスペース付きモジュールからのアクセス