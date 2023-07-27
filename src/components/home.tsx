import * as React from 'react';
import {  getData } from '@/apis';
import Header from './header';
import Sidebar from './sidebar';
export interface IHomeProps {
}

const Home = (props: IHomeProps) => {
    // getData('/recommend-comics')
  return (
    <>
    
      <Header/>
     
      <Sidebar/>
   
    </>
  );
}

export default Home