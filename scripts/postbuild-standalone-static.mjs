import { cpSync, existsSync, mkdirSync } from "fs";
import path from "path";

const projectRoot = process.cwd();
const sourceDir = path.join(projectRoot, ".next", "static");
const targetDir = path.join(projectRoot, ".next", "standalone", "web", ".next", "static");

if (!existsSync(sourceDir)) {
  process.exit(0);
}

mkdirSync(path.dirname(targetDir), { recursive: true });
cpSync(sourceDir, targetDir, { recursive: true, force: true });
