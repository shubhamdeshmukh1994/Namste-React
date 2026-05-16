import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // creating state variable inside class based commponant
    this.state = {
      name: props.name || "John Doe",
      email: props.email || "john.doe@example.com",
      phone: props.phone || "123-456-7890",
      address: props.address || "123 Main St, Anytown, USA",
      occupation: props.occupation || "Software Developer",
      avatar_url: "dummy",
      count: 0,
    };
  }
  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/shubhamdeshmukh1994",
    );
    const json = await data.json();
    //getting data from api
    this.setState({
      name: json.name,
      avatar_url: json.avatar_url,
    });

    //after setState componant re-render with new data
  }
  async componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  async componentWillUnmount() {
    console.log("componentWillUnmount called");
  }

  async componentDidCatch(){
    console.log("componentDidCatch called")
  }

  render() {
    const { name, email, phone, address, occupation, count, avatar_url } =
      this.state;
    return (
      <div className="user-card">
        <h1>User Component using Class based Component </h1>
        <h1>Count : {count}</h1>
        {/* react updating state variable or updating state */}
        <button
          className="btn_cnt"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increse Count
        </button>
        <ul>
          <li>Name: {name}</li>
          <li>
            <img src={avatar_url} />
          </li>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
          <li>Address: {address}</li>
          <li>Occupation: {occupation}</li>
        </ul>
      </div>
    );
  }
}

export default UserClass;
