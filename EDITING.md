# Edit BetterPortfolio in VS Code

Open the **BetterPortfolio** folder in VS Code, not the parent folder or `PreviousPortfolio`. The repository has its own VS Code tasks and browser launch configuration. VS Code already includes React and TypeScript editing support, so no extension is required for these changes. [VS Code's React guide](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial).

## Change the on-site Skills section

1. Press `Ctrl+P`, type `src/resumeSkills.ts`, and press Enter.
2. Change the words inside the quoted lists. Keep a comma between entries. You can remove an entry, add an entry, or duplicate a `{ label: ..., items: [...] }` group to add another labeled line.
3. Press `Ctrl+S`. Only the on-site resume changes. The downloadable `public/Thanos_Restas_CV.pdf` is a separate file and does not update automatically.

For example, to add a language to the Proficient line:

```ts
{ label: 'Proficient', items: ['C#', 'Java', 'JavaScript', 'TypeScript'] },
```

## See and check your edits

- Press `Ctrl+Shift+P`, choose **Tasks: Run Task**, then **Portfolio: Live preview**. Open `http://127.0.0.1:5180/index.html?page=resume`. Saving a file refreshes this preview. You can also press `F5` to open the resume in Edge after starting the live preview.
- Press `Ctrl+Shift+B` to run **Portfolio: Build production**. Fix any error shown in the terminal before sharing or deploying.
- After a successful build, run **Portfolio: Preview production** from **Tasks: Run Task** and open `http://127.0.0.1:4174/index.html?page=resume`.
- To stop a preview, click its terminal and press `Ctrl+C`. Stop running previews before reinstalling dependencies with `npm ci` on Windows.

If the editor shows missing package errors, close the previews, open VS Code's terminal with `` Ctrl+` ``, run `npm ci`, then run the build task again.

## Other places you can edit

| What you want to change | File |
| --- | --- |
| Resume Skills entries and labels | `src/resumeSkills.ts` |
| Project titles, descriptions, technologies, and order | `src/data.ts` |
| Home headlines, intro text, footer, and other resume text | `src/main.tsx` |
| Colors, spacing, and mobile layout | `src/styles.css` |
| Downloadable CV | `public/Thanos_Restas_CV.pdf` |

The repository has no remote, so saving or committing in VS Code does not publish the website. Deployment remains a separate step.
