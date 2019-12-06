class User {
  constructor(userData) {
    this.id = userData.login ? userData.login.uuid : userData.id;
    this.email = userData.email;
    this.name = userData.name.first || userData.name;
    this.lastname = userData.name.last || userData.lastname;
    this.birthday = userData.dob
      ? new Date(userData.dob.date)
      : new Date(userData.birthday);
    this.picture = userData.picture.thumbnail || userData.picture;
    this.pictureM = userData.picture.large || userData.pictureM;
    this.gender = userData.gender;
  }
  fullName() {
    return this.name + " " + this.lastname;
  }
  getFullName() {
    return this.fullName().toLowerCase();
  }
  getDate() {
    return (
      this.birthday.getDate() +
      "." +
      this.birthday.getMonth() +
      "." +
      this.birthday.getFullYear()
    );
  }

  getEmail() {
    var str = "";
    var str1 = "";
    var length1 = this.email.length;
    var index = this.email.indexOf("@");
    str = this.email.substring(0, index);
    for (let i = 0; i < Math.floor(str.length / 2) - 1; i++) {
      str1 += str[i];
    }
    str1 += "...";

    return (
      str[0] + "..." + str[index - 1] + this.email.substring(index, length1 - 1)
    );
    //str1 + this.email.slice(index);
  }
}
export default User;
