import React from "react";
import { useState } from 'react';
import { Box, InputBase, Button, styled } from '@mui/material';
import { getWeather } from '../Services/api';


const Container = styled(Box)({
  background: '#445A6F',
  padding: 10
});

const Input = styled(InputBase)({
  color: '#FFF',
  marginRight: 22,
  fontSize: 18
});

const GetButton = styled(Button)({
  background: '#e67e22'
})

const Form = ({ setResult }) => {
  const [data, setData] = useState({ city: '', country: '' })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const getWeatherInfo = async () => {
    let response = await getWeather(data.city, data.country);
    setResult(response);
  }

  const Enter = async () => {
    let response = await getWeather(data.city, data.country);
    setResult(response);
  }
  return (
    <Container>
      <Input
        placeholder="City"
        onChange={(e) => handleChange(e)}
        name="city"
      />
      <Input
        placeholder="Country"
        onChange={(e) => handleChange(e)}
        name="country"
      />
      <GetButton
        variant="contained"
        onClick={() => getWeatherInfo()}
      >Get Weather</GetButton>

      <button className='button' onClick={() => Enter()}></button>

    </Container>
  )
}

export default Form;
