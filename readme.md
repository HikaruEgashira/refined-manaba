# refined manaba

## これはなに？

manaba の突っ込みどころを解消する取り組み

![](docs/screenshot.png)

## 特徴

- 科目の検索機能
- いらない機能の削除
- ログイン後に 2019 年度のページにリダイレクト

## アーキテクチャ

```
usecase
=> page/(pc|sp)/page/\*feature
=> page/(pc|sp)/page/index.ts
=> page/(pc|sp)/index.ts
```

## 参考

refined github - GitHub : https://github.com/sindresorhus/refined-github
