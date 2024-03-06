# VSCode Extras

A collection of utilities for development vscode extensions.

## Install

```sh
npm install --save vscode-extras
```

## Usage

#### `getActiveFilePath`

Get the path of the currently active file, which could be a textual or binary file.

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

#### `getActiveTextFilePath`

Get the path of the currently active textual file, where textual means the file is being edited with a textual editor.

```ts
import {getActiveTextFilePath} from 'vscode-extras';

const filePath = getActiveTextFilePath ();
```

#### `getConfig`

Get the configuration object for a given extension.

```ts
import {getConfig} from 'vscode-extras';

const config = getConfig ( 'myExtension' );
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
