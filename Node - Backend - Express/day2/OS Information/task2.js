
import { readFile } from "node:fs/promises";

async function displaySystemInfo() {
    try {
        // Read the file
        const data = await readFile("system-info.txt", "utf8");

        console.log("SYSTEM INFORMATION:");
        console.log(data);

    } catch (error) {

        if (error.code === "ENOENT") {
            console.log("Error: system-info.txt file does not exist!");
        } else {
            console.log("Error reading file:", error.message);
        }
    }
}

displaySystemInfo();
