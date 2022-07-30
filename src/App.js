import React, { Component } from "react";
import Customer from "./components/Customer";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
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
};

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "이상희",
    birthday: "010816",
    gender: "여자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "홍길동",
    birthday: "040227",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "이순신",
    birthday: "990105",
    gender: "여자",
    job: "직장인",
  },
];

class App extends Component {
  render() {
    const { classes } = this.props; // 변수 만들어서 위에 정의한 styles가 적용될 수 있게
    return (
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
              {customers.map((c) => {
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
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
