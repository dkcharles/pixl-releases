# Pixl Reference

Everything in the Pixl language, on one page. Pixl makes tiny pixel arcade games on a
160×120 screen. Look things up here while you build — and if you want guided practice,
the Learn button has lessons that check your code.

---

## 1. Program shape

Every program is one `game`, then three blocks that every game must have, plus any helpers
(functions) you write.

```pixl
game MyGame

start
  // runs once, at the beginning
end

update
  // runs once per frame — thinking: keys, movement, score
end

draw
  // runs once per frame — painting: everything you see
end
```

- `start`, `update`, and `draw` are all required, and each one is closed by `end`.
- **Functions** (your own helpers) sit next to the three blocks, in any order (see §10).
- The screen is **160 wide × 120 tall**. `width` and `height` give you those numbers.

### Two ways to write it, one language

Pixl has two styles that mean exactly the same thing. The usual one is **indent style**
(one thing per line, blocks closed by `end`). There is also a **brace style** (`{ … }` and
optional `;`), which writes the three blocks like functions:

```pixl
game MyGame {
  start() {
    x = 1;
  }
  update() { }
  draw() {
    clear black;
  }
}
```

The Studio **Convert** button flips a file between the two styles without losing anything
(comments included). In indent style a command's values run to the end of the line, and how
far you indent is up to you.

### Comments

A comment starts with `//` and runs to the end of the line. Pixl ignores it — it is a note for you.

```pixl
// a whole-line comment
x = 1   // a note at the end of a line
```

---

## 2. Values

| Kind | Example | Notes |
|------|---------|-------|
| Number | `10`, `0.5`, `-3` | Whole numbers or decimals. Screen positions use the whole-number part. Dividing by zero gives `0`. |
| Text | `"Score: "` | Joins with `+` when either side is text. |
| Sprite | `sprite "..."` | A picture made of letters. Owns its own `x` and `y`. See §7. |
| Tune | `tune "C E G C5"` | A sound made of letters. See §8. |
| List | `[a, b, c]`, `list of 8 ...` | A row of values. Its size is fixed once made. See §9. |
| Entity | `entity with ... end` | A bundle of named parts that you define. See §9. |

**What counts as true** (for `if`, `when`, `and`, `or`, `not`): a number is true when it is not `0`,
text when it is not empty, a sprite or list when it is not empty, an entity when it has any part.

**Capital letters don't matter in names.** `Shade` and `shade` are the same variable, and `LEFT`
works. Keywords and command names are always lowercase.

---

## 3. Variables

Make a variable, or change it, with `=`. You don't have to announce it first.

```pixl
score = 0
score = score + 1
```

Variables are shared across `start`, `update`, and `draw`: set one anywhere, read it anywhere.
Inside a function, changes stay inside the function — see §10.

---

## 4. Commands (drawing, sound)

A command's values run to the end of the line. The commands are
`clear`, `pixel`, `rect`, `draw`, `text`, `sound`, and `volume`.

| Command | Form | Meaning |
|---------|------|---------|
| `clear` | `clear <colour>` | Fill the whole screen. |
| `pixel` | `pixel x, y, <colour>` | One dot. |
| `rect` | `rect x, y, w, h, <colour>` | A filled box. |
| `draw` | `draw <sprite>` | Draw a sprite where it lives (its own `x`, `y`). |
| `draw … at` | `draw <sprite> at x, y` | Draw it once at x, y **without** moving where it lives. |
| `text` | `text <string>, x, y` or `text <string>, x, y, <colour>` | Words. Colour is optional (white if left out). |
| `sound` | `sound <name>` | Play a sound. |
| `volume` | `volume <0..10>` | Master loudness for all tunes (starts at 10). See §8. |

Positions are x (across, 0 is the left edge) then y (down, 0 is the top). Example:

```pixl
draw
  clear black
  rect 10, 10, 40, 20, blue
  text "Score: " + score, 4, 4, white
  draw player
end
```

---

## 5. Colours, sounds, and built-in values

### The seven colours

Pixl has seven colours. Use the **name** in a command like `clear`, `pixel`, `rect`, or `text`.
Use the **letter** inside a `sprite` (one letter per dot).

| Colour | Name in a command | Letter in a sprite |
|--------|-------------------|--------------------|
| White | `white` | `W` |
| Red | `red` | `R` |
| Green | `green` | `G` |
| Blue | `blue` | `B` |
| Yellow | `yellow` | `Y` |
| Black | `black` | `K` |
| Grey | `grey` | `S` |

Most letters are just the first letter of the colour. The two odd ones: `B` was taken by blue,
so black is `K` (the last letter of "black"); `G` was taken by green, so grey is `S` (for silver).
In a sprite, `.` is see-through (no dot drawn).

```pixl
clear black             // the name, in a command

// the letters, in a sprite: K is black, R is red
player = sprite "
  .KK.
  KRRK
  .KK.
"
```

### Sounds

- **Sound:** `sound beep` — a short ding.
- **Ready-made tunes** (use them anywhere a tune goes): `pew`, `zap`, `boom`, `pickup`, `jump`, `win`, `lose`. See §8.

Only these colour and sound names work. If you mistype one, Pixl tells you before the game runs.

### Built-in values

These are always there to read (you can't change them):

| Built-in | Value |
|----------|-------|
| `left` `right` `up` `down` `space` | `1` while that key is held down, else `0`. |
| `width` `height` | The screen size (`160` / `120`). Same as `window.width` / `window.height`. |
| `time` | Seconds since the game started. |
| `delta` | Seconds since the last frame. |
| `random` | A new number from 0 up to (but not including) 1, **every time you read it**. `random * width` gives a random x. |

> Because `left`, `right`, … are just `1` or `0`, `if left` works, and so does `if left and space`.

---

## 6. Deciding and timing

### if / else

```pixl
if score > 10
  clear green
else
  clear black
end
```

`else` is optional. The condition uses the "what counts as true" rule from §2.

### when — once per press

Runs its body **once each time** the condition goes from false to true. Holding a key fires it
once, not every frame.

```pixl
when space
  sound beep     // one beep per press, not per frame
end
```

### every — a timer

Runs its body once every `n` seconds. The word `seconds` (or `second`) is optional.

```pixl
every 1 seconds
  ticks = ticks + 1
end
```

`when` and `every` have one body each (no `else`) and work in both styles.

---

## 7. Sprites and dot members

A sprite is a picture made of letters, written between quotes, usually over several lines.
`.` is see-through, and each letter is a colour (the full table is in §5):

| Letter | Colour |
|--------|--------|
| `W` | white |
| `R` | red |
| `G` | green |
| `B` | blue |
| `Y` | yellow |
| `K` | black |
| `S` | grey |

> In Studio you can **paint** a sprite on a grid (🎨 Sprite) instead of typing the letters — it
> writes the `sprite "..."` for you, and re-opens the one at your cursor so you can edit it.

```pixl
player = sprite "
  .YY.
  YYYY
  .YY.
"
player.x = 60
player.y = 60
```

**Dot members** (write a dot after a name to reach inside it; chains like `rock.body.x` work):

| Thing | What you can reach |
|-------|--------------------|
| Sprite | `x`, `y` (read and change), `width`, `height` (read only) |
| `window` | `width`, `height` (read only, `160` / `120`) |
| List | `count` (read only — how many items) |
| Entity | the parts you gave it |

Changing a member sticks, all the way down a chain: `rock.body.x = rock.body.x + 1` moves the rock.

---

## 8. Tunes and sound (music + effects)

A tune is a **sound made of letters** — the sound version of a sprite:

```pixl
song = tune "
  C C G G A A G -
  F F E E D D C -
"
```

| Symbol | Meaning |
|--------|---------|
| `C D E F G A B` | The seven notes. Capitals or lowercase, either works. |
| `#` after a note (`C#`, `G#3`) | Sharp — one step higher. |
| digit after a note (`C5`, `C#5`) | Octave, 1 to 8. Leave it out for 4 (`C` is `C4`). Higher numbers are higher notes. |
| `.` | A rest (one beat of silence) — the tune's version of see-through. |
| `-` | Hold: the note before it lasts one beat longer. `C - - .` is a long C then a rest. |

There are 8 beats per second. Spaces and new lines don't matter, so you can lay a tune out
like a sprite. A mistyped note is caught before the game runs (*"I do not know the note H."*).

> In Studio you can **compose on a piano roll** (🎵 Tune) instead of typing — click notes
> and hear them, drag to hold, ▶ to play back — and it writes the `tune "..."` for you, or
> re-opens the one at your cursor so you can edit it.

### Playing — two channels, like a retro console

```pixl
play song forever            // the MUSIC channel: loops until replaced or hushed
play song 3 times            // music that stops itself after 3 passes
play pew                     // the EFFECT channel: plays once, OVER the music
play boom at volume 10       // this play's own loudness (0–10)
volume 5                     // the master loudness (0–10, starts at 10)
hush                         // silence both channels
```

- Anything that keeps going (`forever` or `<n> times`) uses the **music channel**. A plain
  `play` is a one-off **effect** on top of it. One of each at a time — a new play replaces the
  old one on its channel. (The word `times` is optional, like `every`'s `seconds`.)
- Use `when` for key-press sounds. Under `if`, the tune restarts every frame the key is held.
- Music for a while is a pattern, not a command: `play song forever` plus `every 30 seconds hush end`.

### Ready-made tunes

`pew` `zap` `boom` `pickup` `jump` `win` `lose` work straight away. Each is an ordinary tune
with a name — use it, then copy the idea and write your own. If you make a variable with the
same name, yours wins.

---

## 9. Lists and entities

### Lists

```pixl
nums = [1, 2, 3]
rocks = list of 8 sprite "
  YY
  YY
"
```

`list of <count> <value>` makes `count` copies of the value (up to 10000). `<list>.count` tells
you how many items there are.

**A list's size is fixed** — there is no `add` or `remove`. Make as many as you will ever need up
front, and hide the ones you aren't using (for example, move them off the screen).

### Picking one item — `list[i]`

Pick one item out of a list by number. **Counting starts at 0**, so `frames[0]` is the first item
and the last one is `frames[frames.count - 1]`.

```pixl
first = frames[0]        // read an item
frames[1] = other        // change an item (the change sticks)
rocks[i].x = rocks[i].x + 1   // read or change a member of an item

draw frames[frame] at x, y    // the classic use: pick the current animation frame
```

Asking for an item number the list doesn't have (or using `[ ]` on something that isn't a list)
stops the game with a friendly message, e.g. *"There is no item number 9. This list has 4 (0 to 3)."*

### for each

```pixl
for each rock in rocks
  rock.y = rock.y + 1     // the change sticks — the loop puts each item back
end
```

The loop **puts each item back** into the list after each turn, so changing a sprite inside the
loop really moves it. This is what makes a list of sprites work in the game loop.

### Entities

An entity bundles named parts that you define. Name every part when you make it.

```pixl
ball = entity with
  body = sprite "
    WW
    WW
  "
  vx = 1
  vy = 1
end
```

A part can hold any value — including a sprite with its own position (`ball.body.x`) or another
entity. Pixl knows an entity's parts, so a typo like `ball.vbx` is caught: *"ball has body, vx,
and vy, not vbx."*

Put the three together — a list of entities, each wrapping a sprite — and you have the standard
way to make "many moving things" (see `manyrocks.pixl`, `asteroids.pixl`, `functions.pixl`).

---

## 10. Functions

Write your own helpers. `function name(p1, p2) … end` (brace style too) sits next to the three
main blocks.

```pixl
function move(r)
  r.body.x = r.body.x + r.vx
  if r.body.x < 0 or r.body.x > width - r.body.width
    r.vx = -r.vx
  end
  return r
end
```

- **Give a value back** with `return <value>`. A function without `return` just does something.
- **Call it as a value** — `x = clamp(x, 0, width)` — or **on its own line** — `drawHud()`.
  The brackets `( )` are what tell Pixl it is a call and not a command.
- **Inside a function**, you can read your game's variables, but changing one only changes the
  function's own copy. To change the game, `return` the new value and store it. That works
  nicely with `for each`:

  ```pixl
  for each ball in balls
    ball = move(ball)
  end
  ```

- **A function can't call itself**, directly or through another function. Pixl checks this.

---

## 11. Maths, comparing, and combining

Pixl works out the tightest operators first. From loosest (done last) to tightest (done first):

1. `or`
2. `and`
3. `not` (goes in front)
4. comparing: `>` `<` `>=` `<=` `==` `!=` `touches`
5. adding and taking away: `+` `-`
6. multiplying and dividing: `*` `/`
7. minus in front: `-x`
8. single things (numbers, text, names, `(...)`, calls, dot members)

Notes:

- **Comparing** gives `1` (true) or `0` (false), and only works on numbers. `==` needs an exact
  match, so don't compare `time` or `delta` with `==` or `!=` — they are almost never exactly a
  value. Use `>=` instead (Pixl warns you about this).
- **`and` / `or`** use the "what counts as true" rule from §2, stop as soon as they know the
  answer, and give `1` or `0`. **`not x`** flips it (true → `0`, false → `1`). `not not x` is allowed.
- **`a touches b`** is collision: `1` when the boxes around the two sprites overlap, else `0`.
  Things that aren't sprites never touch. It sits at the comparing level, so `not a touches b`
  means `not (a touches b)`.
- **Minus in front** is done before `*` and `/`, so `-3 * 2` is `(-3) * 2`. A `-` between two
  values is taking away.
- **`+`** joins text when either side is text (`"Score: " + score` → `"Score: 5"`). Numbers show
  plainly; sprites add nothing.
- `=` sets a variable; `==` asks "are these equal?".
- **Numbers** can have a decimal point (`0.5`). `player.x` still means "the x of player", because
  no digit follows the dot.

---

## 12. Export and convert

- **Convert** (Studio) flips a file between indent style and brace style, without losing anything.
- **Export C#** writes a C# version of your game that you can run. Functions, sprite members,
  maths, `and`/`or`/`not`, `touches`, `if`, `when`, and `every` all come out as real C#. Entities,
  chained member changes, `for each` over lists, and sound (`play`, `hush`, `volume`) come out as
  `// TODO` notes for you to fill in.

---

## 13. Learn by example

The examples in My games (or the `examples` folder) are the best companion to this reference:

| File | Shows |
|------|-------|
| `hello.pixl` | The smallest program. |
| `mover.pixl`, `keys.pixl` | Keys, and `if` vs `when`. |
| `spacedot.pixl` | Movement, `when`, `every`, sprite members. |
| `bouncer.pixl`, `dodge.pixl`, `catch.pixl` | Movement and collision (`touches`). |
| `clock.pixl` | `every` timers. |
| `platformer.pixl` | A fuller game loop. |
| `manyrocks.pixl` | Lists and `for each` (make them all up front, hide the spare ones). |
| `walkcycle.pixl` | Animation from code: a list of frames and `frames[frame]`. |
| `functions.pixl` | Functions that give values back. |
| `soundcheck.pixl` | Tunes: looping music, effects over it, volume, hush. |
| `asteroids.pixl`, `swarm.pixl` | Lists of entities — the whole toolkit together. |
