// Post-build fix for static export: the App Router root layout can only emit a
// single static <html lang> (the default, "es"). This rewrites the lang
// attribute for every non-default locale's statically-generated pages so
// crawlers see the correct language without relying on the client-side
// HtmlLangSetter.
//
// NON_DEFAULT_LOCALES must match the non-default entries of `locales` in
// src/i18n/config.ts.
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join } from "node:path";

const OUT = "out";
const DEFAULT_LOCALE = "es";
const NON_DEFAULT_LOCALES = ["en", "fr"];

async function htmlFilesForLocale(dir, locale) {
  const results = [];
  // The /<locale> route itself is emitted as out/<locale>.html
  const top = join(dir, `${locale}.html`);
  try {
    await stat(top);
    results.push(top);
  } catch {
    // ignore if absent
  }
  // Nested pages live under out/<locale>/**
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

for (const locale of NON_DEFAULT_LOCALES) {
  const files = await htmlFilesForLocale(OUT, locale);
  let changed = 0;
  for (const file of files) {
    const html = await readFile(file, "utf8");
    const next = html.replace(
      `<html lang="${DEFAULT_LOCALE}"`,
      `<html lang="${locale}"`
    );
    if (next !== html) {
      await writeFile(file, next);
      changed++;
    }
  }
  console.log(
    `[fix-html-lang] updated lang="${locale}" in ${changed}/${files.length} files`
  );
}
