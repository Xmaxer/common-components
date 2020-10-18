const {execSync} = require('child_process')

//TODO parameterise this when we have multiple sub packages (core etc)
execSync('npm link', {cwd: './packages/core/build'})
execSync('npm link @common-components/core', {cwd: './docs'})
