// Edit the words inside quotes to update the Skills section on the website.
// Keep commas between entries. You can add or remove entries and groups.

type SkillGroup = {
  label: string;
  items: string[];
};

type ResumeSkills = {
  groups: SkillGroup[];
  technologies: string[];
};

export const resumeSkills: ResumeSkills = {
  groups: [
    { label: 'Working Experience', items: ['C#', 'Java', 'JavaScript'] },
    { label: 'Familiar', items: ['C++', 'Python'] },
    { label: 'Other', items: ['.NET', 'WPF', 'XAML', 'Unity', 'Mendix', 'PostgreSQL', 'SQL',
    'Docker', 'Git', 'Visual Studio', 'Postman', 'Bash', 'WSL',] },
  ],
  technologies: [
  ],
};
