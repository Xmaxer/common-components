const chokidar = require('chokidar')
const {execSync} = require('child_process')

const sourceWatcher = chokidar.watch('./src/**', {
    awaitWriteFinish: {
        stabilityThreshold: 1000,
        pollInterval: 100
    },
})

function rebuild() {
    console.log("Rebuilding...")
    execSync('npm run build')
    console.log("Rebuilt")
}

sourceWatcher.on('change', () => {
    rebuild()
}).on('ready', () => {
    console.log("Running initial build")
    rebuild()
})
