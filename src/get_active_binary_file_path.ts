
/* IMPORT */

import fs from 'node:fs';
import vscode from 'vscode';
import getActiveTextualFilePath from './get_active_textual_file_path';
import {isObject} from './utils';

/* MAIN */

const getActiveBinaryFilePath = (): string | undefined => {

  const input = vscode.window.tabGroups.activeTabGroup.activeTab?.input;

  if ( !isObject ( input ) || !( 'uri' in input ) ) return;

  const uri = input.uri;

  if ( !( uri instanceof vscode.Uri ) ) return;

  const binaryFilePath = uri.fsPath;

  if ( !fs.existsSync ( binaryFilePath ) ) return;

  const textualFilePath = getActiveTextualFilePath ();

  if ( binaryFilePath === textualFilePath ) return;

  return binaryFilePath;

};

/* EXPORT */

export default getActiveBinaryFilePath;
