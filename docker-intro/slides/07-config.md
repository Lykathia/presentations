## Config

Use the environment, Luke

`docker run -e AWS_SECRET_KEY=foofoomamachoo ...`

---

### Runtime Configuration

Everything that is likely to vary **between** deploys.

- Resource handles to backing services
- Credentials for external services
- Per-deployment values

Note:
Internal Application Config vs Runtime Config

---

### Why Environment?

Can't check it into source control! No stored passwords!

Flexible

Handled by all the same tools as config files.

---

#### Anti-pattern: Built Configurations

Dev, QA, Staging, Nightly, Production<span class='fragment'>, Oracle</span>

<span class='fragment'>Doesn't scale.</span>


---

Docker compose example
