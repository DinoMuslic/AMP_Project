require('dotenv').config()

const { dirname } = require('path');
const appDir = dirname(require.main.filename);
const app = require("./src/app");
const utils = require("./utils/utils");

const envPath = `${appDir}/../.env`;

utils.writeBaseUrlToFile(envPath);

const PORT = process.env.PORT;
const BASE_API_URL = process.env.BASE_API_URL;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on ${BASE_API_URL}:${PORT}`);
});