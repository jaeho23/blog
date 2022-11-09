import './App.css';
import { useRecoilState } from "recoil";
import { blogRecoilState } from './recoil/blogState.js';

function MyApp() {
  const [blogState, setBlogState] = useRecoilState(blogRecoilState);

    return (
        console.log(blogState)
    );
}


function App() {
  const [blogState, setBlogState] = useRecoilState(blogRecoilState);
  var k = ""

  return (<>

      <MyApp />
      <input onChange = {(e) => {
        k = e.target.value;
      }}></input>
      <button type='button' onClick={() => {
        let str = [...blogState.title];
        str.push(k);
        setBlogState({title:str, modal:blogState.modal});    
      }}>추가하기</button>
    </>
  );
}

export default App;