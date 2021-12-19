import React, { Component, useEffect, useState } from 'react';

  const getUserData = async () => {
let data=[]
        try {
          let response = await fetch('https://gorest.co.in/public-api/users');
          let json = await response.json();
          data.push(json.data);
          console.log(data)
        } catch (error) {
          console.error(error);
        }
        return data;
};
export default getUserData()

