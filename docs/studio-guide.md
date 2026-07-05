# Pixl Studio guide

Pixl Studio is where you write and run Pixl games. This is a quick tour of everything in the
window. For the language itself, see the [Pixl language reference](pixl-syntax-reference.md) —
the same reference is built into the app under **Learn → Reference**.

## First run

Studio creates a `PixlStudio` folder in your Documents with all the example games inside.
**Open** one (try `spacedot.pixl`), press **Run**, and use the arrow keys. That loop — open,
run, poke at the code, run again — is the whole idea.

## The window

- **The editor** (middle) colours your code as you type. Mistakes get a red squiggle, and a
  friendly card at the bottom explains each one in plain English — click a card to jump to the
  spot. A strip above the cards quietly suggests words that fit where your cursor is; click one
  to insert it.
- **The palette** (left) holds ready-made building blocks — `if`, `every`, `sprite`, `tune`,
  `function`, and more. Click one to drop it at your cursor.
- **The side panel** (right) shows your file and what the game is doing.

## The toolbar

- **New / Open / Save** (Ctrl+N / Ctrl+O / Ctrl+S) — your files live in `Documents\PixlStudio`.
- **▶ Run** (F5) / **■ Stop** (Shift+F5) — runs your game in its own little window
  (160×120 pixels, scaled up). Errors while playing stop the game and show a friendly message,
  never a crash.
- **📚 Learn** — lessons that teach the language step by step and *check your code* as you go,
  plus a browsable reference and a printable one-page language sheet.
- **🎨 Sprite** — a paint editor for pixel art. It writes ordinary `sprite "..."` code at your
  cursor, and if your cursor is already on a sprite it opens it for editing. Press **＋ frame**
  and it becomes an animation editor: paint frames side by side, reorder them, press ▶ to watch
  the flip-book, and it writes the list-of-sprites code plus a comment showing how to wire it up.
- **🎵 Tune** — a piano roll for sound. Click to place notes, drag to hold them, right-click to
  erase, ▶ to listen. It writes ordinary `tune "..."` code, and can start you off from one of
  the built-in tunes.
- **Convert** — flips your whole file between the two Pixl styles (indent + `end`, or `{ }`
  braces) without changing what it does. Comments survive.
- **Export C#** — turns your game into Unity-flavoured C#, for when you're curious what the
  same game looks like in a big language.
- **📦 Share** — builds your game into a folder with its own exe. Zip that folder and send it
  to anyone — they double-click and play, no install needed. Sharing those folders is
  explicitly allowed (see the [license](../LICENSE.md)).

## Making it comfortable

- **Theme** — Light, Dark, or High Contrast.
- **A− / A+** (Ctrl+− / Ctrl+=) — text size.
- **Readable font** — switches to OpenDyslexic if that reads easier for you.

All remembered between sessions.

## Updates

Installed copies update themselves: Studio checks for a new version when it opens, downloads it
quietly, and installs it when you close the app. The title bar shows which version you're on —
handy when reporting a problem.
