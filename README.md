# CyberOps-X

A professional cybersecurity operations command center for learning, portfolio demonstration, and authorized security analysis.

## Vision

CyberOps-X brings the user's existing security projects into one organized platform instead of copying unrelated applications into a single codebase.

### Current project integrations

| Existing project | CyberOps-X module | Integration approach |
|---|---|---|
| Vulnerability-Scanner-Mini-Project | Vulnerability Scanner | Isolated scanner service/API for authorized lab targets |
| Phishing-Email-Detection-Model | Phishing Analyzer | Python ML service/API |
| Secure-Login-System | Identity & Access | Rebuild authentication with environment-managed secrets |
| gis-viewer | Network / GIS | Reuse the existing Node/PostGIS capability behind a module boundary |
| vs-password | Security Utilities | Optional utility/reference module |

## Planned architecture

```text
CyberOps-X Web UI
       |
       v
Node/Express API layer
       |
       +---- Identity & Access
       +---- Investigation / Reports
       +---- Vulnerability service (authorized targets only)
       +---- Phishing analysis service
       +---- Network / GIS service
       |
       v
PostgreSQL / PostGIS
```

Python security/ML components remain isolated services where that gives cleaner boundaries and safer maintenance.

## UI modules

- Dashboard
- Investigations
- Vulnerability Scanner
- Phishing Analyzer
- Network / GIS
- Evidence & Forensics
- Reports
- Projects
- Settings

The interface is intentionally enterprise/SOC-inspired rather than a hacker-themed visual. Live telemetry is not fabricated; demo content is explicitly marked when used.

## Security rules

- Only scan systems you own or are explicitly authorized to assess.
- Secrets belong in environment variables, never source control.
- Do not commit `.env`, databases containing user data, passwords, tokens, or Python bytecode.
- Keep security tools isolated behind clear service boundaries.
- Validate and authorize inputs at the API boundary.

## Repository structure

```text
CyberOps-X/
├── frontend/          # CyberOps-X web application
├── backend/           # API and integration layer
├── services/          # Isolated security/ML service adapters
├── docs/              # Architecture and operational documentation
├── tests/             # Automated tests
├── .env.example       # Non-secret configuration template
├── .gitignore
└── README.md
```

## Development status

Phase 1: foundation and architecture.

Next phases: functional web dashboard, API layer, authentication hardening, service adapters, testing, and deployment documentation.
