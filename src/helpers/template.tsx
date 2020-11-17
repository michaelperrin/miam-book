
export default function htmlTemplate(reactDom: any) {
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Book</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div id="app">${reactDom}</div>
    <script src="./app.bundle.js"></script>
</body>
</html>
  `;
}
