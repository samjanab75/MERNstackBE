
import os from "node:os";
import path from "node:path";
import {
    mkdir,
    writeFile,
    readFile
} from "node:fs/promises";

async function createOSReport() {
    try {
        // Step 1: Create reports folder
        await mkdir("reports", { recursive: true });

        // Step 2: Create file path
        const filePath = path.join("reports", "os-report.json");

        // Step 3: Collect OS information
        const report = {
            platform: os.platform(),
            freeRAM: os.freemem(),
            totalRAM: os.totalmem(),
            homeDirectory: os.homedir()
        };

        // Step 4: Convert object into JSON string
        const jsonData = JSON.stringify(report, null, 2);

        // Step 5: Write JSON data into file
        await writeFile(filePath, jsonData, "utf8");

        console.log("OS report created successfully!");

        // Step 6: Read the JSON file
        const data = await readFile(filePath, "utf8");

        // Step 7: Convert JSON string into JavaScript object
        const parsedData = JSON.parse(data);

       console.log("MY OS REPORT:");
        console.log(parsedData);

    } catch (error) {
        console.error("Error:", error.message);
    }
}

createOSReport();
