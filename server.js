const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const host = "127.0.0.1";
const port = 3000;
const profileImages = {
  ".png": path.join(root, "profile-photo.png"),
  ".jpg": path.join(root, "profile-photo.jpg"),
  ".jpeg": path.join(root, "profile-photo.jpg"),
};

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

http.createServer((req, res) => {
  const safePath = decodeURIComponent((req.url || "/").split("?")[0]);

  if (safePath === "/profile-photo.png" || safePath === "/profile-photo.jpg" || safePath === "/profile-photo.jpeg") {
    const ext = path.extname(safePath).toLowerCase();
    const imagePath = profileImages[ext] || profileImages[".jpg"];

    fs.readFile(imagePath, (error, data) => {
      if (error) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Not found");
        return;
      }

      res.writeHead(200, { "Content-Type": ext === ".png" ? "image/png" : "image/jpeg" });
      res.end(data);
    });
    return;
  }

  const requested = safePath === "/" ? "/index.html" : safePath;
  const filePath = path.join(root, requested);

  if (!filePath.startsWith(root)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
    });
    res.end(data);
  });
}).listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
