# Pixl Studio — releases

This repo hosts the **downloadable builds** of [Pixl Studio](https://github.com/dkcharles), a
beginner-friendly tool for writing tiny pixel arcade games. There is no source code here — just
installers.

## Install

Grab **`Pixl.Studio-win-Setup.exe`** from the
[latest release](https://github.com/dkcharles/pixl-releases/releases/latest) and run it. It installs
per-user (no admin needed), adds a Start-menu shortcut, and associates `.pixl` files with the Studio.

Windows SmartScreen may warn that the app is unrecognised — choose **More info → Run anyway**. The
builds are unsigned while Pixl is in testing.

## Updates

Installed copies of Pixl Studio update themselves automatically: the Studio checks this repo when it
opens, downloads any new version in the background, and installs it the next time you close the app.
You never need to come back here after the first install.

The other files on each release (`*.nupkg`, `releases.win.json`, the portable zip) are the update
feed the app reads — you can ignore them.
