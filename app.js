'use strict';

const vorpal = require('vorpal')();
const fsAutocomplete = require('vorpal-autocomplete-fs');


let actionWrapper = function(args, callback) {
    callback();
};

let directory = {
    cd: actionWrapper,
    ls: actionWrapper,
    pushd: actionWrapper,
    popd: actionWrapper
};

let project = {
    show: actionWrapper,
    add: actionWrapper,
    remote: actionWrapper,
    commitMessage: actionWrapper,
    progress: actionWrapper
};

let git = {
    diff: actionWrapper,
    commit: actionWrapper,
    push: actionWrapper,
    batchDiff: actionWrapper,
    batchCommit: actionWrapper,
    batchPush: actionWrapper
};

vorpal
    .command('cd')
    .description('Changes working directory')
    .action(directory.cd)
    .autocomplete(fsAutocomplete());

vorpal
    .command('ls')
    .description('Lists files in directories').action(directory.ls);

vorpal
    .command('pushd <directory>')
    .description('Store a directory in the stack').action(directory.pushd);

vorpal
    .command('use defaults')
    .description('Use default directory selection').action(directory.pushd);

vorpal
    .command('popd')
    .description('Change to stored directory ').action(directory.popd);

vorpal
    .command('show')
    .description('Shows directories added to projects')
    .action(project.show);

vorpal
    .command('add [dirs ...]')
    .description('Adds directories to project')
    .action(project.add)
    .autocomplete(fsAutocomplete());

vorpal
    .command('remove [dirs ...]')
    .description('Removes directories from project')
    .action(project.remove)
    .autocomplete(fsAutocomplete());

vorpal
    .command('edit-commit-msg')
    .description('Applies commit message to project')
    .action(project.commitMessage);

vorpal
    .command('git diff')
    .description('Git Diff')
    .action(git.diff);

vorpal
    .command('git commit')
    .description('Git Commit')
    .action(git.commit);

vorpal
    .command('git push <remote>')
    .description('Git Push')
    .action(git.push);

vorpal
    .command('batch git diff')
    .description('Batch Git Diff')
    .action(git.batchDiff);

vorpal
    .command('batch git commit')
    .description('git-commit')
    .action(git.batchCommit);

vorpal.command('batch git push <remote>')
    .description('git-push')
    .action(git.backPush);

vorpal
    .command('progress')
    .description('Shows progress')
    .action(project.progress)

vorpal
    .delimiter('augean >')
    .show();

