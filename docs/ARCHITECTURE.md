# CyberOps-X Architecture

CyberOps-X is designed as a defensive cybersecurity command-center that brings the user's existing security projects behind one consistent interface.

## Service boundaries

```text
                         +----------------------+
                         |      CyberOps-X      |
                         |   Web Command Center  |
                         +----------+-----------+
                                    |
                              HTTPS / REST
                                    |
                         +----------v-----------+
                         |   Node/Express API   |
                         | auth + orchestration |
                         +---+------+-------+---+
                             |      |       |
                +------------+      |       +-------------+
                |                   |                     |
        +-------v------+    +------v-------+      +------v------+
        | Vulnerability|    |   Phishing   |      |  GIS/Network|
        | Scanner svc  |    |   ML service |      |    module   |
        | Python       |    | Python       |      | Node/PostGIS|
        +--------------+    +--------------+      +-------------+
                                    |
                             +------v------+
                             | PostgreSQL  |
                             | metadata /  |
                             | audit data  |
                             +-------------+
```

## Existing project integration

- `Vulnerability-Scanner-Mini-Project`: authorized/lab vulnerability-scanning capability.
- `Phishing-Email-Detection-Model`: phishing-email classification capability.
- `Secure-Login-System`: authentication concepts including bcrypt and TOTP; secrets must be redesigned before reuse.
- `gis-viewer`: GIS/network visualization capability using Node/Express and PostGIS.
- `vs-password`: password-strength utility/reference.

The projects should be integrated through service boundaries rather than copied into one large codebase.

## Security principles

1. Never commit `.env`, credentials, tokens, local databases, or Python bytecode.
2. Secrets are supplied through environment variables.
3. Scanner functionality is intended only for systems the operator is authorized to assess.
4. Demo telemetry must be explicitly labelled as demo; the dashboard must not fabricate live security events.
5. Authentication and authorization are centralized at the API boundary.
6. Audit events should record important security actions without storing passwords or bearer tokens.

## Initial implementation phases

### Phase 1 — Foundation

- Professional SOC-style dashboard shell.
- Secure repository hygiene.
- Environment configuration template.
- Module navigation and consistent design system.

### Phase 2 — API and authentication

- Express API structure.
- Input validation and security headers.
- Authentication with environment-managed secrets.
- Role-based authorization and audit logging.

### Phase 3 — Existing tool integration

- Scanner service adapter.
- Phishing analyzer adapter.
- GIS/PostGIS adapter.
- Normalized results and report generation.

### Phase 4 — Validation

- Unit/API tests.
- Dependency and secret checks.
- Documentation and deployment configuration.
