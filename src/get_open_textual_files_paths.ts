
/* IMPORT */

import vscode from 'vscode';
import getOpenFilesPathsByType from './get_open_files_paths_by_type';

/* MAIN */

const getOpenTextualFilesPaths = (): string[] => {

  return getOpenFilesPathsByType ( vscode.TabInputText );

};

/* EXPORT */

export default getOpenTextualFilesPaths;
