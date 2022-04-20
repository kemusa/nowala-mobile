import firestore, {
  CollectionReference,
  getFirestore,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  onSnapshot,
  Query,
  where,
  doc,
  collection,
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

  public async writeDocument(path: string, document: any) {
    const ref = collection(this.getFireStore, path);
    const data = await addDoc(ref, document);
    return { id: data.id };
  }

  public async writeDocumentWithId(path: string, id: string, document: any) {
    const ref = doc(this.getFireStore, path, id);
    await setDoc(ref, document);
  }

  // public async getCollection(
  //   collectionName: string,
  //   config?: FBCollectionConfig,
  // ) {
  //   const ref = await collection(this.getFireStore, collectionName);
  //   const query = this._collectionConfig(ref, config);

  //   const data = await query.get();
  //   return data.docs.map(doc => ({ id: doc.id, data: doc.data() }));
  // }

  // public subscribeWithState(
  //   collectionName: string,
  //   setStateFunc: React.Dispatch<React.SetStateAction<never[]>>,
  // ) {
  //   return this._db.collection(collectionName).onSnapshot(snapshot =>
  //     setStateFunc(
  //       snapshot?.docs.map(doc => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       })) as any,
  //     ),
  //   );
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

  // public async writeDocument(
  //   collectionName: string,
  //   data: object,
  //   id?: string,
  // ) {
  //   const collection = await this._db.collection(collectionName);
  //   const success = id
  //     ? await collection.doc(id).set(data)
  //     : await collection.add(data);
  //   return success;
  // }

  // public async updateDocument(path: string, id: string, data: object) {
  //   const success = await this._db
  //     .collection(path)
  //     .doc(id)
  //     .set(data, { merge: true });
  //   return success;
  // }

  // public get serverTimestamp() {
  //   return firebase.firestore.Timestamp;
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
