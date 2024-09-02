import { DaysOpen } from "./App";

export const isOpen = (startTime, endTime) => {
    let currentInfo = getCurrentTimeHelper();
    let currentDay = new Date(currentInfo[0]).getDay();

    let tempTime = convertTimeHelper(currentInfo[1])
    return currentDay && convertTimeHelper(startTime) < tempTime && convertTimeHelper(endTime) > tempTime;
}

export const getNextDayOpen = (startTime) => {
    let currentInfo = getCurrentTimeHelper();
    let trackingDay = 0;
    let currentConvertedTime = convertTimeHelper(currentInfo[1]);
    if(currentConvertedTime < convertTimeHelper(startTime)){
        trackingDay = 1;
    }
    return DaysOpen[(new Date(currentInfo[0]).getDay() - trackingDay) % DaysOpen.length];
}

export const lunchSpecialAvailability = (startTime, endTime) =>{
    let currentInfo = getCurrentTimeHelper();

    let tempTime = convertTimeHelper(currentInfo[1])
    return convertTimeHelper(startTime) <= tempTime && convertTimeHelper(endTime) > tempTime;
}

const getCurrentTimeHelper = () => {
    let dateOptions = {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };

    return new Date().toLocaleTimeString('en-US', dateOptions).split(", ");
}

const convertTimeHelper = (timeInfo) => {
    let [time, interval] = timeInfo.split(" ");
    let [hour, minute] = time.split(":");
    let updatedHour = parseInt(hour);

    if (interval === "PM") {
        if (hour != 12) {
            updatedHour += 12;
        }
    }
    return parseInt(`${updatedHour}${minute}`);
}