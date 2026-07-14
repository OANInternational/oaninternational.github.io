# Editing content (no code needed)

Two things on the site can be edited without a developer: the **members
counter** and the **blog posts**. There are two ways to do it — a **visual
editor** (easiest) and a **direct** method on GitHub.

---

## Quick reference

| What | Where | Effect |
| --- | --- | --- |
| Members counter | `content/site.json` | Home hero, "Become a member", goals section |
| Blog post (Spanish) | `content/blog/es/<slug>.md` | `/es/news/<slug>` + the Spanish news list |
| Blog post (English) | `content/blog/en/<slug>.md` | `/en/news/<slug>` + the English news list |
| Post images | `public/blog-images/…` | Referenced in a post as `/blog-images/<file>` |

Any change is picked up by the automatic deploy — the site updates ~1–2 minutes
after the change is saved.

---

## Option A — Visual editor (Pages CMS) — recommended

[Pages CMS](https://pagescms.org) is a free, hosted editor. There's **no server
to run and no OAuth app to create** — you just sign in and authorize it.

**One-time setup (once per person, done by someone with repo access):**

1. Go to **https://app.pagescms.org** and click **Sign in with GitHub**.
2. When prompted, **authorize the Pages CMS GitHub app** and give it access to
   the **`oaninternational.github.io`** repository. (This is what lets the
   editor save changes back to the site.)
3. Open the repository in Pages CMS. You'll see three sections, defined by the
   [`.pages.yml`](.pages.yml) file already in the repo:
   - **Blog (Español)** and **Blog (English)** — the posts
   - **Members counter** — the number

**To add a blog post:**

1. Write the post in Google Docs as usual. **File → Download → Markdown (.md)**.
2. In Pages CMS, open **Blog (Español)** (or English) → **Add entry**.
3. Fill in Title, Date, Author, a short Description, upload a Cover image, and
   paste the post into the **Content** field.
4. **Save.** Pages CMS commits it and the site redeploys.
5. Repeat in the other language collection to publish the post in both
   languages (use the **same slug/filename** so the two versions line up).

**To update the members counter:** open **Members counter**, change the number,
Save.

---

## Option B — Direct on GitHub (no setup, always works)

### Members counter
1. Open [`content/site.json`](content/site.json) on GitHub → ✏️ edit.
2. Change the number(s), then **Commit changes**:
   ```json
   { "members": { "current": 84, "target": 100 } }
   ```

### Blog post
1. Write in Google Docs → **File → Download → Markdown (.md)**.
2. On GitHub, add the file under `content/blog/es/` (Spanish) and/or
   `content/blog/en/` (English). Name it `<slug>.md` — the `<slug>` is the URL:
   `content/blog/es/magia-por-benin.md` → `/es/news/magia-por-benin`. Use the
   **same `<slug>`** in both language folders.
3. At the top of each file add this header ("front matter"), then paste the
   Markdown body below it:
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
4. **Images:** upload them into `public/blog-images/` and reference them as
   `![description](/blog-images/your-image.jpg)`.
5. Commit. The post appears at `/es/news/<slug>` / `/en/news/<slug>` and in the
   news list after the deploy.

---

## Notes

- **Both languages:** a post appears in a language only if that language's file
  exists. You can publish Spanish first and add the English version later.
- **Ordering:** posts are shown newest-first, by the `date` field.
- **Dates** must be `YYYY-MM-DD` in the front matter (the site formats them per
  language automatically).
