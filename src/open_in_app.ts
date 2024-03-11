
/* IMPORT */

import openBrowserPath from 'tiny-browser-open';
import openPath from 'tiny-open';

/* MAIN */

const openInApp = ( filePath: string, app?: 'chrome' | 'firefox' | 'edge' | 'safari' | string ): void => {

  if ( app === 'chrome' || app === 'firefox' || app === 'edge' || app === 'safari' ) {

    openBrowserPath ( filePath, { app } );

  } else {

    openPath ( filePath );

  }

};

/* EXPORT */

export default openInApp;
