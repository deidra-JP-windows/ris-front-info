# Github Actions

## delete-gh-pages.yml

- `gh-pages` ブランチが存在する場合、毎時自動で削除されます（GitHub Actionsのスケジュール実行）。
- 必要に応じて手動実行（workflow_dispatch）も可能です。
- 公開停止やアクセス制限用途で利用してください。

> 注意: `GITHUB_TOKEN` はGitHub Actionsが自動的に発行するため、特別な設定は不要です。

