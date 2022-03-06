const core = require('@actions/core');

try {
    const postsList = core.getInput('posts-list');
    const repoPath = core.getInput('repo-path');
    console.log(`added posts ${postsList}`);
    console.log(`root of the repo ${repoPath}`);
} catch (error) {
    core.setFailed(error.message);
}
