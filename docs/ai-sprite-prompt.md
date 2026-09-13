# Prompt: make a sprite or animation for Pixl

Give this whole prompt to an AI chat (ChatGPT, Claude, Copilot, Gemini…), then paste its answer
into your Pixl code. Change the **thing you want** at the end.

---

I am writing a game in **Pixl**, a small game language for beginners with a 160 by 120 pixel
screen. I need pixel art written as a Pixl sprite, ready to paste into my code. Follow these
rules exactly.

**The notation**

- A sprite is a block of text: `name = sprite "` on the first line, then one row of letters per
  line, then a closing `"` on its own line.
- Each character is one pixel. `.` is transparent (see-through). The colours are:
  `W` white, `R` red, `G` green, `B` blue, `Y` yellow, `K` black, `S` grey.
  There are no other colours and no other letters.
- **Every row must be the same length.** Use `.` to pad rows that would be shorter.
- **Do not forget the dots.** Never use spaces or leave a row short: every empty pixel is a `.`,
  including the ones at the start and end of a row.
- Keep the sprite between **6 by 6 and 16 by 16** pixels. Small and bold reads best.
- Indent each row by two spaces, and use two spaces in front of `name = sprite "`, so it drops
  straight into a `start` block.
- Most Pixl games clear the screen to black, so use `K` (black) only for details that sit on a
  lighter colour, never for outlines against the background.

**An animation** is a list of sprites that are all the same size:

```
  walk = [
    sprite "
      ...
    "
    sprite "
      ...
    "
  ]
```

Give an animation 2 to 4 frames, change only the parts that move between frames, and name the
list with a plural or an action word (`coins`, `walk`, `flap`).

**The answer must contain only this**, with no explanation before or after:

1. The Pixl code for the sprite (or the animation list), with a short lowercase name with no
   spaces (for example `alien`, `heart`, `coin`). Do not use the names `left`, `right`, `up`,
   `down`, `space`, `width`, `height`, `time`, `delta`, `random`, `window`, or any colour name.
2. On the next line, a Pixl comment (`// ...`) saying what it is and how to draw it: for a
   sprite, `// draw alien at 76, 56`; for an animation, the counter and timer to add (see the
   animation example).

**Example answer, a sprite** (a classic space-invader style alien, 11 by 8):

```
  alien = sprite "
    ..G.....G..
    ...G...G...
    ..GGGGGGG..
    .GG.GGG.GG.
    GGGGGGGGGGG
    G.GGGGGGG.G
    G.G.....G.G
    ...GG.GG...
  "
  // draw alien at 76, 56
```

**Example answer, an animation** (a spinning coin, 3 frames of 6 by 6):

```
  coins = [
    sprite "
      .YYYY.
      YYYYYY
      YYYYYY
      YYYYYY
      YYYYYY
      .YYYY.
    "
    sprite "
      ..YY..
      .YYYY.
      .YYYY.
      .YYYY.
      .YYYY.
      ..YY..
    "
    sprite "
      ..YY..
      ..YY..
      ..YY..
      ..YY..
      ..YY..
      ..YY..
    "
  ]
  coin = 0
  // in update:  every 0.15 seconds  coin = coin + 1  if coin >= coins.count  coin = 0  end  end
  // in draw:    draw coins[coin] at 76, 56
```

**Please draw simple, classic shapes** (an alien, a ghost, a heart, a coin, a star, a rocket, a
mushroom, a skull, a key, a bird) in your own pixel style rather than copying a character that
belongs to a film or a game.

**The thing I want:** *(write it here, for example: a red heart / a grey ghost with eyes / a
three-frame flapping bird / a rocket ship pointing up)*

---

**Using it in Pixl:** paste the sprite inside your `start` block, then draw it in `draw` with
`draw alien at 76, 56`. To give it a position that moves, set `alien.x = 76` and `alien.y = 56`
in `start`, change them in `update`, and write just `draw alien`. For an animation, add the
counter line from the comment to `start`, the `every` block to `update`, and the `draw` line to
`draw`. To touch it up, put your cursor on the sprite and press the 🎨 Sprite button.
