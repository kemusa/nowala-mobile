import firestore, {
  CollectionReference,
  getFirestore,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  setDoc,
  onSnapshot,
  Query,
  orderBy,
  where,
  doc,
  collection,
  query,
  limit,
} from 'firebase/firestore';

export default class DbService {
  // private _db = firestore;
  private getFireStore = getFirestore();

  public async findById(path: string) {
    const ref = doc(this.getFireStore, path);
    const snapshot = await getDoc(ref);
    return { id: snapshot.id, data: snapshot.data() };
  }

  public async findCollection(collectionName: string) {
    const ref = collection(this.getFireStore, collectionName);
    const data = await getDocs(ref);
    return data.docs.map(doc => ({ id: doc.id, data: doc.data() }));
  }

  public subscribe(collectionName: string, callback: (data: any) => any) {
    const ref = collection(this.getFireStore, collectionName);
    return onSnapshot(ref, snapshot => {
      callback(snapshot?.docs.map(doc => ({ id: doc.id, data: doc.data() })));
    });
  }

  public subscribeOrderBy(
    collectionName: string,
    field: string,
    directionStr: firestore.OrderByDirection,
    callback: (data: any) => any,
    max?: number,
  ) {
    const ref = collection(this.getFireStore, collectionName);
    const q = max
      ? query(ref, orderBy(field, directionStr), limit(max))
      : query(ref, orderBy(field, directionStr));
    return onSnapshot(q, snapshot => {
      callback(snapshot?.docs.map(doc => ({ id: doc.id, data: doc.data() })));
    });
  }

  public subscribeToDoc(path: string, callback: (data: any) => any) {
    const ref = doc(this.getFireStore, path);
    return onSnapshot(ref, snapshot => {
      callback({ id: snapshot.id, data: snapshot.data() });
    });
  }

  public async writeDocument(path: string, document: any) {
    const ref = collection(this.getFireStore, path);
    const data = await addDoc(ref, document);
    return { id: data.id };
  }

  public async writeDocumentWithId(path: string, id: string, document: any) {
    const ref = doc(this.getFireStore, path, id);
    await setDoc(ref, document);
  }

  public async updateDocument(path: string, id: string, data: object) {
    const ref = doc(this.getFireStore, path, id);
    await updateDoc(ref, data);
  }

  // public get serverTimestamp() {
  //   return firebase.firestore.Timestamp;
  // }

  // public async getCollection(
  //   collectionName: string,
  //   config?: FBCollectionConfig,
  // ) {
  //   const ref = await collection(this.getFireStore, collectionName);
  //   const query = this._collectionConfig(ref, config);

  //   const data = await query.get();
  //   return data.docs.map(doc => ({ id: doc.id, data: doc.data() }));
  // }

  // public subscribe(
  //   collectionName: string,
  //   callback: (data: any) => any,
  //   config?: FBCollectionConfig,
  // ) {
  //   const ref = this._db.collection(collectionName);
  //   const query = this._collectionConfig(ref, config);
  //   return query.onSnapshot(snapshot =>
  //     callback(snapshot?.docs.map(doc => ({ id: doc.id, data: doc.data() }))),
  //   );
  // }

  // private _collectionConfig(
  //   ref: CollectionReference,
  //   config: FBCollectionConfig | undefined,
  // ): Query | CollectionReference {
  //   if (!config) return ref;

  //   const { order, filter } = config;
  //   if (filter && !order) {
  //     const { field, op, value } = filter;
  //     return where(field, op, value);
  //   }
  //   if (order && !filter) {
  //     const { field, direction } = order;
  //     return ref.orderBy(field, direction);
  //   }
  //   if (order && filter) {
  //     return ref
  //       .where(filter.field, filter.op, filter.value)
  //       .orderBy(order.field, order.direction);
  //   }
  //   return ref;
  // }
}
