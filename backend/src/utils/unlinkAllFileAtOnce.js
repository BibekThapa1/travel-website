import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function removeAllFilesAsync() {
  console.log("Entered the function");

  // To assign relative path.resolve method is used
  let directory = path.resolve(__dirname, "../../public/temp");
  try {
    const files = await fs.readdir(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      await fs.unlink(filePath);
    }
  } catch (error) {
    throw new Error(500, "Error occured while unlinking file");
  }
}

export { removeAllFilesAsync };
