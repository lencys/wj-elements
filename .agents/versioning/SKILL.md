---
name: versioning
description: Two-gate delivery workflow for wj-elements. Use when implementing work on a dedicated task branch, deciding merge readiness, preparing a release from main, or publishing only after explicit approval.
---

## When to use this

Use this skill when:

- implementing a feature, fix, chore, or docs task on its own Git branch
- deciding whether a task branch is ready for merge
- evaluating what should be released from `main`
- preparing release artifacts before version bump, tag, or publish

## Core model

This workflow has two approval gates:

1. Merge gate
Only technically finished work should be merged into `main`.

2. Release gate
Only changes already merged into `main` and explicitly approved by the user should be released.

Keep these two decisions separate.

## Phase 1: Task branch delivery

For each implementation task:

1. Inspect repository state first.
2. Reuse an existing dedicated task branch if it already matches the task. Otherwise create a new branch when the task should be isolated.
3. Never do implementation work directly on `main` or `master` unless the user explicitly asks for it.
4. Name the task branch in concise kebab-case, using one of:
   - `feature/<short-name>`
   - `fix/<short-name>`
   - `chore/<short-name>`
   - `docs/<short-name>`
5. Implement the requested change on that branch.
6. Run the relevant technical checks:
   - lint
   - unit tests
   - build
   - task-specific validation if available
7. If tests or build fail, investigate and attempt a reasonable fix.
8. Update docs, demos, or usage examples when behavior, API, attributes, properties, events, slots, styling hooks, or user-facing behavior changed.
9. Update the unreleased changelog draft in the documentation source if the repository keeps one.
10. Estimate the task-level release impact:
   - `patch` for bug fixes and non-breaking corrections
   - `minor` for backward-compatible new functionality
   - `major` for breaking changes

## Task branch output

After phase 1, provide a concise summary that includes:

- branch name
- what changed
- changed files
- commands run
- whether lint/tests/build passed
- whether the task is ready for merge
- estimated release impact: `patch`, `minor`, or `major`

This task-level impact is only an estimate for that branch, not the final release bump for the whole project.

## Changelog in docs

Treat the documentation changelog as a user-facing artifact, not just an internal release note.

- Keep changelog content suitable for display in docs.
- Prefer updating the docs changelog source together with release preparation, not after publish.
- If the repository uses a structured release notes data file for docs, update that file as part of release preparation.
- If the repository uses a dedicated changelog docs page, keep that page current and linked from navigation.
- Do not leave release history only in commit messages if the docs are expected to show it.

## Merge gate rules

- Never merge automatically.
- Never delete the task branch automatically.
- If the user says not to merge, leave the branch as-is.
- If the user approves merge, merge into `main` and then move to the release-check phase.

## Phase 2: Release check from main

After approved merge into `main`, perform a release check before any publish action:

1. Inspect what changed in `main` since the last release marker, preferably the latest version tag.
2. Evaluate the combined release impact across all unreleased changes in `main`.
3. Recommend the final version bump:
   - `patch`
   - `minor`
   - `major`
4. Prepare the final release artifacts as applicable:
   - changelog visible in docs
   - release notes
   - blog draft
   - social copy drafts
5. Clearly summarize what is new in `main` since the last release.

## Release-check output

After phase 2, provide a concise summary that includes:

- what is new in `main` since the last release
- recommended version bump
- release readiness
- prepared release artifacts
- any open risks or blockers before publish

## Release gate rules

- Never publish automatically.
- Never create the final release commit automatically.
- Never create a version tag automatically.
- Wait for explicit final approval from the user before doing release actions.

## Phase 3: Release execution

Only after explicit final approval:

1. Apply the approved version bump.
2. Commit release-related changes.
3. Create the release tag.
4. Publish the package if publishing is part of the repository workflow.
5. Finalize or publish release notes and prepared marketing text only if the user wants that step done.
6. Ensure the released changelog remains visible in docs after the release changes are committed.

## Git and safety rules

- Do not push unless the user explicitly asks.
- Do not publish packages unless the user explicitly asks.
- Do not delete branches automatically.
- If the working tree contains unrelated user changes that conflict with the requested task, stop and ask how to proceed.
- Keep implementation work, merge approval, and release approval as separate decisions.

## Completion criteria

A task is considered technically done only if:

- implementation is complete
- relevant validation passes, or remaining failures are explicitly reported
- docs are updated where needed
- unreleased changelog draft is updated where needed
- merge readiness is clearly stated
- task-level release impact is clearly stated

A release is considered ready only if:

- merged changes in `main` since the last release were reviewed
- the final bump recommendation is clearly stated
- release artifacts were prepared
- the changelog content intended for docs was updated
- the user explicitly approved the release step
