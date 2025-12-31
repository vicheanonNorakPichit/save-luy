import { exec } from "child_process";
import { series } from "async";

const NODE_ENV = process.argv[2];
console.log("🚀 ~ ENV_MODE:", NODE_ENV);

function genApiUrlFactory(envMode) {
  switch (envMode) {
    case "development":
      return "http://localhost:4345/api-json";
    default:
      return "http://localhost:4345/api-json";
  }
}

const interfaceGeneratorScripts = () => {
  console.log(`Generating swagger-json from ${genApiUrlFactory(NODE_ENV)}`);
  series([
    () => {
      exec(
        `pnpm openapi-typescript ${genApiUrlFactory(
          NODE_ENV,
        )} --output src/generators/api-generator.d.ts`,
        (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          if (stderr) {
            console.error(`stderr: ${stderr}`);
          }
        },
      );
    },
  ]);
};

interfaceGeneratorScripts();
