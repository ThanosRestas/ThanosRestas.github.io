import React from 'react';
import { createRoot } from 'react-dom/client';
import { professionalProjects, personalProjects, type Project } from './data';
import './styles.css';

const params = new URLSearchParams(window.location.search);
const allProjects = [...professionalProjects, ...personalProjects];
const projectUrl = (project: Project) => `index.html?project=${encodeURIComponent(project.id)}`;

function Artwork({ project, index }: { project: Project; index: number }) {
  return <div className="art" role="img" aria-label={`${project.title} — placeholder artwork`}>
    <span className="art-number">{String(index + 1).padStart(2, '0')}</span>
    <span className="art-label">Image forthcoming</span>
  </div>;
}

function Tags({ items }: { items: string[] }) {
  return <>{items.map(item => <span className="tag" key={item}>{item}</span>)}</>;
}

function Bullets({ items }: { items: string[] }) {
  return <ul>{items.map((item, index) => <li key={`${index}-${item}`}>{item}</li>)}</ul>;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <a className="card" href={projectUrl(project)}>
    <Artwork project={project} index={index} />
    <h3>{project.title} <span aria-hidden="true">↗</span></h3>
    <p>{project.company ? `${project.company} / ${project.category}` : project.category}</p>
  </a>;
}

function Listing({ personal }: { personal: boolean }) {
  const projects = personal ? personalProjects : professionalProjects;
  document.title = `${personal ? 'Personal projects' : 'Professional projects'} — Thanos Restas`;
  return <>
    <section className="intro">
      <p className="eyebrow">{personal ? 'EXPERIMENTS & EXPLORATIONS' : 'THANOS RESTAS / SELECTED WORK'}</p>
      <h1>{personal ? <>Made out of<br /><em>curiosity.</em></> : <>Practical tools.<br /><em>Immersive experiences.</em></>}</h1>
      <p>{personal ? 'Games, prototypes, and creative coding. A collection of personal projects, including my university thesis.' : 'Software engineer building enterprise platforms, desktop tools, and experiences across augmented and virtual reality.'}</p>
    </section>
    <div className="section-heading"><h2>{personal ? 'Personal projects' : 'Professional projects'}</h2><span>{String(projects.length).padStart(2, '0')} PROJECTS</span></div>
    <section className="grid" aria-label={`${personal ? 'Personal' : 'Professional'} projects`}>
      {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
    </section>
    <div className="resume-callout"><p>The experience behind the projects.</p><a className="button" href="index.html?page=resume">Explore my resume ↗</a></div>
  </>;
}

function ProjectPage({ id }: { id: string }) {
  const project = allProjects.find(item => item.id === id);
  if (!project) {
    document.title = 'Project not found — Thanos Restas';
    return <section className="intro"><h1>Project not found.</h1><a className="button" href="index.html">Return to professional projects</a></section>;
  }
  document.title = `${project.title} — Thanos Restas`;
  const personal = Boolean(project.repo);
  return <>
    <a className="back" href={`index.html${personal ? '?page=personal' : ''}`}>← All {personal ? 'personal' : 'professional'} projects</a>
    <section className="project-header"><p className="eyebrow">{project.category}</p><h1>{project.title}</h1><p className="metadata">{project.company ? `${project.company} · ${project.dates}` : 'Personal project'}</p></section>
    <div className="detail-layout">
      <aside><Artwork project={project} index={allProjects.indexOf(project)} /></aside>
      <article className="prose">
        <h2>Overview</h2><p>{project.overview}</p>
        {project.contributions.length > 0 && <><h2>{personal ? 'Project details' : 'My contributions'}</h2><Bullets items={project.contributions} /></>}
        {project.tech.length > 0 && <><h2>Technologies</h2><div><Tags items={project.tech} /></div></>}
        {project.repo && <p><a className="button" href={`https://github.com/ThanosRestas/${encodeURIComponent(project.repo)}`}>View source on GitHub ↗</a></p>}
      </article>
    </div>
  </>;
}

function Resume() {
  document.title = 'Resume — Thanos Restas';
  const ignite = professionalProjects[0];
  return <>
    <section className="intro"><p className="eyebrow">EXPERIENCE & BACKGROUND</p><h1>Thanos Restas</h1><p>Software Engineer · Thessaloniki, Greece</p><a className="button" href="Thanos_Restas_CV.pdf" download>Download CV (PDF) ↓</a></section>
    <article className="resume">
      <p className="summary">Software engineer working across enterprise platforms, desktop applications, development tools, XR, and games. I turn ideas into practical tools through quick prototyping, rapid iteration, and direct communication with colleagues.</p>
      <section className="resume-section"><h2>Experience</h2>
        <div className="job resume-card"><h3>Software Engineer · Chubb</h3><p className="metadata">April 2025 – Present · Thessaloniki, Greece</p><h4><a href={projectUrl(ignite)}>Ignite E-Trade & Underwriting Platform ↗</a></h4><Bullets items={ignite.contributions} /></div>
        <div className="job"><div className="resume-card"><h3>Software Engineer · CERTH</h3><p className="metadata">July 2020 – April 2025 · Thessaloniki, Greece</p><p>Centre for Research & Technology Hellas. Concurrent projects across desktop software, industrial tools, and immersive applications.</p></div>
          <div className="resume-project-grid">{professionalProjects.slice(1).map(project => <section className="resume-card resume-project" key={project.id}><h4><a href={projectUrl(project)}>{project.title} ↗</a></h4><p className="metadata">{project.dates}</p><p>{project.overview}</p><Bullets items={project.contributions} /></section>)}</div>
        </div>
        <div className="job resume-card"><h3>Software Engineer Intern · CERTH</h3><p className="metadata">July 2017 – August 2017 · Thessaloniki, Greece</p><Bullets items={['Explored 2D WebGL development.', 'Implemented the Singleton design pattern to manage the state of scene objects.', 'Experimented with Unity and procedural mesh generation.']} /></div>
      </section>
      <section className="resume-section"><h2>Education</h2><div className="resume-card"><h3>Ionian University</h3><p>BS, Informatics · Humanistic Informatics<br />Corfu, Greece</p><p>Thesis: <a href="index.html?project=theasis">Theasis — a first-person shooter for the web using BabylonJS ↗</a></p></div></section>
      <section className="resume-section"><h2>Skills</h2><div className="resume-card"><p><strong>Proficient:</strong> C#, Java, JavaScript<br /><strong>Familiar:</strong> C++, Python</p><p>.NET, WPF, XAML, Unity, Mendix, PostgreSQL, SQL, Docker, Git, Visual Studio, Postman, Bash</p></div></section>
      <section className="resume-section"><h2>Publications</h2><div className="resume-card"><p>A Collaborative AR/VR Platform for Social Manufacturing</p></div></section>
    </article>
  </>;
}

function App() {
  const page = params.get('page');
  const projectId = params.get('project');
  const active = page === 'resume' ? 'resume' : page === 'personal' || personalProjects.some(project => project.id === projectId) ? 'personal' : 'professional';
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="header"><a className="identity" href="index.html">Thanos Restas<span>Software Engineer</span></a><nav aria-label="Main navigation">
      <a href="index.html" aria-current={active === 'professional' ? 'page' : undefined}>Professional projects</a>
      <a href="index.html?page=personal" aria-current={active === 'personal' ? 'page' : undefined}>Personal projects</a>
      <a href="index.html?page=resume" aria-current={active === 'resume' ? 'page' : undefined}>Resume</a>
      <a href="#contact">Contact ↗</a>
    </nav></header>
    <main id="main">{projectId !== null ? <ProjectPage id={projectId} /> : page === 'resume' ? <Resume /> : <Listing personal={page === 'personal'} />}</main>
    <footer id="contact"><div><p className="eyebrow">GET IN TOUCH</p><h2>Let’s start a conversation.</h2></div><div className="contact-links"><a href="mailto:thanosre@gmail.com">thanosre@gmail.com ↗</a><a href="https://www.linkedin.com/in/thanosrestas/">LinkedIn ↗</a></div><p className="copyright">© {new Date().getFullYear()} Thanos Restas · Thessaloniki, Greece</p></footer>
  </>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
