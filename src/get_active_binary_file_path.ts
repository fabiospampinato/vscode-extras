
/* IMPORT */

import vscode from 'vscode';
import getActiveTextFilePath from './get_active_text_file_path';
import {isObject} from './utils';

/* MAIN */

const getActiveBinaryFilePath = (): string | undefined => {

  const input = vscode.window.tabGroups.activeTabGroup.activeTab?.input;

  if ( !isObject ( input ) || !( 'uri' in input ) ) return;

  const uri = input.uri;

  if ( !( uri instanceof vscode.Uri ) ) return;

  const binaryFilePath = uri.fsPath;
  const textFilePath = getActiveTextFilePath ();

  if ( binaryFilePath === textFilePath ) return;

  return binaryFilePath;

};

/* EXPORT */

export default getActiveBinaryFilePath;
