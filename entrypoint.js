const util = require('util');
const exec = util.promisify(require('child_process').exec);
const core = require('@actions/core');
const github = require('@actions/github');

const run = async ()=> {
  {
    // Log ls -l
    const { stdout, stderr } = await exec('ls -l');

    console.log(stdout);
    if(stderr) {
      return Promise.reject(stderr);
    }
  }

  {
    // Log node version
    const { stdout, stderr } = await exec('node --version');

    console.log('node:', stdout);
    if(stderr) {
      return Promise.reject(stderr);
    }
  }

  {
    // Log npm version
    const { stdout, stderr } = await exec('npm --version');

    console.log('npm:', stdout);
    if(stderr) {
      return Promise.reject(stderr);
    }
  }

  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
};

run().catch(core.setFailed);
