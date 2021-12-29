import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";

class BoxRepository {
  constructor(app) {
    this.db = getDatabase(app);
  }

  // hard mode
  //  db가 업데이트 될 때마다 콜백 함수 호출
  syncHardBoxes(userId, onUpdate) {
    const query = ref(this.db, `${userId}/hardBoxes`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
      console.log(value);
    });
    return () => off(query);
  }

  saveHardBox(userId, hardBox) {
    set(ref(this.db, `${userId}/hardBoxes/${hardBox.id}`), hardBox);
  }

  removeHardBox(userId, hardBox) {
    remove(ref(this.db, `${userId}/hardBoxes/${hardBox.id}`));
  }

  // soft mode
  syncsoftBoxes(userId, onUpdate) {
    const query = ref(this.db, `${userId}/softBoxes`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  }

  savesoftBox(userId, softBox) {
    set(ref(this.db, `${userId}/softBoxes/${softBox.id}`), softBox);
  }

  removesoftBox(userId, softBox) {
    remove(ref(this.db, `${userId}/softBoxes/${softBox.id}`));
  }
}

export default BoxRepository;
