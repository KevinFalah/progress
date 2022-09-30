import React from "react";
import {InputGroup, Form} from 'react-bootstrap'
import {BiSearchAlt} from 'react-icons/bi'
import Gallery from "../../Components/Gallery/Gallery";

function Home() {
  return (
    <>
    
    <div className="d-flex px-5 py-4 justify-content-between">
      <select
        className="text-dark px-2 rounded"
        style={{backgroundColor:"#E7E7E7",
                height:"40px",
                width:"120px",
                border:"none",
                  
    }}
        name="list"
        id="list"
      >
        <option selected>
          Today
        </option>
        <option>Following</option>
      </select>


    <InputGroup className="mb-3" style={{width:"15%"}}>
        <InputGroup.Text id="basic-addon1" style={{border:"none", backgroundColor:"#E7E7E7"}}><BiSearchAlt /></InputGroup.Text>
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
          style={{border:"none", backgroundColor:"#E7E7E7"}}
        />
      </InputGroup>


    </div>

    <h3 className="ps-5 fs-5">Today Post</h3>

    <Gallery />
    </>
  );
}

export default Home;
