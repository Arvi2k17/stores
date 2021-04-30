/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import  {AppServer} from './server'

const app = new AppServer().getApp();
export { app };
