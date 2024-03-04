# VSCode Extras

A collection of utilities for development vscode extensions.

## Install

```sh
npm install --save vscode-extras
```

## Usage

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

## License

MIT © Fabio Spampinato
