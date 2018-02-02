### Backing Services

<img src='attached-resources.png' style='background: white' height='250px'>

Make no distinction between local and third party services.

Be able to swap out local dev DB, qa DB, hosted prod DB, AWS RDS db, etc without code change.

---

The old way: `docker run --link ...`

```
services:
  web:
    image: foo/bar
    links:
      - redis
      - mysql
  redis:
    image: redis
  mysql:
    image: mysql
```

---

The new hotness: `docker network create ...`

```
services:
  foo-master:
    image: foo/bar
    networks:
      - foo-network
  foo-agent:
    image: foo/qux
    networks:
      - foo-network

networks:
  foo-network:
    driver: overlay
    attachable: true
```
