import * as Realm from 'realm-web';

import * as utils from './utils/response.utils';
import * as guards from './utils/gaurd.utils';
// import { Method, Document, IAccount, IFeedback } from './models/models.loader';

/**
 * Wrangler can have Global Durable Object of Env.
 * And Cloudlfare Worker can have KV(Durable Object).
 * 
 * In these Variables is exists in wrangler.toml.
 */
interface Bindings {

  REALM_APPID: string;

}

let Application: Realm.App;
const ObjectID = Realm.BSON.ObjectID;


const worker: ExportedHandler<Bindings> = {

 async fetch(req, env) {

  const url = new URL(req.url);

  const path = guards.unhandlePathGuard( url.pathname.replace(/[/]$/, '') );
  const method = guards.unhandleMethodGaurd( req.method );

  const search = url.searchParams.get('target');
  
  Application = Application || new Realm.App(env.REALM_APPID);

  console.log(Application);


  return utils.toError('OIOI');

 }
}

export default worker;