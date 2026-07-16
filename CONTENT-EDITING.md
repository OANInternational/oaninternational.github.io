# Editing content (no code needed)

Two things on the site can be edited without a developer: the **members
counter** and the **blog posts**. There are two ways to do it — a **visual
editor** (easiest) and a **direct** method on GitHub.

The site is shown in **Spanish, English and French**. The UI (menus, buttons,
page text) is translated into all three. **Blog posts are different:** each post
is written in **one language** and is shown to visitors in every language — you
do not translate posts.

---

## Quick reference

| What | Where | Effect |
| --- | --- | --- |
| Members counter | `content/site.json` | Home hero, "Become a member", goals section |
| Blog post | `content/blog/<slug>.md` | `/es/news/<slug>`, `/en/news/<slug>`, `/fr/news/<slug>` + the news list |
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
   the **`oaninternational.github.io`** repository.
3. Open the repository in Pages CMS. You'll see two sections, defined by the
   [`.pages.yml`](.pages.yml) file already in the repo:
   - **Blog posts** — the posts
   - **Members counter** — the number

**To add a blog post:**

1. Write the post in Google Docs as usual. **File → Download → Markdown (.md)**.
2. In Pages CMS, open **Blog posts** → **Add entry**.
3. Fill in Title, Date, pick the **Language** the post is written in (es/en/fr),
   Author, a short Description, upload a Cover image, and paste the post into the
   **Content** field.
4. **Save.** Pages CMS commits it and the site redeploys. The post shows up for
   all visitors, whatever language they're browsing in.

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
2. On GitHub, add the file under `content/blog/`. Name it `<slug>.md` — the
   `<slug>` is the URL: `content/blog/magia-por-benin.md` → `/news/magia-por-benin`.
3. At the top of the file add this header ("front matter"), then paste the
   Markdown body below it:
   ```markdown
   ---
   title: "Your post title"
   date: 2026-08-01
   language: es        # the language you wrote the post in: es, en or fr
   author: "OAN International"
   description: "One sentence shown in the news list and link previews."
   image: /blog-images/your-cover-image.jpg
   ---

   Your post text in Markdown goes here…
   ```
4. **Images:** upload them into `public/blog-images/` and reference them as
   `![description](/blog-images/your-image.jpg)`.
5. Commit. The post appears in the news list and at `/es/news/<slug>`,
   `/en/news/<slug>` and `/fr/news/<slug>` after the deploy.

---

## Notes

- **One language per post.** Write each post once, in whichever language you
  like, and set `language` accordingly. It shows for every visitor regardless of
  the site language they picked. (The existing posts are in Spanish.)
- **Ordering:** posts are shown newest-first, by the `date` field.
- **Dates** must be `YYYY-MM-DD` in the front matter (the site formats them in
  the post's own language automatically).
