import React from 'react';
import './MoreInfo.css'
import { useEffect, useState } from 'react';

const MoreInfo = ( props, response ) => {

  // constructor(props){
  //   super(props)

  //   this.state = {repoName}
  // }

  

  const [readMe, setReadMe] = useState("");
  const [repo, setRepo] = useState([]);

  console.log(props.repoName)

  
  useEffect(() => {

      if (props.trigger == true){
        fetch(`https://raw.githubusercontent.com/jhughes135/${ props.repoName }/master/README.md`)
        .then(response => {

          return response.text();
        }).then(data => {
          console.log(data)
          setReadMe(data)

        });
          // .then(() => setRepo(props.repoName))
          // .then(() => setReadMe(response))
          // .then(console.log(readMe))
  //
      }

  });

  return (props.trigger) ? (
    
    <div className='popup'>
      
        <div className='popup-inner'>
          {readMe}
          <button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
        </div>
      </div>
         
  ) : "";

}


export default MoreInfo