
/* IMPORT */

import vscode from 'vscode';

/* MAIN */

const openInExternal = ( url: string ): void => {

  const uri = vscode.Uri.parse ( url );

  vscode.env.openExternal ( uri );

};

/* EXPORT */

export default openInExternal;
