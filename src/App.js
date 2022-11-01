import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

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

      <div className='container'>
        <p style={{fontSize:"20px", fontWeight:'bold'}}>{title[0]}</p>
        <p>2월 17일 발행</p>
      </div>
      <br />
      <div className='container'>
        <p style={{fontSize:"20px", fontWeight:'bold'}}>{title[1]}</p>
        <p>2월 17일 발행</p>
      </div>
      <br />
      <div className='container'>
        <p style={{fontSize:"20px", fontWeight:'bold'}}>{title[2]}</p>
        <p>2월 17일 발행</p>
      </div>
      <br />
      <div className='container'>
        <div className='box'>
          <button type='button' onClick={() => {
            changePost(["여자코트 추천", "마포 우동맛집", "자바스크립트독학"]);
          }}>제목 변경</button>
          <button type='button' onClick={() => {
            let x = [...title];
            x.sort();
            changePost(x);
          }}>가나다순 정렬</button>
        </div>
      </div>
    </>
  );
}

export default App;