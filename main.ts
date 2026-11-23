// The One-Line Laugh — make.fun entry.
// The program writes a single original funny line about everyday life
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I set my alarm for 6am to become a morning person, and by 6:02 I had talked myself down to a person who merely owns an alarm.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE);
