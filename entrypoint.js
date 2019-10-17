const util = require('util');
const exec = util.promisify(require('child_process').exec);
const core = require('@actions/core');

const sayHello = require('./src/index');

const run = async ()=> {
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

  sayHello();
};

run().catch(core.setFailed);
