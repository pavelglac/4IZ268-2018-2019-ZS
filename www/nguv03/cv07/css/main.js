* {
    box-sizing: border-box;
}
body {
    font - family: Arial, sans - serif;
    margin: 0;
    padding: 0;
}
  .flexed - box: nth - child(1) { background - color: tomato; }
  .flexed - box: nth - child(2) { background - color: blue; }
  .flexed - box: nth - child(3) { background - color: red; }
  .flexed - box: nth - child(4) { background - color: brown; }
  .flexed - box: nth - child(5) { background - color: orange; }
  .flexed - box: nth - child(6) { background - color: green; }
  .flexed - box: nth - child(7) { background - color: cyan; }
  .flexed - box: nth - child(8) { background - color: aquamarine; }
  
  .container {
    display: flex;
    flex - direction: column;
    flex - wrap: wrap;
    width: 50 %;
}
  
  .flexed - box {
    font - size: 50px;
    width: 100 %;
    height: 100px;
    color: white;
    display: flex;
    justify - content: center;
    align - items: center;
    border: 2px solid pink;
}
  
  .ultimate - container {
    display: flex;
    width: 100 %;
}
  
  .page > * {
    height: 100px;
    border: 5px solid white;
    display: flex;
    justify-content: center;


}
header {
    background - color: aquamarine;
}
  .main - content {
    background - color: green;
    width: 60 %;
}
  .side - bar {
    background - color: pink;
    width: 40 %;
}
  .twin {
    background - color: orange;
    width: 50 %;
    border: 5px solid white;
}
footer {
    background - color: darkblue;
    color: white;
}
  
  .row - 1, .row - 2 {
    display: flex;
    max - width: 320px;
    margin: 0 auto;
}
  .row - 1 > div, .row - 2 > div {
    display: flex;
    justify - content: center;
    align - items: center;
}
