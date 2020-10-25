import { execSync } from 'child_process';

execSync('git config commit.template scripts/git/commit_template');
