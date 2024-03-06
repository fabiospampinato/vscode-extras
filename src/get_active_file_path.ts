
/* IMPORT */

import getActiveBinaryFilePath from './get_active_binary_file_path';
import getActiveTextFilePath from './get_active_text_file_path';

/* MAIN */

const getActiveFilePath = (): string | undefined => {

  return getActiveBinaryFilePath () || getActiveTextFilePath ();

};

/* EXPORT */

export default getActiveFilePath;
