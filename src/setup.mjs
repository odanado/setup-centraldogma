import path from "node:path";
import fs from "node:fs/promises";
import { downloadTool } from "@actions/tool-cache";
import { addPath } from "@actions/core";

async function main() {
  const urls = {
    linux: {
      amd64:
        "https://github.com/line/centraldogma-go/releases/download/0.1.0/dogma.linux-amd64",
    },
    darwin: {
      amd64:
        "https://github.com/line/centraldogma-go/releases/download/0.1.0/dogma.darwin-amd64",
      arm64:
        "https://github.com/line/centraldogma-go/releases/download/0.1.0/dogma.darwin-arm64",
    },
    windows: {
      amd64:
        "https://github.com/line/centraldogma-go/releases/download/0.1.0/dogma.windows-amd64.exe",
    },
  };

  const os = "darwin";
  const arch = "amd64";

  const url = urls[os][arch];

  const downloadDogmaPath = await downloadTool(url);

  const dogmaDir = path.dirname(downloadDogmaPath);
  const ext = path.extname(downloadDogmaPath);
  const dogmaPath = path.join(dogmaDir, `dogma${ext}`);

  await fs.rename(downloadDogmaPath, path.join(dogmaDir, "dogma"));

  addPath(dogmaPath);
}

main();
