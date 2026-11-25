import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Judge brief: exactly one word, the word grandma would text about AI — a real word, a family in-joke, a typo she would actually make, or text-speak.
const WORD = "ROBOTNYA";

// Self-check: the sealed gate accepts UTF-8 text of 1 to 30 characters, not only white space; the entry must be exactly one word.
if ([...WORD].length < 1 || [...WORD].length > 30 || !/^\S+$/.test(WORD)) {
  throw new Error("entry fails the one-word 1-30 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
