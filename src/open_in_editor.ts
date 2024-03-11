
/* IMPORT */

import vscode from 'vscode';

/* TYPES */

type Options = {
  preserveFocus?: boolean,
  preview?: boolean,
  range?: vscode.Range,
  viewColumn?: vscode.ViewColumn
};

/* MAIN */

const openInEditor = ( filePath: string, options?: Options ): void => {

  const uri = vscode.Uri.file ( filePath );

  vscode.commands.executeCommand ( 'vscode.open', uri, options );

};

/* EXPORT */

export default openInEditor;
