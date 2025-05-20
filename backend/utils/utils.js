const getLocalIpAddress = async () => {
  const localIpAddress = require("local-ip-address");
  return await localIpAddress();
};

const writeBaseUrlToFile = async (path) => {
  require('dotenv').config({path: '../.env'})
  const fs = require("node:fs/promises");

  try {
    const ip = await getLocalIpAddress();
    const PORT = process.env.PORT
    const BASE_URL = `http://${ip}:${PORT}`;
    const content = await fs.readFile(path, "utf8");

    let updated;
    if (content.includes("EXPO_PUBLIC_BASE_URL=")) {
      updated = content.replace(/^EXPO_PUBLIC_BASE_URL=.*$/m, `EXPO_PUBLIC_BASE_URL=${BASE_URL}`);
    } else {
      updated = content.trim() + `\nEXPO_PUBLIC_BASE_URL=${BASE_URL}\n`;
    }

    await fs.writeFile(path, updated, "utf8");
  } catch (err) {
    console.error("Error updating BASE URL:", err);
  }
};

module.exports = { getLocalIpAddress, writeBaseUrlToFile };
