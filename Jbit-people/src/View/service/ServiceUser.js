import User from "../model/User";

class UserService {
  getUsers() {
    if (this.hasSavedUsers()) {
      return new Promise((resolve, reject) => {
        const myUsers = this.loadUsers();
        resolve(myUsers);
      });
    } else {
      return this.fetchUsers();
    }
  }

  hasSavedUsers() {
    return localStorage.getItem("users");
  }

  loadUsers() {
    const usersJson = localStorage.getItem("users");
    const savedUsersData = JSON.parse(usersJson);

    const myUsers = savedUsersData.map(userData => {
      return new User(userData);
    });

    return myUsers;
  }

  fetchUsers() {
    const url = "https://randomuser.me/api/?results=15";

    return fetch(url)
      .then(res => res.json())
      .then(responseObject => {
        const usersData = responseObject.results;
        localStorage.setItem("users", JSON.stringify(usersData));
        return usersData;
      })
      .then(usersData => {
        const myUsers = usersData.map(userData => {
          return new User(userData);
        });

        return myUsers;
      });
  }

  fetchUser(userId) {
    // not sure
    const url = "https://randomuser.me/api/users/" + userId;

    return fetch(url)
      .then(res => res.json())
      .then(data => {
        return new User(data);
      });
  }

  // login(un, pass) {
  //   // not sure
  //   const url = "https://randomuser.me/login"

  //   return fetch(url)
  //     .then(res => res.json())
  //     .then(data => {

  //       return new User(data);
  //     });
  // }

  getSavedUsers() {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    if (savedUsers) {
      return savedUsers.map(user => new User(user));
    }

    return [];
  }
}

export const userService = new UserService();
