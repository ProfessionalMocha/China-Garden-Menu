import { useDebugValue, useState } from 'react'

//-------------------Components Imports---------------------------------//
import Navbar from './components/ChinaGardenNavBar'
import GeneralInformation from './components/GeneralInformation'
import PopularItems from './components/PopularItems'
import SectionCard from './components/SectionCard'
import PriceChecker from './components/PriceChecker'
//--------------------Utility Function Imports-------------------------//
import tempData from './tempData.json'
import { lunchSpecialAvailability, getNextDayOpen } from './Utility'

import React from 'react'

const startTime = "1:30 PM";
const endTime = "11:30 PM";
const lunchMenuEnd = "3:00 PM";

const sections = ["Lunch Special", "House Special", "Specialties", "Combination Platters", "Chief Suggestions", "Appetizers", "Soup", "Fried Rice", "Brocolli", "Chop Suey", "Chow Mien", "Lo Mien", "Egg Foo Young", "Yat Mai Fun", "Beef", "Chicken", "Pork", "Seafood", "Side Orders"]

export const DaysOpen = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', "Friday", 'Saturday'];

function App() {


  const [selectedItems, sendItemSelection] = useState([]);

  function sendSelectedItem(item) {
    sendItemSelection([...selectedItems, item])
  }

  function deleteItemFromSelected(index) {
    selectedItems.splice(index, 1)
    sendItemSelection([...selectedItems])
  }

  let available = lunchSpecialAvailability(startTime, lunchMenuEnd);
  let lunchSubtitle = `${available ? `Available until ${lunchMenuEnd}` : `Not Available until ${getNextDayOpen(startTime)} ${startTime}`}`

  return (
    <>
      <Navbar startTime={startTime} endTime={endTime} sections={sections} />
      <GeneralInformation startTime={startTime} endTime={endTime} />
      < PriceChecker items={selectedItems} deleteItemFromSelected={deleteItemFromSelected} />
      <SectionCard title="Lunch Special" subtitle={lunchSubtitle} tempData={tempData.lunch} idTag="L" sendSelectedItem={sendSelectedItem} />
      <SectionCard title="House Special" options={["Served with White Rice or Pork or Chicken Fried Rice", "Served with Beef or Shrimp Friend Rice"]} tempData={tempData.House} idTag="H" sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Specialties" tempData={tempData.Specialities} idTag='A' Large={true} sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Combination Platters" subtitle="Served With Egg Roll and Pork Fried Rice" tempData={tempData.Combinations} idTag="C" sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Chef Suggestions" tempData={tempData.Suggestions} idTag="S" sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Appetizers" tempData={tempData.Appetizers} sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Soup" subtitle="With Fried Noodles" tempData={tempData.Soups} sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Fried Rice" tempData={tempData.Rice} sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Broccoli" subtitle={"With White Rice"} tempData={tempData.Broccoli} sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Chop Suey" subtitle={"With White Rice"} tempData={tempData.ChopSuey} sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Chow Mien" subtitle={"With Fried Noodles"} tempData={tempData.ChowMein} sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Lo Mien" subtitle={"Soft Noodles, Doesn't Come with Rice"} tempData={tempData.LoMien} sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Egg Foo Young" subtitle={"with White Rice"} tempData={tempData.EggFooYoung} sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Yat Gat Mein" tempData={tempData.YatGatMien} sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Chow Mai Fun" subtitle={"aka Angel Hair Noodles"} tempData={tempData.ChowMaiFun} sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Beef" tempData={tempData.Beef} sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Chicken" tempData={tempData.Chicken} sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Pork" tempData={tempData.Pork} sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Seafood" tempData={tempData.Seafood} sendSelectedItem={sendSelectedItem} />
      <SectionCard title="Side Orders" tempData={tempData.SideOrders} sendSelectedItem={sendSelectedItem} />
    </>
  )
}

export default App