# How to Create an Organization in GitHub: Complete Starter Kit

A free, copy-and-run kit for creating and configuring a professional GitHub organization: step-by-step guides, an organization profile template, security and community files, team and permission advice, and `gh` scripts that set up repositories and branch protection.

[![Create an organization in GitHub: 10-step walkthrough with real clicks](docs/video/org-setup-poster.png)](docs/video/org-setup.mp4)

[Watch the 36-second walkthrough as MP4 (cursor, clicks, zoom)](docs/video/org-setup.mp4)

> GitHub's own guide is the source of truth for the creation screens: [Creating a new organization from scratch](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch). Creating the organization itself is a manual step in the GitHub UI. This kit covers everything you do **after** that, and tells you what to decide **before** it.

## What is a GitHub organization?

A GitHub organization is a shared account where many people own and manage repositories together. It gives you teams, role-based permissions, organization-wide security settings, shared billing and a public profile page. Use one when more than one person maintains the code, or when you want a project to outlive a single person's account.

## How to create an organization in GitHub

1. Sign in to GitHub, click your profile picture, then **Your organizations**, then **New organization**.
2. Pick a plan. **Free** is enough for most open-source projects and small teams.
3. Enter the organization name, a contact email and whether it belongs to a personal account or a business.
4. Complete the verification step and click **Create organization**.
5. Invite your first members (you can skip this and do it later).

![Pick a plan for your organization](docs/images/02-choose-plan.png)

Full walkthrough with a checklist: [docs/create-github-organization.md](docs/create-github-organization.md).

## How to choose a GitHub organization name

Short, lowercase, easy to say aloud, and matching your domain and package names if you can. Names are public in every URL, and renaming later breaks links. Details and a checklist: [docs/create-github-organization.md#choose-the-name](docs/create-github-organization.md#choose-the-name).

## What to configure next

![Require two-factor authentication](docs/images/05-require-2fa.png)

| Step | Guide |
| --- | --- |
| Profile, defaults, member privileges | [docs/configure-organization.md](docs/configure-organization.md) |
| Two-factor, rulesets, secret scanning | [docs/organization-security.md](docs/organization-security.md) |
| Teams and roles | [docs/teams-and-permissions.md](docs/teams-and-permissions.md) |
| Repositories and naming | [docs/repository-management.md](docs/repository-management.md) |
| Questions | [docs/faq.md](docs/faq.md) |

The 10-minute path is in [QUICKSTART.md](QUICKSTART.md).

## How to use this starter kit

Check your setup, then preview the repository bootstrap before it changes anything:

![check-prerequisites.sh output](docs/images/09-check-prerequisites.png)

![bootstrap-repositories.sh dry run](docs/images/10-bootstrap-dry-run.png)

```bash
git clone https://github.com/flisk-sh/github-organization-starter.git
cd github-organization-starter
./scripts/check-prerequisites.sh YOUR_ORG        # gh installed, logged in, org admin
./scripts/bootstrap-repositories.sh YOUR_ORG     # creates .github, docs, and a first repo
./scripts/configure-branch-protection.sh YOUR_ORG YOUR_REPO
```

Every script supports `DRY_RUN=1` to print what it would do without changing anything.

## What is in the box

- `docs/`: the guides listed above.
- `templates/organization-profile/`: a ready `profile/README.md` for your org page.
- `templates/community/`: `CODE_OF_CONDUCT.md`, `SECURITY.md`, `SUPPORT.md` to place in your org's `.github` repository so every repo inherits them.
- `templates/repository/`: a README, LICENSE note and CONTRIBUTING for new repositories.
- `scripts/`: `gh`-based automation (requires an account with organization owner rights).
- `examples/`: layouts for an open-source, a startup and an enterprise organization.

## Requirements

[GitHub CLI](https://cli.github.com) 2.40 or newer, `bash`, `jq`, and an account that owns the organization (`gh auth login`, scopes `repo`, `admin:org`).

## Contributing

Corrections are welcome, especially when GitHub changes its screens. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT. See [LICENSE](LICENSE).

---

Maintained by the [Flisk](https://flisk.sh) team, who run their own organization this way.
