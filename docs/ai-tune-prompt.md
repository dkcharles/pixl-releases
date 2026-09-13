# Prompt: make a tune or sound for Pixl

Give this whole prompt to an AI chat (ChatGPT, Claude, Copilot, Gemini…), then paste its answer
into your Pixl code. Change the **tune you want** at the end.

---

I am writing a game in **Pixl**, a small game language for beginners. I need a tune written in
Pixl's tune notation, ready to paste into my code. Follow these rules exactly.

**The notation**

- A tune is a line of code: `name = tune "NOTES"` where NOTES is a list of tokens separated by
  single spaces.
- A note token is a letter `C D E F G A B`, an optional `#` for a sharp, and an optional octave
  digit from `1` to `8`. No digit means octave 4 (middle). Examples: `C`, `F#`, `G5`, `A#3`.
- There are **no flats**: write B♭ as `A#`, E♭ as `D#`, and so on.
- `.` is a rest (silence) for one beat.
- `-` holds the previous note for one more beat. Use several in a row for a long note: `C - - -`.
- Every token lasts one beat, and one beat is an eighth of a second (0.125 s). So a note held for
  half a second is `C - - -`, and 8 tokens make one second.
- Notes must stay between `C1` and `B8`. Melodies sound best between octave 4 and octave 6.
- No bar lines, commas, brackets, rests written as words, or anything else — only the tokens
  above, spaces between them, and the double quotes around the whole tune.
- Keep the tune to **16 to 64 tokens** (2 to 8 seconds). A short, recognisable phrase is better
  than the whole song.

**The answer must contain only this**, with no explanation before or after:

1. One line of Pixl code: `name = tune "..."` where `name` is a short lowercase word with no
   spaces that describes the tune (for example `birthday`, `laser`, `fanfare`). Do not use the
   names `pew`, `zap`, `boom`, `pickup`, `jump`, `win` or `lose` — Pixl already has sounds with
   those names.
2. On the next line, a Pixl comment (`// ...`) saying what it is and how to play it, like
   `// play birthday   or   play birthday forever`.

**Example answer** (the first bar of Twinkle Twinkle):

```
twinkle = tune "C - C - G - G - A - A - G - - - F - F - E - E - D - D - C - - -"
// play twinkle   or   play twinkle forever
```

**Please choose a tune that is traditional or out of copyright** (nursery rhymes, folk songs,
classical themes, Christmas carols) or a short original sound effect, rather than copying a
tune that belongs to a film or a game.

**The tune I want:** *(write it here, for example: the first line of Ode to Joy / a rising
laser sound / a sad losing sound / the start of Jingle Bells)*

---

**Using it in Pixl:** paste the tune line inside your `start` block. Then, in `update`, play it
when something happens — `when space` … `play twinkle` … `end` — or start it once in `start`
with `play twinkle forever` for background music. `hush` stops all sound. To hear it before you
use it, open the 🎵 Tune button, paste the notes there, and press ▶.
