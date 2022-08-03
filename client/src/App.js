import React, { Component } from "react";
import Customer from "./components/Customer";
import CustomerAdd from "./components/CustomerAdd";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import CircularProgress from "@mui/material/CircularProgress";
import { withStyles } from "@mui/styles";

const styles = {
  root: {
    // root는 가장 바깥쪽이다(html 태그)
    width: "100%",
    marginTop: 50,
    overflowX: "auto", // 오버플로우 가능하도록 처리
  },
  table: {
    minWidth: 1080,
    // 무조건 1080px 이상 출력될 수 있게
  },
  progress: {
    margin: 30,
  },
};

class App extends Component {
  state = {
    customers: "",
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    // 데이터 받아서(.then) state로 설정. res라는 이름으로 변수이름가 바뀜 그걸 customers 변수에 넣겠따.
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err)); // 오류 발생 경우 콘솔창에 해당 오류 출력
  }

  callApi = async () => {
    const response = await fetch("api/customers"); // 내가 만든 api 경로에 접속해서
    const body = await response.json(); // 받아온 데이터들을 json형태로 만들어 body변수에 저장
    return body; // 고객 명단 데이터 전달
  };

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { classes } = this.props; // 변수 만들어서 위에 정의한 styles가 적용될 수 있게
    return (
      <div>
        <Paper className={classes.root}>
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>번호</TableCell>
                  <TableCell>이미지</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>생년월일</TableCell>
                  <TableCell>성별</TableCell>
                  <TableCell>직업</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.customers ? (
                  this.state.customers.map((c) => {
                    return (
                      <Customer
                        key={c.id}
                        id={c.id}
                        image={c.image}
                        name={c.name}
                        birthday={c.birthday}
                        gender={c.gender}
                        job={c.job}
                      />
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell colSpan="6" align="center">
                      {/* colSpan으로 6열 다 채우게 함 */}
                      <CircularProgress
                        className={classes.progress}
                        variant="indeterminate"
                        value={this.state.completed}
                      />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <CustomerAdd />
      </div>
    );
  }
}

export default withStyles(styles)(App);
