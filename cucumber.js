const env = require("./environment");

const common = `
  --require-module ts-node/register
  --require e2e-test/step-definitions/**/*.ts
  --require node_modules/@rgi/playwright-cucumber-runner-lib
  --require node_modules/@rgi/playwright-getinfo-lib
  --require node_modules/@rgi/playwright-performance-lib
  --require node_modules/@rgi/playwright-globalshare-lib
  --format summary
  --format progress-bar
  --format-options ${JSON.stringify({ snippetInterface: 'async-await' })}
 `;
//change the environment
module.exports = {
  default: `${common} --world-parameters '${JSON.stringify(env.MIG_Parameters)}'`,
  mig: `${common} --world-parameters '${JSON.stringify(env.MIG_Parameters)}'`

};
