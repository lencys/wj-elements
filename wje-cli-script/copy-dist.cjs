const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Function to prompt the user for confirmation
function confirm(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(`${question} (Y/n): `, (answer) => {
            rl.close();
            resolve(answer.toLowerCase() === 'y');
        });
    });
}

// Function to copy the dist folder
async function copyDist(dest) {
    const src = path.resolve(__dirname, '../dist');

    if (!dest) {
        console.error('Destination folder is required.');
        process.exit(1);
    }

    if (!fs.existsSync(src)) {
        console.error(`Source folder '${src}' does not exist.`);
        process.exit(1);
    }

    if (fs.existsSync(dest)) {
        const shouldRemove = await confirm(`Do you want to remove the content of the destination folder '${dest}'?`);
        if (shouldRemove) {
            console.log(`Removing content of '${dest}'...`);
            fs.rmSync(dest, { recursive: true, force: true });
            fs.mkdirSync(dest, { recursive: true });
        }
    } else {
        console.log(`Creating destination folder '${dest}'...`);
        fs.mkdirSync(dest, { recursive: true });
    }

    console.log(`Copying '${src}' to '${dest}'...`);
    fs.cpSync(src, dest, { recursive: true });

    console.log('Copy completed.');
}

// Main script execution
const args = process.argv.slice(2);
if (args.length !== 1) {
    console.error('Usage: node copy-dist.cjs <destination-folder>');
    process.exit(1);
}

const dest = path.resolve(args[0]);
copyDist(dest);