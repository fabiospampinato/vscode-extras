# VSCode Extras

A collection of utilities for developing vscode extensions.

## Install

```sh
npm install --save vscode-extras
```

## Usage

#### `alert`

A convenience wrapper around `showInformationMessage`, `showWarningMessage` and `showErrorMessage`.

```ts
import {alert} from 'vscode-extras';

alert.error ( 'Some error' );
alert.info ( 'Some information' );
alert.warn ( 'Some warning' );
```

#### `exec`

The re-exported function from [`nanoexec`](https://github.com/fabiospampinato/nanoexec), for conveniently executing a native binary.

```ts
import {exec} from 'vscode-extras';

const {ok, code, stdout, stderr} = await exec ( 'echo', ['example'] );
```

#### `getActiveFileLanguage`

Get the language of the currently active file, if it's a textual one.

```ts
import {getActiveFileLanguage} from 'vscode-extras';

const language = getActiveFileLanguage ();
```

#### `getActiveFilePath`

Get the path of the currently active file, which could be either a textual or binary file.

```ts
import {getActiveFilePath} from 'vscode-extras';

const filePath = getActiveFilePath ();
```

#### `getActiveBinaryFilePath`

Get the path of the currently active binary file, where binary means the file is not being edited with a textual editor.

```ts
import {getActiveBinaryFilePath} from 'vscode-extras';

const filePath = getActiveBinaryFilePath ();
```

#### `getActiveTextualFilePath`

Get the path of the currently active textual file, where textual means the file is being edited with a textual editor.

```ts
import {getActiveTextualFilePath} from 'vscode-extras';

const filePath = getActiveTextualFilePath ();
```

#### `getActiveUntitledFile`

Get the current active file, if it's an untitled one.

```ts
import {getActiveUntitledFile} from 'vscode-extras';

const file = getActiveUntitledFile ();

file.path; // 'Untitled-1'
file.content; // 'Some content'
```

#### `getActiveFolderPath`

Get the path of the currently active folder, meaning the folder containing the currently active file, or the project root.

```ts
import {getActiveFolderPath} from 'vscode-extras';

const folderPath = getActiveFolderPath ();
```

#### `getConfig`

Get the configuration object for a given extension.

```ts
import {getConfig} from 'vscode-extras';

const config = getConfig ( 'myExtension' );
```

#### `getGitRootPath`

Infer the path of the nearest git repository, considering the currently open file also.

```ts
import {getGitRootPath} from 'vscode-extras';

const rootPath = getGitRootPath ();
```

#### `getOpenFilesPaths`

Get the paths of all the currently open files, across all visible tab groups.

```ts
import {getOpenFilesPaths} from 'vscode-extras';

const filesPaths = getOpenFilesPaths ();
```

#### `getOpenBinaryFilesPaths`

Get the paths of all the currently open binary files, across all visible tab groups.

```ts
import {getOpenBinaryFilesPaths} from 'vscode-extras';

const filesPaths = getOpenBinaryFilesPaths ();
```

#### `getOpenTextualFilesPaths`

Get the paths of all the currently open textual files, across all visible tab groups.

```ts
import {getOpenTextualFilesPaths} from 'vscode-extras';

const filesPaths = getOpenTextualFilesPaths ();
```

#### `getOpenUntitledFiles`

Get the currently open untitled files, across all visible tab groups.

```ts
import {getOpenUntitledFiles} from 'vscode-extras';

const files = getOpenUntitledFiles ();

files[0].path; // 'Untitled-1'
files[0].content; // 'Some content'
```

#### `getPackage`

Get the content of the `package.json` file, as provided by [`find-up-json`](https://github.com/fabiospampinato/find-up-json), considering the currently open file also.

```ts
import {getPackage} from 'vscode-extras';

const pkg = getPackage ();
```

#### `getPackageRootPath`

Infer the path of the nearest folder containing a `package.json` file, considering the currently open file also.

```ts
import {getPackageRootPath} from 'vscode-extras';

const rootPath = getPackageRootPath ();
```

#### `getProjectRootPath`

Infer the root path of the current project, considering the currently open file also.

```ts
import {getProjectRootPath} from 'vscode-extras';

const rootPath = getProjectRootPath ();
```

#### `getProjectRootPaths`

Get all the root paths that make up the current workspace.

```ts
import {getProjectRootPaths} from 'vscode-extras';

const rootPaths = getProjectRootPaths ();
```

#### `isInsiders`

Check if the current instance of vscode is the insiders one.

```ts
import {isInsiders} from 'vscode-extras';

const insiders = isInsiders ();
```

#### `openInApp`

A little wrapper around [`tiny-browser-open`](https://github.com/fabiospampinato/tiny-browser-open) and [`tiny-open`](https://github.com/fabiospampinato/tiny-open), for opening a file with a custom app.

```ts
import {openInApp} from 'vscode-extras';

openInApp ( 'https://example.com', 'firefox' );
openInApp ( '/path/to/project', 'Visual Studio Code' );
```

#### `openInDiffEditor`

A little wrapper around the built-in `vscode.diff` command.

```ts
import {openInDiffEditor} from 'vscode-extras';

const leftFilePath = '/path/to/left/file';
const rightFilePath = '/path/to/right/file';

openInDiffEditor ( leftFilePath, rightFilePath, 'Custom Title' );
```

#### `openInEditor`

A little wrapper around the built-in `vscode.open` command, with support for [`TextDocumentShowOptions`](https://code.visualstudio.com/api/references/vscode-api#TextDocumentShowOptions) options.

```ts
import vscode from 'vscode';
import {openInEditor} from 'vscode-extras';

openInEditor ( '/path/to/file', {
  preview: false
  viewVolumn: vscode.ViewColumn.Beside
});
```

#### `openInExternal`

A little wrapper around `vscode.env.openInExternal`, useful for opening a URL in the default browser.

```ts
import {openInExternal} from 'vscode-extras';

openInExternal ( 'https://example.com' );
```

#### `openInWindow`

Open a folder in a vscode window, either the current one or a new one.

```ts
import {openInWindow} from 'vscode-extras';

openInWindow ( '/path/to/folder' ); // Open in current window
openInWindow ( '/path/to/folder', true ); // Open in new window
```

#### `prompt`

A convenience wrapper around `showInformationMessage`, `showInputBox` and `showQuickPick`.

```ts
import {prompt} from 'vscode-extras';

const boolean = await prompt.boolean ( 'Do you want to continue?' );
const string = await prompt.string ( 'Wha is your name?' );
const password = await prompt.password ( 'What is your password?' );
const pick = await prompt.pick ( 'What is your favorite color?', ['red', 'green', 'blue'] );
```

## License

MIT © Fabio Spampinato
