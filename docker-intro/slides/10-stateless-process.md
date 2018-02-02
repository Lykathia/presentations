## Stateless Process(es)

- Stateless, share nothing
- Must use proper backing services
- No 'sticky sessions'
- Filesystem is temporary atomic working space

---

- Don't run as root
- Don't daemonize
- Avoid supervisord
- Use multiple containers
