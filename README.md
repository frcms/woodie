# Woodie

[![Last Git commit](https://img.shields.io/github/last-commit/frcms/woodie)](https://github.com/frcms/woodie/commits/master) [![David](https://img.shields.io/david/frcms/woodie)](package.json) [![License](https://img.shields.io/github/license/frcms/woodie)](LICENSE) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/frcms/woodie/run%20tests)](https://github.com/frcms/woodie/blob/master/.github/workflows/test.yml) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/ff9e99adbd484c1089dc2d3138a40673)](https://www.codacy.com/gh/frcms/woodie/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=frcms/woodie&amp;utm_campaign=Badge_Grade)

<!-- @todo badges for discord, codecov, commitizen friendly -->

Woodie is the JavaScript backend server for FRCMS — a content management system for First Robotics teams. Woodie's written in TypeScript, uses PostgreSQL to store data, and uses Express to handle HTTP requests.

* **[📖 Documentation](https://dev.frcms.app)**

## Self-hosting

**Requires: Git & Docker**

```sh
# Clone repository from git remote
$ git clone https://github.com/frcms/woodie.git
$ cd woodie

# Build and run docker image on port 80
$ sudo docker build -t woodie .
$ sudo docker run -d -p 80:3000 woodie
```

## Contributors

Woodie is made entirely by contributors from the open-source community. These are of the notable contributors:

* [Jack Merrill <me@jackmerrill.com>](https://jackmerrill.com) — Lead developer and maintainer.
* [BluLightShow <contact@blulightshow.space>](https://blulightshow.space) — Developer.
* [Luke Whrit <lukewhrit@gmail.com>](https://lukewhrit.xyz) — Infrastructure engineer and developer.

## License

Woodie is publicly available under the terms of the Mozilla Public License. A copy of these terms can be found within the [`LICENSE`](LICENSE) file.
