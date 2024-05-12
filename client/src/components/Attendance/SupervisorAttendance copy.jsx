import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  Badge,
  Box,
  Skeleton,
  ThemeProvider,
  Tooltip,
  createTheme,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { useSelector } from "react-redux";
import {
  selectSupervisorAttendance,
  selectSupervisorAttendanceStatus,
} from "../../features/supervisorSlice";

import AttendanceLoder from "../Loder/AttendanceLoder";
import ShowAttendanceDetails from "./ShowAttendanceDetails";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
    },
  },
});

const SupervisorAttendance = () => {
  let getSupervisorAttendance = useSelector(selectSupervisorAttendance);
  const getSelectSupervisorAttendanceStatus = useSelector(
    selectSupervisorAttendanceStatus
  );

  const [highlightedDays, setHighlitedDays] = useState([]);
  const today = dayjs();

  useEffect(() => {
    setHighlitedDays(getSupervisorAttendance.superdate);
  }, [getSupervisorAttendance.superdate]);

  return (
    <>
      <Box>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {getSelectSupervisorAttendanceStatus === "loading" ? (
              <AttendanceLoder />
            ) : (
              <>
                <StaticDatePicker
                  // defaultValue={today}
                  defaultValue={dayjs("2024-05-17")}
                  // maxDate={today.add(1, "month")}
                  slots={{
                    day: (props) => (
                      <ServerDay {...props} highlightedDays={highlightedDays} />
                    ),
                  }}
                  slotProps={{
                    day: {
                      highlightedDays,
                    },
                  }}
                  onChange={(e) => {
                    console.log(e); // Log the event
                    // e.stopPropagation(); // Stop event propagation
                  }}
                  sx={{
                    border: "none",
                    "& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected": {
                      color: "black",
                      backgroundColor: "#bec7f9",
                    },
                    "& .css-1rtg91x-MuiDateCalendar-root": {
                      maxHeight: "300px",
                    },
                  }}
                />
              </>
            )}
          </LocalizationProvider>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default SupervisorAttendance;

const ServerDay = (props) => {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;
  const highlightedDates = highlightedDays.map((item) => item.sdate);
  const isSelected =
    !outsideCurrentMonth && highlightedDates.includes(day.format("YYYY-MM-DD"));

  // const isSunday = day.day() === 0;

  const setBadgeIndex = highlightedDays.findIndex(
    (item) => item.sdate === day.format("YYYY-MM-DD")
  );

  let badgeContent = null;
  let getCurrentDateDetails = highlightedDays[setBadgeIndex];

  if (setBadgeIndex !== -1) {
    switch (getCurrentDateDetails?.isPresent) {
      case "present":
        badgeContent = <div className="PresentBadge"></div>;
        break;

      case "absent":
        badgeContent = <div className="AbsentBadge"></div>;
        break;

      case "leave":
        badgeContent = <div className="PaidLiveContent"></div>;
        break;

      default:
        break;
    }
  }

  // New function
  const [openAttendanceEdit, setOpenAttendanceEdit] = React.useState(false);

  const handleTooltipClose = () => {
    setOpenAttendanceEdit(false);
  };

  const handleTooltipOpen = () => {
    setOpenAttendanceEdit(true);
  };
  return (
    <>
      <Tooltip
        title={
          getCurrentDateDetails && (
            <ShowAttendanceDetails
              getCurrentDateDetails={getCurrentDateDetails}
            />
          )
        }
      >
   
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={openAttendanceEdit}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title="Add"
        >
          <Badge
            key={day.toString()}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            overlap="circular"
            badgeContent={isSelected ? badgeContent : null}
            onClick={handleTooltipOpen}
          >
            <PickersDay
              {...other}
              outsideCurrentMonth={outsideCurrentMonth}
              day={day}
            />
          </Badge>
        </Tooltip>
      </Tooltip>
    </>
  );
};
