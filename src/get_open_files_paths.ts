
/* IMPORT */

import getOpenFilesPathsByType from './get_open_files_paths_by_type';

/* MAIN */

const getOpenFilesPaths = (): string[] => {

  return getOpenFilesPathsByType ();

};

/* EXPORT */

export default getOpenFilesPaths;
