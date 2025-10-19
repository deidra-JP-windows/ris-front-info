#!/bin/bash

# distディレクトリの内容をS3バケットにアップロードまたは削除する本番用デプロイスクリプト

# S3バケット名
S3_BUCKET="prod-ris-front-info"

# distディレクトリのパス
DIST_DIR="dist"

usage() {
  echo "Usage: $0 [deploy|delete]"
  echo "  deploy: distディレクトリをS3にアップロード"
  echo "  delete: S3バケット内の全ファイルを削除"
}

if [ $# -ne 1 ]; then
  usage
  exit 1
fi

case "$1" in
  deploy)
    if [ ! -d "$DIST_DIR" ]; then
      echo "Error: $DIST_DIR ディレクトリが存在しません。ビルド後に実行してください。"
      exit 1
    fi
    aws s3 sync "$DIST_DIR" "s3://$S3_BUCKET/" --delete
    if [ $? -eq 0 ]; then
      echo "S3へのアップロードが完了しました。"
    else
      echo "S3へのアップロードに失敗しました。"
      exit 1
    fi
    ;;
  delete)
    aws s3 rm "s3://$S3_BUCKET/" --recursive
    if [ $? -eq 0 ]; then
      echo "S3バケット内のファイルを全て削除しました。"
    else
      echo "S3バケット内のファイル削除に失敗しました。"
      exit 1
    fi
    ;;
  *)
    usage
    exit 1
    ;;
esac
