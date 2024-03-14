
/* IMPORT */

import vscode from 'vscode';
import type {File} from './types';

/* MAIN */

const getActiveUntitledFilePath = (): File | undefined => {

  const document = vscode.window.activeTextEditor?.document;

  if ( !document?.isUntitled ) return;

  const path = document.uri.fsPath;
  const content = document.getText ();

  return { path, content };

};

/* EXPORT */

export default getActiveUntitledFilePath;
