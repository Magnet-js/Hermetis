<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <a href="https://github.com/username/Hermetis">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Hermetis</h3>

  <p align="center">
    Eine Open-Source Status-Page, die mit Echtzeit-Daten arbeitet und API-Integration bietet.
    <br />
    <a href="https://hermetis.io"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/username/Hermetis">View Demo</a>
    ·
    <a href="https://github.com/username/Hermetis/issues/new?labels=bug&template=bug-report.md">Report Bug</a>
    ·
    <a href="https://github.com/username/Hermetis/issues/new?labels=enhancement&template=feature-request.md">Request Feature</a>
  </p>
</div>

---

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

[![Hermetis Screenshot][product-screenshot]](https://hermetis.io)

**Hermetis** ist eine Open-Source Status-Page, die für die Überwachung von Systemen in Echtzeit entwickelt wurde. Das Projekt ist in **Go** und **React (TypeScript)** geschrieben und verwendet eine **Postgres-Datenbank**, die mit Docker bereitgestellt wird. Bisher ist Hermetis in der Lage, Daten von der Proxmox Node API zu integrieren, mit weiteren Integrationen in Planung.

**Hauptmerkmale:**
* Echtzeitüberwachung und Statusanzeige
* API-Unterstützung für verschiedene Plattformen
* Docker-basierte Bereitstellung der PostgreSQL-Datenbank für einfache Integration und Skalierbarkeit
* Erweiterbar und anpassbar durch künftige API-Integrationen

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Go][Go-url]][Go-url]
* [![React][React.js]][React-url]
* [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
* [![Docker][Docker]][Docker-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

Hier ist eine kurze Anleitung, um das Projekt lokal einzurichten.

### Prerequisites

- Docker und Docker Compose installiert
- Git installiert

### Installation

1. Klonen Sie das Repository:
   ```bash
   git clone https://github.com/username/Hermetis.git
   cd Hermetis
   ```

2. Starten Sie die Docker-Container:
   ```bash
   docker-compose up -d
   ```

3. Besuchen Sie `http://localhost:3000`, um die Statusseite zu öffnen.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Die API von Hermetis erlaubt das Abrufen von Systemstatusinformationen und das Hinzufügen von benutzerdefinierten Integrationen.

Für eine vollständige Dokumentation besuchen Sie bitte [die Dokumentationsseite](https://hermetis.io/docs) auf unserer Website. *(Dokumentation in Entwicklung)*

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [x] Proxmox Node API Integration
- [ ] Unterstützung für weitere Integrationen (z.B. AWS, Kubernetes)
- [ ] Weitere Funktionen auf der Website (z.B. Live-Dashboard, API-Dokumentation)
- [ ] Verbesserte Skalierbarkeit und Datenbankunterstützung

See the [open issues](https://github.com/username/Hermetis/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Beiträge sind willkommen! Wenn Sie Ideen zur Verbesserung haben, [öffnen Sie bitte ein Issue](https://github.com/username/Hermetis/issues) oder reichen Sie einen Pull-Request ein.

### Schritte zum Mitwirken:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3
