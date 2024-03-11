
/* IMPORT */

import findUpPath from 'find-up-path';
import path from 'node:path';
import getActiveFilePath from './get_active_file_path';
import getProjectRootPaths from './get_project_root_paths';

/* MAIN */

const getGitRootPath = (): string | undefined => {

  const filePath = getActiveFilePath ();
  const folderPaths = getProjectRootPaths ();
  const startPath = filePath ? path.dirname ( filePath ) : folderPaths[0];

  if ( !startPath ) return;

  const gitPath = findUpPath ( '.git', startPath );

  if ( !gitPath ) return;

  return path.dirname ( gitPath );

};

/* EXPORT */

export default getGitRootPath;
