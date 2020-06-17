import React, {useState, useEffect} from 'react';
import nwStatTable from './nwStatTable'

function App() {
  const [nwStats, setNwStats] = useState([]);
  useEffect(() => {
    getNwStats();
  }, []);
  
//   function createMerchant() {
//     let name = prompt('Enter merchant name');
//     let email = prompt('Enter merchant email');
//     fetch('http://localhost:3001/merchants', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({name, email}),
//     })
//       .then(response => {
//         return response.text();
//       })
//       .then(data => {
//         alert(data);
//         getMerchant();
//       });
//   }
//   function deleteMerchant() {
//     let id = prompt('Enter merchant id');
//     fetch(`http://localhost:3001/merchants/${id}`, {
//       method: 'DELETE',
//     })
//       .then(response => {
//         return response.text();
//       })
//       .then(data => {
//         alert(data);
//         getMerchant();
//       });
//   }



  return (
    <div>
      
      <br />
      {/* <button onClick={createMerchant}>Add merchant</button> */}
      <br />
      {/* <button onClick={deleteMerchant}>Delete merchant</button> */}
    </div>
  );
}

export default App;