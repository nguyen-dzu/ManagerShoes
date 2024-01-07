export class WriteUser {
  constructor() {}

  WriteUser(user, dbrt, ref, set) {
    set(ref(dbrt, `user/${user.id}`), user);
  }
}
