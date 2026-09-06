# CyberOps-X Architecture

## Design goals

1. Keep existing projects independently maintainable.
2. Expose capabilities through explicit APIs/service adapters.
3. Centralize authentication, authorization, auditing, and reporting.
4. Never manufacture live security telemetry.
5. Keep scanning constrained to authorized environments.

## Request flow

```text
Browser
  -> Frontend route
  -> API client
  -> Node/Express API
  -> authentication + authorization middleware
  -> module controller
  -> service adapter
  -> Python/GIS service or PostgreSQL/PostGIS
  -> normalized response
  -> UI
```

## Module boundaries

### Vulnerability Scanner
The existing Python/Flask scanner becomes an isolated capability. The platform should pass only explicitly authorized/lab targets and normalize scan findings into a common finding schema.

### Phishing Analyzer
The existing ML model remains a Python capability. CyberOps-X should send email text for analysis and display the returned prediction/probabilities as an analysis result, without claiming that a model is infallible.

### Identity & Access
The previous login project demonstrates bcrypt and TOTP concepts, but its hard-coded Flask secret must not be copied. CyberOps-X uses environment-managed secrets, strict session/token handling, input validation, and role checks.

### Network / GIS
The existing GIS viewer already uses Node/Express, PostgreSQL/PostGIS, JWT, bcrypt, validation, Helmet, rate limiting, and logging. Its functionality should be integrated through a module boundary rather than duplicated.

## Common security finding model

```text
id
module
severity
status
title
summary
asset
observed_at
source
metadata
```

This creates one consistent shape for scanner, phishing, investigation, and future detection results.

## Data handling

- Credentials and signing keys are configuration, not source code.
- Local databases are development artifacts and must stay out of Git.
- Logs must avoid passwords, tokens, and unnecessary personal data.
- Uploaded evidence should have controlled storage and metadata rather than being embedded in application code.

## Deployment direction

Development can run the frontend, API, Python services, and PostgreSQL independently. Production can containerize each service and place the API behind a reverse proxy with TLS.
