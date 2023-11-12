import React, {useState} from 'react'

function DropDown() {


  const [option, setOption] = useState();


    const handleSubmit = (e) => {
        
        e.preventDefault();
    
        fetch("http://localhost:7000/data-dropdown",{
            method:"POST",
            crossDomain:true,
            headers:{
              'Content-Type':'application/json',
              Accept:'application/json',
              'Access-Control-Allow-Origin':'*'
            },
            body:JSON.stringify({
              option,
            
            }),

          }).then((res)=>res.json())
          .then((data)=>{
            console.log(data);
          });
    
        }
        
  return (
    <div>
      <form>
      <select onChange={(e) => setOption(e.target.value) }>
                  
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
  
          </select>
  
          <select onChange={(e) => setOption(e.target.value) }>
                    
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
  
          </select>
  
  
  
          <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
       

        </div>
  );
}

export default DropDown