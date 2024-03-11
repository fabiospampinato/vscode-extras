
/* IMPORT */

import findUpPath from 'find-up-path';
import path from 'node:path';
import getActiveFolderPath from './get_active_folder_path';

/* MAIN */

const getPackageRootPath = (): string | undefined => {

  const folderPath = getActiveFolderPath ();

  if ( !folderPath ) return;

  const packagePath = findUpPath ( 'package.json', folderPath );

  if ( !packagePath ) return;

  return path.dirname ( packagePath );

};

/* EXPORT */

export default getPackageRootPath;
