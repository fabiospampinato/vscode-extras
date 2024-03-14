
/* MAIN */

import getOpenFilesPaths from './get_open_files_paths';
import getOpenTextualFilesPaths from './get_open_textual_files_paths';

/* MAIN */

const getOpenBinaryFilesPaths = (): string[] => {

  const filesPaths = getOpenFilesPaths ();
  const textualFilesPaths = getOpenTextualFilesPaths ();
  const textualFilesPathsSet = new Set ( textualFilesPaths );
  const binaryFilesPaths = filesPaths.filter ( filePath => !textualFilesPathsSet.has ( filePath ) );

  return binaryFilesPaths;

};

/* EXPORT */

export default getOpenBinaryFilesPaths;
