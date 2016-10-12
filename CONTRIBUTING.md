# Contributing

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Reporting bugs](#reporting-bugs)
  - [Example](#example)
- [Getting Started](#getting-started)
  - [Clone the repo](#clone-the-repo)
  - [If there's no issue, please create one](#if-theres-no-issue-please-create-one)
  - [Let us Know you're working on the issue](#let-us-know-youre-working-on-the-issue)
  - [Create a feature branch:](#create-a-feature-branch)
  - [Make your changes and commit:](#make-your-changes-and-commit)
    - [Commit Message Format](#commit-message-format)
      - [Revert](#revert)
      - [Type](#type)
      - [Scope](#scope)
      - [Subject](#subject)
      - [Body](#body)
      - [Footer](#footer)
  - [Create a Pull Request](#create-a-pull-request)
  - [PR Merge Exception](#pr-merge-exception)
  - [PR Hints](#pr-hints)
    - [For large changes spanning many commits / PRs](#for-large-changes-spanning-many-commits--prs)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Reporting bugs

Bug reports should contain the following information:

* Summary: A brief description.
* Steps to reproduce: How did you encounter the bug? Instructions to reproduce it.
* Expected behavior: How did you expect it to behave?
* Actual behavior: How did it actually behave?
* Screenshot or animated gif: If possible, attach visual documentation of the bug.
* References: Links to any related tickets or information sources.

### Example

Here's a [real issue](https://github.com/woothemes/woocommerce/issues/8563#issue-94518347) to demonstrate.


## Getting Started

### Clone the repo

* Click the GitHub fork button to create your own fork
* Clone your fork of the repo to your dev system

```
git clone git@github.com:eq8/redbloom.git
```

### If there's no issue, please create one


### Let us Know you're working on the issue

If you're actively working on an issue, please comment in the issue thread stating that you're working on a fix, or (if you're an official contributor) assign it to yourself.

This way, others will know they shouldn't try to work on a fix at the same time.


### Create a feature branch:

```
git checkout -b <your-branch-name>
```

### Make your changes and commit:

```
git commit -m '<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>'
```

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the change log**.

The commit message formatting can be added using a typical git workflow or through the use of a CLI wizard ([Commitizen](https://github.com/commitizen/cz-cli)). To use the wizard, run `npm run commit` in your terminal after staging your changes in git.

#### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

##### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

##### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

##### Scope
The scope could be anything specifying place of the commit change. For example `$location`,
`$browser`, `$compile`, `$rootScope`, `ngHref`, `ngClick`, `ngView`, etc...

##### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

##### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

##### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

### Create a Pull Request

Please don't merge your own changes. Create a pull request so others can review the changes.

**Push changes:**

```
git push origin <your-feature-branch>
```

* Open your repository fork on GitHub
* You should see a button to create a pull request - Press it
* Consider mentioning a contributor in your pull request comments to alert them that it's available for review
* **Wait for the reviewer to approve and merge the request**

### PR Merge Exception

* Minor documentation grammar/spelling fixes (code example changes should be reviewed)


### PR Hints

Reference the issue number in the footer part of your commit message e.g.:

```
$ git commit -m 'docs(CONTRIBUTING.md): follow the PR process for contributions

Closes #5'
```

#### For large changes spanning many commits / PRs

* Create a meta-issue with a bullet list using the `* [ ] item` markdown syntax.
* Create issues for each bullet point
* Link to the meta-issue from each bullet point issue
* Check off the bullet list as items get completed

Linking from the bullet point issues to the meta issue will create a list of issues with status indicators in the issue comments stream, which will give us a quick visual reference to see what's done and what still needs doing.
