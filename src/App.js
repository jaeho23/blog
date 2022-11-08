import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

function Modal(props) {

  return (
    <>
    
      <div className='container'>
          <div>
            <p style={{fontSize:"20px", fontWeight:'bold'}}>{props.x}</p>
            <p>2월 17일 발행</p>
          </div>
          <button type='button' onClick={() => {
            var arr = props.modal;
            arr[props.index] = false;
            <>
            {props.modal[props.index] ? props.setModal(arr) : null}
            {console.log(arr)}</>
          }}>삭제</button>
      </div>
      <br />
    </>
  );
}

const Iter = (props) => {
  let arr = props.title;
  var k = "";
  var [modal, setModal] = useState([true, true, true]);
  return (
    <>
      {arr.map((x, index) => {
        return(
        <>
          {
          modal[index] 
          ? <Modal x={x} modal={modal} index={index} setModal={setModal}></Modal>
          : null
          }
        </>)}
        
      )}
      <div className='container'>
        <div className='box'>
          <button type='button' onClick={() => {
            props.changePost(["여자코트 추천", "마포 우동맛집", "자바스크립트독학"]);
          }}>제목 변경</button>
          <button type='button' onClick={() => {
            let x = [...props.title];
            x.sort();
            props.changePost(x);
          }}>가나다순 정렬</button>
        </div>
        <br />
      </div>
      <br />
      <div className='container'>
        <div className='box'>
          <input onChange = {(e) => {
            k = e.target.value;
          }}/>
          <button type='button' onClick={() => {
            arr.push(k);
            modal.push(true);
            props.changePost(arr);
            setModal(modal);
          }}>추가하기</button>
        </div>
      <br />
      </div>
    </>    
  )
}

function App() {

  let [title, changePost] = useState(["남자코트 추천", "강남 우동맛집", "파이썬독학"]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Navbar.Brand href="#home">ReactBlog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <div>
        <Iter title={title} changePost={changePost}></Iter>
      </div>
    </>
  );
}

export default App;