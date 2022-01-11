import ServicesContext from './context';
import DbService from './db';
import AuthService from './auth';
import { Services } from './types';

// This function runs on either app function after Firebase is loaded to ensure the
// firebase dependencies can run on the secondary app (share extension)
const loadServices = (): Services => {
  const _db = new DbService();
  return {
    db: _db,
    auth: new AuthService(_db),
  };
};

export default ServicesContext;

export { loadServices };

export type { Services };
