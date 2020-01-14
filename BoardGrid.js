import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Board } from "./Board";

export class BoardGrid extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.resetGame = React.createRef();
    this.state = {
      xIsNext: true
    };
  }
  handleReset() {
    this.resetGame.current.reset();
  }
  handler() {
    this.setState({
      xIsNext: !this.state.xIsNext
    });
  }
  render() {
    const status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    const gridStyles = StyleSheet.create({
      flex: {
        display: "flex"
        // flexDirection: "row"
      },
      boards: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
      },
      status: {
        marginBottom: 10
      }
    });
    return (
      <View style={gridStyles.flex}>
        <View className="status" style={gridStyles.status}>
          <Text>{status}</Text>
        </View>
        <View className="boards" style={gridStyles.boards}>
          <Board
            ref={this.resetGame}
            id={"board-1"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
          <Board
            ref={this.resetGame}
            id={"board-2"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
          <Board
            ref={this.resetGame}
            id={"board-3"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
        </View>
        <View className="boards" style={gridStyles.boards}>
          <Board
            ref={this.resetGame}
            id={"board-4"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
          <Board
            ref={this.resetGame}
            id={"board-5"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
          <Board
            ref={this.resetGame}
            id={"board-6"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
        </View>
        <View className="boards" style={gridStyles.boards}>
          <Board
            ref={this.resetGame}
            id={"board-7"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
          <Board
            ref={this.resetGame}
            id={"board-8"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
          <Board
            ref={this.resetGame}
            id={"board-9"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
        </View>
        <Button onClick={this.handleReset} title="Reset Game" />
      </View>
    );
  }
}
// send to Game (index.js)
