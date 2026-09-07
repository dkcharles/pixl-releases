# Pixl Studio guide

Pixl Studio is where you write and run Pixl games. This is a quick tour of everything in the
window. For the language itself, see the [Pixl language reference](pixl-syntax-reference.md) —
the same reference is built into the app behind the **📖 Reference** button (F1).

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
- **📚 Learn** — lessons that teach the language step by step and *check your code* as you go.
- **🎨 Sprite** — a paint editor for pixel art. It writes ordinary `sprite "..."` code at your
  cursor, and if your cursor is already on a sprite it opens it for editing. Press **＋ frame**
  and it becomes an animation editor: paint frames side by side, reorder them, press ▶ to watch
  the flip-book, and it writes the list-of-sprites code plus a comment showing how to wire it up.
- **🎵 Tune** — a piano roll for sound. Click to place notes, drag to hold them, right-click to
  erase, ▶ to listen. It writes ordinary `tune "..."` code, and can start you off from one of
  the built-in tunes.
- **📦 Share** — a menu. *Copy a web link* puts a link on your clipboard that anyone can open to
  play your game in a browser, no install. *Make a Windows folder* builds your game into a folder
  with its own exe — zip it and send it, they double-click and play. Sharing either is
  explicitly allowed (see the [license](../LICENSE.md)).
- **📖 Reference** (F1) — the whole language, browsable and searchable, from anywhere: every
  command, colour and sound, plus a printable one-page sheet. Press it again to put it away.
- **🧰 More** — *Convert* flips your whole file between the two Pixl styles (indent + `end`, or
  `{ }` braces) without changing what it does; *Export C#* turns your game into Unity-flavoured
  C#; text size, the readable font and the theme live here too, along with the welcome screen
  and *Bring an asset from a link…* (see below).

## Making it comfortable

- **Theme** — Light, Dark, or High Contrast.
- **A− / A+** (Ctrl+− / Ctrl+=) — text size.
- **Readable font** — switches to OpenDyslexic if that reads easier for you.

All remembered between sessions.

## Pixl in VS Code

Want to look at an old game while you write a new one, or try a grown-up editor? Your games are
ordinary files in `Documents\PixlStudio`, and VS Code can open them with the Pixl extension:
colours, error messages as you type, and a Run button. See [Pixl in VS Code](vscode.md) for the
install steps — in the Studio, 🧰 More ▸ **Pixl in VS Code…** opens that page.

## Handing a sprite or tune to a teammate

Working on one game as a group? Whoever paints a sprite, draws an animation or writes a tune can hand it over as a link.

1. In the sprite editor or the tune editor, press **Copy a link**. The link is now on your clipboard.
2. Send it to your teammate any way you like: chat, email, Teams.
3. Your teammate opens 🧰 More ▸ **Bring an asset from a link…**, pastes it, and the right editor opens with your work in it, named as you named it (or with a 2 on the end if that name is already taken in their game). They press **Insert** and it lands in `start` like anything else.

Inside an editor, **From a link…** does the same but loads the link into the editor that is already open.

## Updates

Installed copies update themselves: Studio checks for a new version when it opens, downloads it
quietly, and installs it when you close the app. The title bar shows which version you're on —
handy when reporting a problem.
