import React from 'react';
import { useState } from 'react';
// perbedaan pengunaan function dengan mengunakan class
// dengan mengunakan function kita tidak perlu mengunakan method/function render, langsung saja mengunakan return 
function Hookstate() {
  // deklarasi hookstate
  const [fistname, setFistname] = useState();
  const [lastname, setLastname] = useState();
  const [fullname, setFullname] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    setFullname(`${fistname} ${lastname}`);
    setFistname('');
    setLastname('');
  }

  return (
    <div>
      <div className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Learn react function</div>
                <div className="card-body">
                  <form onSubmit={submitHandler}>
                    <div className="mb-5">
                      <label htmlFor="fistname">fistname</label>
                      <input type="text" value={fistname} onChange={(e) => {setFistname(e.target.value)}} name="fistname" className="form-control" />
                    </div>
                    <div className="mb-5">
                      <label htmlFor="lastname">lastname</label>
                      <input type="text" value={lastname} onChange={(e) => {setLastname(e.target.value)}} name="lastname" className="form-control" />
                    </div>
                    <div className="mb-5">
                      <button type="submit" className="btn btn-block btn-primary">show</button>
                    </div>
                  </form>
                </div>
                <div className="card-footer">
                  My name is {fullname ? fullname : '. . .'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hookstate;