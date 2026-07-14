# Editing content (no code needed)

Two things on the site can be edited without a developer: the **members
counter** and the **blog posts**. There are two ways to do it — a direct one
that works today, and a visual editor that needs a one-time setup.

---

## Quick reference

| What | File(s) | Effect |
| --- | --- | --- |
| Members counter | `content/site.json` | Home hero, "Become a member", goals section |
| Blog post | `content/blog/<slug>.es.md` and `<slug>.en.md` | `/es/news/<slug>` and `/en/news/<slug>` + the news list |
| Post images | `public/blog-images/…` | Referenced in a post as `/blog-images/<file>` |

Any change to these files is picked up by the automatic deploy — the site
updates ~1–2 minutes after the change is saved.

---

## Updating the members counter

1. Open [`content/site.json`](content/site.json) on GitHub.
2. Click the ✏️ (edit) button.
3. Change the number(s):
   ```json
   {
     "members": {
       "current": 84,
       "target": 100
     }
   }
   ```
4. Click **Commit changes**. Done — the site redeploys automatically.

---

## Adding a blog post (from Google Docs)

Blog posts are **Markdown** files. Authors keep writing in Google Docs and
export to Markdown:

1. Write the post in Google Docs as usual.
2. **File → Download → Markdown (.md)** (built into Google Docs).
3. In GitHub, go to the `content/blog/` folder and **Add file → Create new
   file** (or **Upload files**).
4. Name the file `<slug>.es.md` for Spanish (e.g. `magia-por-benin.es.md`) and
   add a second file `<slug>.en.md` for the English version. The `<slug>` is
   the URL: `magia-por-benin.es.md` → `/es/news/magia-por-benin`.
5. At the top of each file add this header (the "front matter"), then paste the
   Markdown body from Google Docs below it:
   ```markdown
   ---
   title: "Your post title"
   date: 2026-08-01
   author: "OAN International"
   description: "One sentence shown in the news list and link previews."
   image: /blog-images/your-cover-image.jpg
   ---

   Your post text in Markdown goes here…
   ```
6. **Images:** upload them into `public/blog-images/` (Add file → Upload files),
   then reference them in the post as `![description](/blog-images/your-image.jpg)`.
7. Commit. The post appears in both the news list and at
   `/es/news/<slug>` / `/en/news/<slug>` after the deploy.

**Bilingual note:** a post only appears in a language if that language's file
exists. You can publish `…es.md` first and add `…en.md` later — the site simply
won't show an English version until the `.en.md` file is added.

Existing older posts still live in the code (`src/constants/news/…`) and keep
working; new posts should use the Markdown files above.

---

## Optional: the visual editor (Sveltia CMS)

A friendly admin UI lives at **`/admin`** on the site. It gives a form with
side-by-side Spanish/English fields, an image uploader, and a Markdown editor,
and commits the files for you — no GitHub knowledge needed.

It needs **one one-time setup** by someone with repo admin access, because it
has to be allowed to write to the repository on your behalf:

1. Create a **GitHub OAuth App** (Settings → Developer settings → OAuth Apps):
   - Homepage URL: `https://www.oaninternational.org`
   - Authorization callback URL: use the Sveltia auth relay per its docs
     (https://github.com/sveltia/sveltia-cms#readme).
2. Connect that OAuth App to Sveltia (client ID) following the Sveltia CMS
   setup guide.
3. Visit `/admin`, sign in with GitHub, and edit.

The configuration (`public/admin/config.yml`) is already in place — it defines
the **Blog** collection (bilingual) and the **Members counter** field. Until
the OAuth step above is done, use the direct GitHub method described in the
sections above.
