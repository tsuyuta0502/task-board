# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

**task-board** — React + Vite 製のタスクボードアプリ。

- リポジトリ: https://github.com/tsuyuta0502/task-board
- ブランチ: `main`

## 開発コマンド

```bash
npm install        # 依存パッケージのインストール
npm run dev        # 開発サーバー起動 (http://localhost:5173)
npm run build      # プロダクションビルド（dist/ へ出力）
npm run preview    # ビルド結果をローカルでプレビュー
```

## アーキテクチャ

### コンポーネント構成

```
App.jsx                  # ルートコンポーネント。タスク配列(state)を保持し、全操作関数を定義
├── TaskInput.jsx        # テキスト入力フォーム。onAdd コールバックで親へ通知
├── TaskList.jsx         # タスク一覧。空の場合はプレースホルダーを表示
└── TaskItem.jsx         # 1件分のタスク行。チェックボックス・テキスト・削除ボタン
```

### 状態管理

`App.jsx` の `useState` 1つだけで完結している。タスクの型は以下の通り。

```js
{ id: number, text: string, completed: boolean }
```

- `id` は `Date.now()` で生成
- 新規追加は配列の先頭へ追加（`[newTask, ...prev]`）
- `onToggle` / `onDelete` は `id` を受け取り `map` / `filter` で更新

### スタイリング

各コンポーネントと同名の CSS ファイルをコロケーション配置（例: `TaskItem.jsx` → `TaskItem.css`）。  
グローバルリセットは `src/index.css`、レイアウトは `src/App.css`。  
完了タスクは `.task-item--completed` クラスでグレー＋取り消し線を適用する。

## Git 運用ルール

**コードを変更するたびに、必ず GitHub へプッシュする。**

```bash
git add .
git commit -m "変更内容の説明"
git push origin main
```

- 作業開始時は `git pull origin main` で最新を取得する
- 動作確認後にコミット・プッシュする
