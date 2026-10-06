#!/usr/bin/env node
// Mission 001 acceptance checker. Zero dependencies; needs Node 18 or newer.
//   From the repo root:  node missions/M-001/check.mjs
//   Another folder:      node missions/M-001/check.mjs path/to/folder
//
// It checks that your evidence and your page exist and contain the required parts.
// It can't check understanding. That's what the ownership check in chat is for.

import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = process.argv[2] ?? dirname(fileURLToPath(import.meta.url));
const read = (name) => {
  const path = join(dir, name);
  return existsSync(path) ? readFileSync(path, 'utf8') : null;
};
const wordCount = (text) => (text ?? '').split(/\s+/).filter(Boolean).length;

const results = [];
const check = (part, label, pass, hint) => results.push({ part, label, pass: Boolean(pass), hint });

// Part 1: the journey
check(1, 'before.md: your pre-test explanation (20+ words)', wordCount(read('before.md')) >= 20,
  'Write what you think happens when you type https://example.com, before learning anything.');

const evidence = read('evidence.md') ?? '';
check(1, 'evidence.md: a DNS answer (an IP address)', /\b(?:\d{1,3}\.){3}\d{1,3}\b/.test(evidence),
  'Paste your nslookup output.');
check(1, 'evidence.md: TLS or certificate details',
  /certificat|issuer|subject|issued|\bTLS\b|\bSSL\b|schannel/i.test(evidence),
  'Paste the TLS lines from curl -v, or the certificate details from the browser padlock.');
check(1, 'evidence.md: an HTTP status code', /HTTP\/[\d.]+\s+\d{3}|status code:?\s*\d{3}/i.test(evidence),
  'Paste the status line, e.g. "HTTP/1.1 200 OK", or "Status Code: 200" from DevTools.');
check(1, 'evidence.md: a TTFB time ("Waiting for server response")', /(?:TTFB|waiting)[^\n]*\d/i.test(evidence),
  'DevTools Network panel: click the request, open Timing, copy "Waiting for server response".');

// Part 2: your first page
const raw = read('index.html');
const html = (raw ?? '').replace(/<!--[\s\S]*?-->/g, '');
const has = (pattern) => pattern.test(html);
check(2, 'index.html exists', raw !== null, 'Create index.html by hand.');
if (raw !== null) {
  check(2, 'starts with <!doctype html>', /^\s*<!doctype html>/i.test(html),
    'The first line should be <!doctype html>.');
  check(2, '<html> has a lang attribute', has(/<html\b[^>]*\blang\s*=\s*["']?[a-z]{2}/i),
    'For example <html lang="en">.');
  check(2, 'character set is declared', has(/<meta\b[^>]*\bcharset\s*=/i), '<meta charset="utf-8">');
  check(2, 'viewport is set', has(/<meta\b[^>]*\bname\s*=\s*["']?viewport\b/i),
    '<meta name="viewport" content="width=device-width, initial-scale=1">');
  check(2, '<title> is not empty', has(/<title\b[^>]*>\s*[^<\s][^<]*<\/title>/i), 'Give the page a title.');
  check(2, 'meta description is set', has(/<meta\b[^>]*\bname\s*=\s*["']?description\b/i),
    '<meta name="description" content="...">');
  for (const tag of ['header', 'nav', 'main', 'footer']) {
    check(2, `has a <${tag}>`, has(new RegExp(`<${tag}\\b`, 'i')), `Use <${tag}> for that part of the page.`);
  }
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  check(2, 'exactly one <h1>', h1Count === 1, `Found ${h1Count}. A page has one main heading.`);
  check(2, 'has a paragraph', has(/<p\b/i), 'Add a <p>.');

  const images = html.match(/<img\b[^>]*>/gi) ?? [];
  const altText = (tag) => {
    const m = tag.match(/\balt\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+))/i);
    return m ? (m[1] ?? m[2] ?? m[3]) : null;
  };
  check(2, 'has an image, and every image has an alt attribute',
    images.length > 0 && images.every((tag) => altText(tag) !== null), 'Add an <img> with alt="...".');
  check(2, 'at least one image has meaningful alt text',
    images.some((tag) => (altText(tag) ?? '').trim() !== ''),
    'Describe what the image shows. Empty alt="" is only for decorative images.');
  check(2, 'has a link with an href', has(/<a\b[^>]*\bhref\s*=\s*["']?[^\s"'>]/i), 'Add <a href="...">...</a>.');
}
check(2, 'after.md: your new explanation (40+ words)', wordCount(read('after.md')) >= 40,
  'Explain the whole journey again, in your own words.');

for (const part of [1, 2]) {
  console.log(`\nPart ${part}`);
  for (const r of results.filter((r) => r.part === part)) {
    console.log(`  ${r.pass ? 'PASS' : 'FAIL'}  ${r.label}${r.pass ? '' : `\n        -> ${r.hint}`}`);
  }
}
const passed = results.filter((r) => r.pass).length;
console.log(`\n${passed}/${results.length} checks passed.`);
console.log('Not checked here: the W3C validator (0 errors) and your ownership check in chat.');
process.exit(passed === results.length ? 0 : 1);
