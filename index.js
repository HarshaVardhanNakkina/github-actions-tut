const core = require('@actions/core');

try {
    const nameToGreet = core.getInput('input-to-js');
    console.log(`input from composite action ${nameToGreet}!`);
} catch (error) {
    core.setFailed(error.message);
}
