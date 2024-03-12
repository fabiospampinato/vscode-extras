
/* IMPORT */

import vscode from 'vscode';

/* MAIN */

const openInWindow = ( folderPath: string, inNewWindow?: boolean ): void => {

  const uri = vscode.Uri.file ( folderPath );

  vscode.commands.executeCommand ( 'vscode.openFolder', uri, inNewWindow );

};

/* EXPORT */

export default openInWindow;
