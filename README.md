# augean

A interactive shell to apply batch changes across multiple project directories.

# Example Use cases

* Add linting config to multiple git repos with the same commit message
* Move tests in tests in individual directories to a matching path in a root test directory
* Reset the package-lock.json file, and commit it in all projects with the same commit mesasge

# Tasks

Changes are applied as tasks which implemented using a command pattern. They must implement the following methods:

* command
* description
* action
* autocomplete

Action is the equivalent of the 'execute' method in a traditional implementation of the command pattern.
