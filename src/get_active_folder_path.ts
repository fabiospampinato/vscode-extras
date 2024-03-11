
/* IMPORT */

import path from 'node:path';
import getActiveFilePath from './get_active_file_path';
import getProjectRootPaths from './get_project_root_paths';

/* MAIN */

const getActiveFolderPath = (): string | undefined => {

  const filePath = getActiveFilePath ();
  const folderPaths = getProjectRootPaths ();
  const folderPath = filePath ? path.dirname ( filePath ) : folderPaths[0];

  return folderPath;

};

/* EXPORT */

export default getActiveFolderPath;
