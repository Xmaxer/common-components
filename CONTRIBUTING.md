# Git commit message

All commit's messages must adhere to the following rules.

-   [Commit message rules][]
-   [Commit message template][]
-   [Message example][]
-   [Tips][]

If you want to know more about the rules below, check out [conventional commits][].

[commit message rules]: #Commit_message_rules
[commit message template]: #Commit_message_template
[message example]: #Message_template
[tips]: #Tips
[conventional commits]: https://www.conventionalcommits.org/en/v1.0.0/

## Commit message rules

The body of the commit is organized in three sections: the commit's **subject**, the commit's **description**, organized in paragraphs, and one or more **footers**.

The main rules to follow in writing a commit message are:

-   Put a type before the subject (see below for the full list)
-   Separate subject from body with a blank line
-   Separate footers from body with a blank line
-   Limit the subject line to 100 characters
-   Capitalize the subject line
-   Do not end the subject line with a period
-   Use the imperative mood in the subject line
-   Wrap the body at 100 characters
-   Use the body to explain what and why vs. how
-   Add a BREAKING CHANGE: footer if required (it correlates with MAJOR in semver)

The subject is always required, while the description and footers are optional.

Type can be:

-   feat (introduce a new feature - it correlates with MINOR in semver)
-   fix (patches a bug - it correlates with PATCH in semver)
-   refactor (refactoring production code)
-   dev (setup, automations, contributing updates, etc)
-   ci (ci/cd stuff)
-   docs (changes to documentation)
-   test (adding or refactoring tests)
-   revert (reverting to a previous state)
-   wip (work in progress commit to be squashed -- do not push to protected branches!)

## Commit message template

A handy [template][] is provided to help you along the way on writing your commit messages.
In order for git to use this template, just run the `set-git-commit-template` script in the script section of the [package.json][], or run the following git command from the project root folder:

    	git config commit.template script/git/commit_template

[template]: /scripts/git/commit_template
[package.json]: /package.json

## Message example

The following is a simple example of a commit message following the abovementioned rules:

    	docs: Summarize changes in around 100 characters or less

    	More detailed explanatory text, if necessary. Wrap it to about 100
    	characters or so. In some contexts, the first line is treated as the
    	subject of the commit and the rest of the text as the body. The
    	blank line separating the summary from the body is critical (unless
    	you omit the body entirely); various tools like log, shortlog
    	and rebase can get confused if you run the two together.

    	Explain the problem that this commit is solving. Focus on why you
    	are making this change as opposed to how (the code explains that).
    	Are there side effects or other unintuitive consequences of this
    	change? Here's the place to explain them.

    	Further paragraphs come after blank lines.

    	- Bullet points are okay, too

    	- Typically a hyphen or asterisk is used for the bullet, preceded
    	by a single space, with blank lines in between, but conventions
    	vary here

    	If you use an issue tracker, put references to them at the bottom,
    	like this:

    	Resolves: #123
    	See also: #456, #789

## Tips

-   Set up git with the text editor of your choice
-   Configure your editor to automatically wrap the text to 100 chars
-   Never use the `-m \<msg\>` / `--message=\<msg\>` flag to `git commit`
-   Favor the git CLI to GUIs and IDE integrations
