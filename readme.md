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

## License

MIT © Fabio Spampinato
