import { Option, none, some } from 'fp-ts/lib/Option';

export interface Auth {
  state: Option<boolean>;
  userName: Option<string>;
  passWord: Option<string>;
}

class User implements Auth {
  state: Option<boolean>;
  userName: Option<string>;
  passWord: Option<string>;

  constructor({ passWord, userName }: { passWord: string; userName: string }) {
    this.state = none;
    this.passWord = some(passWord);
    this.userName = some(userName);
  }

  public value: Auth = {
    state: this.state,
    userName: this.userName,
    passWord: this.passWord
  };

  public updateUser(auth: Auth) {
    this.state = auth.state;
    this.passWord = auth.passWord;
    this.userName = auth.userName;
    return this.value;
  }

  public login() {
    this.state = some(true);
    return this.value;
  }

  public logout() {
    this.state = some(false);
    return this.value;
  }

  public deleteUser() {
    this.state = none;
    this.userName = none;
    this.passWord = none;
    return this.value;
  }
}
