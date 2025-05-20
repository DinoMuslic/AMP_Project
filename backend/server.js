const app = require("./src/app");
const PORT = 3000;

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from Express" });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
});