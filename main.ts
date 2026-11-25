// The Long Roast: Lawmakers and the File They Cannot Convert
// Writes one satirical sentence to /output/entry.txt.
// Deterministic: the same line on every run, well inside the 1-320 char gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "The committee that voted to regulate artificial intelligence adjourned early so an intern could teach them to save their own bill as a PDF.";

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE, "utf8");
