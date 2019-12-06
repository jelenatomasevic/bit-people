import React from "react";
import UserList from "./UserList";
import { userService } from "../service/ServiceUser";
import UserCard from "./UserCard";
import ActionButtons from "./ActionButtons";
import Search from "./Search";
import Loading from "../Components/Loading";
import NotFound from "./NotFound";

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isGrid: false,
      searchQuery: "",
      users: [],
      loading: true,
      update: new Date()
    };
  }
  // componentWillReceiveProps(nextProps) {}
  // getDerivedStateFromProps() {}
  componentDidMount() {
    this.loadPageData();
  }

  loadPageData = () => {
    this.setState({ loading: true });

    userService.getUsers().then(myUsers => {
      this.setState({ users: myUsers, loading: false });
    });
  };

  onRefresh = () => {
    userService.fetchUsers().then(myUsers => {
      this.setState({ users: myUsers, loading: false });
    });
  };

  changeLayout = () => {
    this.setState(prevState => {
      return {
        isGrid: !prevState.isGrid
      };
    });
  };

  onSearch = val => {
    this.setState({ searchQuery: val });
  };

  render() {
    const filteredUsers = this.state.users.filter(user =>
      user.getFullName().startsWith(this.state.searchQuery.toLowerCase())
    );

    const female = filteredUsers.filter(element => element.gender === "female")
      .length;

    const male = filteredUsers.filter(element => element.gender === "male")
      .length;

    const view = this.state.isGrid ? (
      <UserCard users={filteredUsers} />
    ) : (
      <UserList users={filteredUsers} />
    );

    const notfound = filteredUsers.length === 0 ? <NotFound /> : view;

    const component = this.state.loading === true ? <Loading /> : notfound;

    return (
      <div>
        <div class="row">
          <Search onSearch={this.onSearch} />

          <ActionButtons
            onLayoutChange={this.changeLayout}
            onRefresh={this.onRefresh}
            isGrid={this.state.isGrid}
          />
          <p>{`Male: ${male} Female: ${female}`}</p>
        </div>
        <div>{component}</div>
      </div>
    );
  }
}

export default UserPage;
