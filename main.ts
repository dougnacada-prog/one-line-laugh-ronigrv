// The One-Line Laugh — entry program.
// Writes one funny sentence about alarm clocks to the file the judge
// reads. The sentence is the whole entry: a single line of 125
// characters, and nothing else is written to the file.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const laugh =
  "I set my alarm for 6am to become a morning person, and by 6:02 I had talked myself down to a person who merely owns an alarm.";

// ENTRY_OUTPUT overrides the default path when the grader sets it,
// otherwise the entry goes to /output/entry.txt.
function saveEntry(): void {
  const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, laugh, "utf8");
}

saveEntry();
