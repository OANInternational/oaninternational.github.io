// Post-build fix for static export: the App Router root layout can only emit a
// single static <html lang> (default "es"). This rewrites the lang attribute to
// "en" in every statically-generated English page so crawlers see the correct
// language without relying on the client-side HtmlLangSetter.
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join } from "node:path";

const OUT = "out";
const LOCALE = "en";

async function htmlFilesForLocale(dir, locale) {
  const results = [];
  // The /en route itself is emitted as out/en.html
  const top = join(dir, `${locale}.html`);
  try {
    await stat(top);
    results.push(top);
  } catch {
    // ignore if absent
  }
  // Nested pages live under out/en/**
  async function walk(current) {
    let entries;
    try {
      entries = await readdir(current, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const full = join(current, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
      } else if (entry.name.endsWith(".html")) {
        results.push(full);
      }
    }
  }
  await walk(join(dir, locale));
  return results;
}

const files = await htmlFilesForLocale(OUT, LOCALE);
let changed = 0;
for (const file of files) {
  const html = await readFile(file, "utf8");
  const next = html.replace(/<html lang="es"/, `<html lang="${LOCALE}"`);
  if (next !== html) {
    await writeFile(file, next);
    changed++;
  }
}
console.log(`[fix-html-lang] updated lang="${LOCALE}" in ${changed}/${files.length} files`);
