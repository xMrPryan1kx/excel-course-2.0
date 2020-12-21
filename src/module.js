console.log('Module JS');

async function start() {
    return await Promise.resolve('async start!!!!');
}

start().then(console.log);
