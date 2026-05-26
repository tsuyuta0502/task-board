# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git 運用ルール

**コードを変更するたびに、必ず GitHub へプッシュする。**

```bash
# 作業開始時：最新を取得
git pull origin main

# 変更後：確認 → コミット → プッシュ
git add .
git commit -m "変更内容の説明"
git push origin main
```

### コミットメッセージの書き方

- 日本語・英語どちらでも可
- 変更内容が一目でわかる説明を書く
- 例：`タスク追加フォームを実装`、`Add drag-and-drop support`

### タイミング

- 機能追加・バグ修正・デザイン変更・リファクタリング、それぞれ動作確認後に即プッシュ
- 複数の大きな変更を1コミットにまとめない
