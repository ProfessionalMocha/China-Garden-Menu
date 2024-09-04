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
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const [selectedItems, sendItemSelection] = useState([]);
  let amountOfSelected = 0;

  function sendItemSelectionFuntionWrapper(item) {
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
      < PriceChecker items={selectedItems} USDollar = {USDollar} deleteItemFromSelected = {deleteItemFromSelected}/>
      <SectionCard title="Lunch Special" subtitle={lunchSubtitle} tempData={tempData.lunch} USDollar={USDollar} idTag="L" sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="House Special" options={["Served with White Rice or Pork or Chicken Fried Rice", "Served with Beef or Shrimp Friend Rice"]} tempData={tempData.House} USDollar={USDollar} idTag="H" sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Specialties" tempData={tempData.Specialities} USDollar={USDollar} idTag='A' Large={true} sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Combination Platters" subtitle="Served With Egg Roll and Pork Fried Rice" tempData={tempData.Combinations} USDollar={USDollar} idTag="C" sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Chef Suggestions" tempData={tempData.Suggestions} USDollar={USDollar} idTag="S" sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Appetizers" tempData={tempData.Appetizers} USDollar={USDollar} sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Soup" subtitle="With Fried Noodles" tempData={tempData.Soups} USDollar={USDollar} sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Fried Rice" tempData={tempData.Rice} USDollar={USDollar} sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Broccoli" subtitle={"With White Rice"} tempData={tempData.Broccoli} USDollar={USDollar} sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Chop Suey" subtitle={"With White Rice"} tempData={tempData.ChopSuey} USDollar={USDollar} sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Chow Mien" subtitle={"With Fried Noodles"} tempData={tempData.ChowMein} USDollar={USDollar} sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Lo Mien" subtitle={"Soft Noodles, Doesn't Come with Rice"} tempData={tempData.LoMien} USDollar={USDollar} sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Egg Foo Young" subtitle={"with White Rice"} tempData={tempData.EggFooYoung} USDollar={USDollar} sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Yat Gat Mein" tempData={tempData.YatGatMien} USDollar={USDollar} sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Chow Mai Fun" subtitle={"aka Angel Hair Noodles"} tempData={tempData.ChowMaiFun} USDollar={USDollar} sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Beef" tempData={tempData.Beef} USDollar={USDollar} sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Chicken" tempData={tempData.Chicken} USDollar={USDollar} sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Pork" tempData={tempData.Pork} USDollar={USDollar} sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Seafood" tempData={tempData.Seafood} USDollar={USDollar} sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
      <SectionCard title="Side Orders" tempData={tempData.SideOrders} USDollar={USDollar} sendItemSelectionFuntionWrapper={sendItemSelectionFuntionWrapper} />
    </>
  )
}

export default App