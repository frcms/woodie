# Woodie

Woodie is the JavaScript backend server for FRCMS — a content management system for First Robotics teams. Woodie's written in JavaScript, uses MongoDB to store data, and uses Express to handle HTTP requests.

* **[📖 Documentation](https://docs.frcms.app)**

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
