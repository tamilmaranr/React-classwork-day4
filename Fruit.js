import { Button, FormControl, InputLabel,MenuItem,Select } from '@mui/material';
import React from 'react'
import { useState } from 'react';
function Fruit(){
  const [name,setName] = useState('');
  const [fruit,setFruit] = useState('');
  const [msg,setMsg] = useState('');


  const setSubmit = (event) => {
    event.preventDefault();

    setMsg(`Hello,${name}! Your favorite fruit is ${fruit}`);
    setName('');
    setFruit('');
  };
  return (
    
    <div style={{marginTop:"200px"}}>
      <h1> Enter your favorite food</h1>
      <form onSubmit={setSubmit}>
        <input
        type="text"
        name="name"
        style={{width:200}}
        value={name}
        placeholder="Name"
        onChange={(event) =>
          setName(event.target.value)
        }
        />
        <br/><br/>
        <FormControl style={{width:200}}>
        <InputLabel variant="standard"><center>Choose a fruit</center>
        </InputLabel>
        <Select 
        placeholder="choose a fruit"
        value={fruit}
        onChange=
        {(event) =>
          setFruit(event.target.value)
        }
        >
          <MenuItem value={"Apple"}>Apple</MenuItem>
          <MenuItem value={"Banana"}>Banana</MenuItem>
          <MenuItem value={"Cherry"}>Cherry</MenuItem>
          <MenuItem value={"Durian"}>Durian</MenuItem>
          <MenuItem value={"Elderberry"}>Elderberry</MenuItem>
        </Select>
        </FormControl>
        <br/><br/>
        <br/><br/>
        <Button variant="contained" type="submit">Submit</Button>
        <br/><br/>
        <h2>{msg}</h2>
      </form>
    </div>
  )
};

export default Fruit