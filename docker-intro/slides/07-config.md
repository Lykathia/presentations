### Config

`docker run -e AWS_SECRET_KEY=...`

<img src='luke-env.jpeg'>

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

<div class='fragment'>
    Prefer: Build => Release => Run
    <img src='release.png' style='background:white;'>
</div>
