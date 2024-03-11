
/* IMPORT */

import vscode from 'vscode';

/* MAIN */

const openInDiffEditor = ( leftFilePath: string, rightFilePath: string, title?: string ): void => {

  const leftUri = vscode.Uri.file ( leftFilePath );
  const rightUri = vscode.Uri.file ( rightFilePath );

  vscode.commands.executeCommand ( 'vscode.diff', leftUri, rightUri, title );

};

/* EXPORT */

export default openInDiffEditor;
