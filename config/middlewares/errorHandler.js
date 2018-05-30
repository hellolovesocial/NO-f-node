// エラーログ出力
function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

// REST API用のレスポンス返却
function clientErrorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    error: err
  });
}

// 画面用のレスポンス返却
function errorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
}