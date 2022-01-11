import 'firebase/functions';
import functions from 'firebase/functions';

export default class BackendService {
  private _db = functions;

  // public async sendProductData(collections: string[], product_data: Product) {
  //   try {
  //     const { data } = await this._db.
  //       .functions(fnsConfig.GCLOUD_REGION)
  //       .httpsCallable(fnsConfig.FAST_API)({
  //       api: 'add_product_app',
  //       collections,
  //       product_data,
  //     });
  //     // todo: handle different response types
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
}
