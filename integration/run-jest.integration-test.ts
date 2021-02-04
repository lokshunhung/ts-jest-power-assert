import execa = require('execa');

function runJest() {
    jest.setTimeout(15000);
    return execa('jest', ['--config=jest.config.js', '--useStderr', '--no-watchman', '--no-cache', '--no-color'], {
        env: process.env,
        reject: false,
    });
}

function stripTimestamp(output: string) {
    return output.replaceAll(/(?<![A-z])\d+(\.\d+)? m?s(?![A-z])/g, '__TIME_RELATED_OUTPUT_REMOVED__');
}

test('runs jest', async () => {
    const { stdout, stderr } = await runJest();
    expect({
        stdout: stripTimestamp(stdout),
        stderr: stripTimestamp(stderr),
    }).toMatchSnapshot();
});
