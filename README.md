# Pixl Studio — releases

This repo hosts the **downloadable builds** of Pixl Studio, a beginner-friendly tool for writing
tiny pixel arcade games. There is no source code here — just installers and docs.

## Install

Grab **`Pixl.Studio-win-Setup.exe`** from the
[latest release](https://github.com/dkcharles/pixl-releases/releases/latest) and run it. It installs
per-user (no admin needed), adds a Start-menu shortcut, and associates `.pixl` files with the Studio.

Windows SmartScreen may warn that the app is unrecognised — choose **More info → Run anyway**. The
builds are unsigned while Pixl is in testing.

## Learn Pixl

- **[Pixl Studio guide](docs/studio-guide.md)** — a tour of the app: the editor, running games,
  the sprite/animation painter, the tune editor, lessons, and sharing your games.
- **[Pixl language reference](docs/pixl-syntax-reference.md)** — the whole language on one page.

Both are also built into the app — the **Learn** button has step-by-step lessons that check your
code as you go, plus the same reference, browsable and printable.

## Updates

Installed copies of Pixl Studio update themselves automatically: the Studio checks this repo when it
opens, downloads any new version in the background, and installs it the next time you close the app.
You never need to come back here after the first install.

The other files on each release (`*.nupkg`, `releases.win.json`, the portable zip) are the update
feed the app reads — you can ignore them.

## License

Pixl is **free to use** for personal, educational, and classroom use while it is in testing, and
**the games you make with it are entirely yours** — including the shareable game folders the Share
button builds. Please don't re-host or sell Pixl itself; share the link to this page instead. Full
terms: [LICENSE.md](LICENSE.md).
