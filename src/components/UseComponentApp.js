import React from 'react';
import Card from './components/Card';

function UseComponentApp() {
  return (
    <div className="py-4">
      <div className="container">
      <h4>Hello this my cats</h4>
      <hr />
      <div className="row">
        <div className="col-md-4">
          {/* pengunaan props tanpa object */}
          {/* <Card imgUrl="http://placekitten.com/g/300/200" title="the first my post" publisPost="Published 06 feb, 2020"  /> */}
          <Card content={{ 
            imgUrl : 'http://placekitten.com/g/300/200',
            title : 'the first my post',
            publisPost : 'Published 06 feb, 2020',
           }}/>
        </div>
        <div className="col-md-4">
          <Card content={{ 
              imgUrl : 'http://placekitten.com/300/200',
              title : 'the second my post',
              publisPost : 'Published 09 feb, 2020',
            }}/>
        </div>
        <div className="col-md-4">
          <Card content={{ 
              imgUrl : 'http://placekitten.com/g/300/200',
              title : 'the thred my post',
              publisPost : 'Published 11 feb, 2020',
            }}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UseComponentApp;