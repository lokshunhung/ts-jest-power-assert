import execa = require('execa');

function runJest() {
    jest.setTimeout(15000);
    return execa('jest', ['--config=jest.config.js', '--useStderr', '--no-watchman', '--no-cache', '--no-color'], {
        env: process.env,
        reject: false,
    });
}

function stripTimestamp(output: string) {
    return output.replace(/(?<![A-z])\d+(\.\d+)? m?s(?![A-z])/g, '__TIME_RELATED_OUTPUT_REMOVED__');
}

function removeTestTimestampPlaceholder(output: string) {
    return output.replace(/\(__TIME_RELATED_OUTPUT_REMOVED__\)/g, '');
}

test('runs jest', async () => {
    const { stdout, stderr } = await runJest();
    expect({
        stdout: removeTestTimestampPlaceholder(stripTimestamp(stdout)),
        stderr: removeTestTimestampPlaceholder(stripTimestamp(stderr)),
    }).toMatchSnapshot();
});
