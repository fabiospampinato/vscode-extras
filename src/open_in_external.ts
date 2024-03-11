
/* IMPORT */

import vscode from 'vscode';

/* MAIN */

const openInExternal = ( filePath: string ): void => {

  const uri = vscode.Uri.file ( filePath );

  vscode.env.openExternal ( uri );

};

/* EXPORT */

export default openInExternal;
