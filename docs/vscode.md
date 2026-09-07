# Pixl in VS Code

Once you're comfortable in Pixl Studio you can write Pixl in VS Code too. The Pixl extension gives
you colours, code snippets, error messages as you type, and a ▶ Run button — and VS Code lets you
keep several files open at once, handy for looking back at an old game while you write a new one.

## Install the extension

1. Install [VS Code](https://code.visualstudio.com/) if you don't have it.
2. Download the `pixl-vscode-*.vsix` file from the newest **Pixl for VS Code** entry on the
   [releases page](https://github.com/dkcharles/pixl-releases/releases) (currently
   [0.2.1](https://github.com/dkcharles/pixl-releases/releases/tag/vscode-v0.2.1)).
3. In VS Code open the Extensions view (Ctrl+Shift+X), click the **⋯** menu at the top of it, choose
   **Install from VSIX…**, and pick the file you downloaded.
4. Open any `.pixl` file — your games live in `Documents\PixlStudio` — and the colours appear
   straight away.

## Running your game

Press **F5** (or the ▶ Run button). The extension launches your game with the Pixl Player that
comes with Pixl Studio, so keep the Studio installed. If VS Code can't find the player, point the
`pixl.playerPath` setting at your `PixlPlayer.exe`.

## Working in both

Files are just files: open the same `.pixl` in the Studio and in VS Code, save in one, and the other
picks it up when you reopen it. The Studio stays the friendly place for lessons, the sprite and tune
editors, and sharing; VS Code is for when you want a grown-up editor, more than one file open, or Git.
