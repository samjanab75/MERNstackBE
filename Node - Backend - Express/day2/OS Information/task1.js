
import os from "node:os";
import { writeFile } from "node:fs/promises";

// Step 1: Get operating system information
const platform = os.platform();
const architecture = os.arch();
const hostname = os.hostname();
const totalRAM = os.totalmem();

// Convert bytes into GB
const totalRAMGB = (totalRAM / (1024 ** 3)).toFixed(2);

// Step 2: Prepare the information
const systemInfo = `
OPERATING SYSTEM INFORMATION

Platform: ${platform}
Architecture: ${architecture}
Hostname: ${hostname}
Total RAM: ${totalRAMGB} GB
`;

// Step 3: Save information into a file
async function saveSystemInfo() {
    try {
        await writeFile("system-info.txt", systemInfo, "utf8");

        console.log("System information saved successfully!");
    } catch (error) {
        console.error("Error:", error.message);
    }
}

saveSystemInfo();
