import { useState } from 'react'

//-------------------Components Imports---------------------------------//
import Navbar from './components/ChinaGardenNavBar'
import GeneralInformation from './components/GeneralInformation'
import PopularItems from './components/PopularItems'
import LunchSpecial from './components/LunchSpecial'
import SectionCard from './components/SectionCard'
//--------------------Utility Function Imports-------------------------//
import tempData from './tempData.json'

import React from 'react'

const startTime = "1:30 PM";
const endTime = "11:30 PM";
const lunchMenuEnd = "3:00 PM";

export const DaysOpen = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', "Friday", 'Saturday'];

function App() {
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <>
      <Navbar startTime={startTime} endTime={endTime} />
      <GeneralInformation startTime={startTime} endTime={endTime} />
      <PopularItems />
      <LunchSpecial startTime={startTime} endTime={lunchMenuEnd} tempData={tempData.lunch} USDollar={USDollar} />
      <SectionCard title = "House Special" options={["Served with White Rice or Pork or Chicken Fried Rice","Served with Beef or Shrimp Friend Rice"]} tempData={tempData.House} USDollar={USDollar} idTag = "H"/>
      <SectionCard title = "Specialties" tempData={tempData.Specialities} USDollar = {USDollar} idTag='A' Large = {true}/>
      <SectionCard title = "Combination Platters" subtitle = "Served With Egg Roll and Pork Fried Rice" tempData={tempData.Combinations} USDollar={USDollar} idTag = "C"/>
      <SectionCard title = "Chef Suggestions" tempData={tempData.Suggestions} USDollar={USDollar} idTag = "S"/>
      <SectionCard title = "Appetizers" tempData={tempData.Appetizers} USDollar = {USDollar}/>
      <SectionCard title = "Soup" subtitle = "With Fried Noodles" tempData={tempData.Soups} USDollar = {USDollar}/>
      <SectionCard title = "Fried Rice" tempData={tempData.Rice} USDollar = {USDollar}/>
      <SectionCard title = "Broccoli" subtitle={"With White Rice"} tempData={tempData.Broccoli} USDollar = {USDollar}/>
      <SectionCard title = "Chop Suey" subtitle={"With White Rice"} tempData={tempData.ChopSuey} USDollar = {USDollar}/>
      <SectionCard title = "Chow Mien" subtitle={"With Fried Noodles"} tempData={tempData.ChowMein} USDollar = {USDollar}/>
      <SectionCard title = "Lo Mien" subtitle={"Soft Noodles, Doesn't Come with Rice"} tempData={tempData.LoMien} USDollar = {USDollar}/>
      <SectionCard title = "Egg Foo Young" subtitle={"with White Rice"} tempData={tempData.EggFooYoung} USDollar = {USDollar}/>
      <SectionCard title = "Yat Gat Mein" tempData={tempData.YatGatMien} USDollar = {USDollar}/>
      <SectionCard title = "Chow Mai Fun" subtitle={"aka Angel Hair Noodles"} tempData={tempData.ChowMaiFun} USDollar = {USDollar}/>
      <SectionCard title = "Beef" tempData={tempData.Beef} USDollar = {USDollar}/>
      <SectionCard title = "Chicken" tempData={tempData.Chicken} USDollar = {USDollar}/>
      <SectionCard title = "Pork" tempData={tempData.Pork} USDollar = {USDollar}/>
      <SectionCard title = "Seafood" tempData={tempData.Seafood} USDollar = {USDollar}/>
      <SectionCard title = "Side Orders" tempData={tempData.SideOrders} USDollar = {USDollar}/>
    </>
  )
}

export default App