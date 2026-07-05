# Pixl Reference

Everything in the Pixl language, on one page. Pixl makes tiny pixel arcade games on a
160×120 canvas. Look things up here while you build — and if you want guided practice,
the Learn button has lessons that check your code.

---

## 1. Program shape

Every program is one `game`, then three required lifecycle blocks, plus any number of functions.

```pixl
game MyGame

start
  // runs once, at the beginning
end

update
  // runs once per frame — game logic, input, movement
end

draw
  // runs once per frame — everything you see
end
```

- `start`, `update`, and `draw` are all required and each closed by `end`.
- **Functions** are top-level siblings of the lifecycle blocks, in any order (see §10).
- The canvas is **160 wide × 120 tall**. `width`/`height` give you those.

### Two syntaxes, one language

Pixl has two interchangeable styles that parse to the same thing. The default is **indent style**
(newlines + `end`). There is also a **brace style** (`{ … }` + optional `;`), which writes the
lifecycle blocks like functions:

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

The Studio **Convert** button flips a file between the two styles losslessly (comments preserved).
In indent style a command reads its arguments to the end of the line; indentation is cosmetic.

### Comments

`//` line comments only. They survive Convert.

```pixl
// a whole-line comment
x = 1   // a trailing comment
```

---

## 2. Values

| Kind | Example | Notes |
|------|---------|-------|
| Number | `10`, `0.5`, `-3` | `double` internally, truncated to int for screen coordinates. Divide-by-zero yields `0`. |
| Text | `"Score: "` | Joins with `+` when either side is text. |
| Sprite | `sprite "..."` | Owns its own `x`/`y`; has read-only `width`/`height`. See §7. |
| Tune | `tune "C E G C5"` | A sound made of letters. See §8. |
| List | `[a, b, c]`, `list of 8 ...` | Ordered, fixed-size in v1. See §9. |
| Entity | `entity with ... end` | Learner-defined bundle of named fields. See §9. |

**Truthiness** (used by `if`, `when`, `and`/`or`/`not`): a number is true when ≠ 0, text when
non-empty, a sprite when non-empty, a list when non-empty, an entity when it has any field.

**Case-insensitive identifiers.** `Shade` and `shade` are the same variable; `LEFT` works. Keywords
and command names stay lowercase.

---

## 3. Variables

Create and update a variable with `=`. There is no declaration keyword.

```pixl
score = 0
score = score + 1
```

Variables live in one shared space across `start`/`update`/`draw` (set it anywhere, read it
anywhere). Inside a function, writes stay local — see §10.

---

## 4. Commands (drawing, sound)

Commands take arguments to end-of-line (indent style). The valid commands are
`clear`, `pixel`, `rect`, `draw`, `text`, `sound`.

| Command | Form | Meaning |
|---------|------|---------|
| `clear` | `clear <colour>` | Fill the whole screen. |
| `pixel` | `pixel x, y, <colour>` | One pixel. |
| `rect` | `rect x, y, w, h, <colour>` | Filled rectangle. |
| `draw` | `draw <sprite>` | Draw a sprite at its own stored position. |
| `draw … at` | `draw <sprite> at x, y` | Draw once at x, y **without** changing the sprite's stored position. |
| `text` | `text <string>, x, y` or `text <string>, x, y, <colour>` | Colour defaults to white. |
| `sound` | `sound <name>` | Play a sound. |
| `volume` | `volume <0..10>` | Master loudness for all tunes (default 10). See §8. |

Example:

```pixl
draw
  clear black
  rect 10, 10, 40, 20, blue
  text "Score: " + score, 4, 4, white
  draw player
end
```

---

## 5. Fixed vocabulary

These are the **only** valid names in colour/sound slots (the checker validates them):

- **Colours:** `black`, `white`, `red`, `green`, `blue`, `yellow`, `grey`
- **Sounds:** `beep`
- **Ready-made tunes** (playable anywhere a tune is): `pew`, `zap`, `boom`, `pickup`, `jump`, `win`, `lose`

**Built-in values** (read-only, always available):

| Built-in | Value |
|----------|-------|
| `left` `right` `up` `down` `space` | `1` while the key is held, else `0`. |
| `width` `height` | Canvas size (`160` / `120`). Aliases for `window.width` / `window.height`. |
| `time` | Seconds of host time elapsed. |
| `delta` | Seconds since the last frame (the fixed timestep). |
| `random` | A fresh number in `[0, 1)` **each read**. `random * width` → random x. |

> Because `left`/`right`/… are just `1`/`0`, `if left` works, and so does `if left and space`.

---

## 6. Control flow

### if / else

```pixl
if score > 10
  clear green
else
  clear black
end
```

`else` is optional. The condition is truthiness (§2).

### when — edge trigger

Runs its body **once each time** the condition rises from false to true. A held key fires once.

```pixl
when space
  sound beep     // one beep per press, not per frame
end
```

### every — timer

Runs its body once per `n` seconds of host time. The unit word (`seconds`/`second`) is optional.

```pixl
every 1 seconds
  ticks = ticks + 1
end
```

`when` and `every` are single-body blocks (no `else`) and work in both syntaxes.

---

## 7. Sprites and members

A sprite literal is quoted, possibly multi-line text. `.` is transparent; letters are palette
colours:

| Symbol | Colour |
|--------|--------|
| `W` | white |
| `R` | red |
| `G` | green |
| `B` | blue |
| `Y` | yellow |
| `K` | black |
| `S` | grey |

> In Studio you can **paint** a sprite on a grid (🎨 Sprite) instead of hand-typing it — it writes
> the `sprite "..."` for you, and re-opens the one at your caret to edit.

```pixl
player = sprite "
  .YY.
  YYYY
  .YY.
"
player.x = 60
player.y = 60
```

**Curated `.` members** (access with a dot; chaining like `rock.body.x` works):

| Target | Members |
|--------|---------|
| Sprite | `x`, `y` (read/write), `width`, `height` (read-only) |
| `window` | `width`, `height` (read-only, `160`/`120`) |
| List | `count` (read-only length) |
| Entity | its own declared field names |

Assignment writes back along the whole path, so `rock.body.x = rock.body.x + 1` sticks.

---

## 8. Tunes and sound (music + effects)

A tune is a **sound made of letters** — the audio parallel of a sprite:

```pixl
song = tune "
  C C G G A A G -
  F F E E D D C -
"
```

| Symbol | Meaning |
|--------|---------|
| `C D E F G A B` | The seven notes. Case-insensitive. |
| `#` suffix (`C#`, `G#3`) | Sharp — one semitone up. |
| digit suffix (`C5`, `C#5`) | Octave, 1–8. Default is 4 (`C` = `C4`). |
| `.` | A rest (one beat of silence) — the sprite's "transparent", for sound. |
| `-` | Hold: the previous note lasts one beat longer. `C - - .` is a long C then a rest. |

Beats are fixed at 8 per second. Whitespace and newlines don't matter, so tunes format
like sprites. A typo'd note is caught at compile time (*"I do not know the note H."*).

> In Studio you can **compose on a piano roll** (🎵 Tune) instead of hand-typing — click
> notes and hear them, drag to hold, ▶ to play back — and it writes the `tune "..."` for
> you, or re-opens the one at your caret to edit.

### Playing — two channels, like a retro console

```pixl
play song forever            // the MUSIC channel: loops until replaced or hushed
play song 3 times            // music that stops itself after 3 passes
play pew                     // the EFFECT channel: one-shot, plays OVER the music
play boom at volume 10       // this play's own loudness (0–10)
volume 5                     // the master loudness (0–10, default 10)
hush                         // silence both channels
```

- Anything long-running (`forever` or `<n> times`) takes the **music channel**; a plain
  `play` is a one-shot **effect** on top of it. One of each at a time; a new play
  replaces its channel. (`times` is an optional unit word, like `every`'s `seconds`.)
- Use `when` for key-press sounds — under `if`, the tune restarts every held frame.
- Timed music is a pattern, not syntax: `play song forever` + `every 30 seconds hush end`.

### Ready-made tunes

`pew` `zap` `boom` `pickup` `jump` `win` `lose` work out of the box — each is an
ordinary named pattern (a worked example: use it, then copy the idea and write your
own). Your own variable with the same name wins.

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

`list of <count> <value>` makes `count` copies of the once-evaluated value (count clamped to
`[0, 10000]`). `<list>.count` is the length.

**Lists are fixed-size** — no `add`/`remove` (use the pool pattern instead).

### Indexing — `list[i]`

Pick one item out of a list by number. **Numbering starts at 0**, so `frames[0]` is the first item
and the last is `frames[frames.count - 1]`.

```pixl
first = frames[0]        // read an item
frames[1] = other        // write an item (change sticks)
rocks[i].x = rocks[i].x + 1   // read/write a member of an item

draw frames[frame] at x, y    // the classic use: pick the current animation frame
```

Picking an item number the list doesn't have (or using `[ ]` on something that isn't a list) stops
the game with a friendly message, e.g. *"There is no item number 9. This list has 4 (0 to 3)."*

### for each

```pixl
for each rock in rocks
  rock.y = rock.y + 1     // change sticks — the loop writes each item back
end
```

The loop **writes each item back** into the list after every iteration, which is what makes a
list of sprites usable in the game loop.

### Entities

An entity bundles named fields you define. Declare every field up front.

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

A field can hold any value — including a position-owning sprite (`ball.body.x`) or another entity
(nesting is allowed). The checker knows an entity's declared fields, so `ball.vbx` (a typo) is
caught: *"ball has body, vx, and vy, not vbx."*

Combine the three — a list of entities each wrapping a sprite is the standard "many moving things"
pattern (see `examples/manyrocks.pixl`, `examples/asteroids.pixl`, `examples/functions.pixl`).

---

## 10. Functions

Write your own helpers. `function name(p1, p2) … end` (brace form too), a top-level sibling of the
lifecycle blocks.

```pixl
function move(r)
  r.body.x = r.body.x + r.vx
  if r.body.x < 0 or r.body.x > width - r.body.width
    r.vx = -r.vx
  end
  return r
end
```

- **Return a value** with `return <expr>`. No `return` → a procedure.
- **Call as an expression** — `x = clamp(x, 0, width)` — or **as a statement** — `drawHud()`.
  Parentheses are what distinguish a call from a command.
- **Scope:** reads fall through to globals, but writes stay local. A function reads game state and
  changes it only by returning a value you store. This composes with `for each` write-back:

  ```pixl
  for each ball in balls
    ball = move(ball)
  end
  ```

- **No recursion** — a function may not reach itself, directly or indirectly (the checker enforces this).

---

## 11. Expressions and operators

Precedence, **loosest to tightest**:

1. `or`
2. `and`
3. `not` (prefix)
4. comparisons: `>` `<` `>=` `<=` `==` `!=` `touches`
5. additive: `+` `-`
6. multiplicative: `*` `/`
7. unary minus: `-x` (prefix)
8. primary (literals, names, `(...)`, calls, member access)

Notes:

- **Comparisons** yield `1`/`0` and are numeric only. `==`/`!=` is exact double equality — the
  checker warns against comparing the continuous `time`/`delta` with `==`/`!=` (use `>=`).
- **`and` / `or`** read each side's truthiness, short-circuit, and yield `1`/`0`.
  **`not x`** is prefix negation (truthy → `0`, falsy → `1`); `not not x` is allowed.
- **`a touches b`** is collision: `1` when two sprites' bounding boxes overlap, else `0`.
  Non-sprites never touch. It sits at comparison level, so `not a touches b` means `not (a touches b)`.
- **Unary minus** binds tighter than `* /`, so `-3 * 2` is `(-3) * 2`; a `-` between two values is
  subtraction.
- **`+`** joins text when either side is text (`"Score: " + score` → `"Score: 5"`); numbers render
  plainly, sprites contribute nothing.
- `=` is assignment, `==` is equality.
- **Number literals** may be decimals (`0.5`). `player.x` keeps the dot as member access because a
  digit doesn't follow it.

---

## 12. Export & convert

- **Convert** (Studio) flips a file between indent and brace style, losslessly.
- **Export C#** emits a runnable C# translation. Functions, sprite members, arithmetic/boolean/
  `touches`, `if`/`when`/`every` all export natively. Entities, chained member assignment,
  `for each` over lists, and sound (`play`/`hush`/`volume`) currently export as `// TODO`
  stubs (they don't fit the flattening / have no clean Unity target here).

---

## 13. Learn by example

The `examples/` folder is the best companion to this reference:

| File | Shows |
|------|-------|
| `hello.pixl` | The smallest program. |
| `mover.pixl`, `keys.pixl` | Input, `if` vs `when`. |
| `spacedot.pixl` | Movement, `when`, `every`, sprite members. |
| `bouncer.pixl`, `dodge.pixl`, `catch.pixl` | Movement + collision (`touches`). |
| `clock.pixl` | `every` timers. |
| `platformer.pixl` | A fuller game loop. |
| `manyrocks.pixl` | Lists + `for each` (pool pattern). |
| `walkcycle.pixl` | Animation from code: a list of frames + indexing (`frames[frame]`). |
| `functions.pixl` | Functions returning values. |
| `soundcheck.pixl` | Tunes: looping music, effects over it, volume, hush. |
| `asteroids.pixl`, `swarm.pixl` | Lists of entities, the full toolkit together. |
