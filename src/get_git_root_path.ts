
/* IMPORT */

import findUpPath from 'find-up-path';
import path from 'node:path';
import getActiveFolderPath from './get_active_folder_path';

/* MAIN */

const getGitRootPath = (): string | undefined => {

  const folderPath = getActiveFolderPath ();

  if ( !folderPath ) return;

  const gitPath = findUpPath ( '.git', folderPath );

  if ( !gitPath ) return;

  return path.dirname ( gitPath );

};

/* EXPORT */

export default getGitRootPath;
