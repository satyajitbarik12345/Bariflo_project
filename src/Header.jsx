function Header(props) {
  console.log(props.headerInfo.email);
  return <h1>Welcome to header section {props.headerInfo.email}</h1>;
}

export default Header;
