import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Badge, Box, ThemeProvider, Tooltip, createTheme } from "@mui/material";
import dayjs from "dayjs";
import {
  selectSupervisorAttendance,
  selectSupervisorAttendanceStatus,
} from "../../features/supervisorSlice";

import AttendanceLoder from "../Loder/AttendanceLoder";
import ShowAttendanceDetails from "./ShowAttendanceDetails";
import EditAttendanceModel from "./EditAttendanceModel";

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
  const [openEditAttendanceModel, setOpenEditAttendanceModel] = useState(false);
  const [EditAttendanceDate, setEditAttendanceDate] = useState(false);
  const [highlightedDays, setHighlitedDays] = useState([]);
  const today = dayjs();

  console.log("openEditAttendanceModel ", openEditAttendanceModel);

  const handleEdit = (e) => {
    console.log(e);

    setOpenEditAttendanceModel(true);
    setEditAttendanceDate(e);
  };

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
                  value={
                    openEditAttendanceModel
                      ? dayjs(EditAttendanceDate, "YYYY-MM-DD").isValid()
                        ? EditAttendanceDate
                        : today
                      : today
                  }
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
                    handleEdit(e);
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
                    "& .MuiPickersLayout-actionBar": {
                      display: "none",
                    },
                  }}
                />
              </>
            )}
          </LocalizationProvider>
        </ThemeProvider>
      </Box>

      <EditAttendanceModel
        openEditAttendanceModel={openEditAttendanceModel}
        setOpenEditAttendanceModel={setOpenEditAttendanceModel}
        EditAttendanceDate={EditAttendanceDate}
      />
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
        <Badge
          key={day.toString()}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          overlap="circular"
          badgeContent={isSelected ? badgeContent : null}
        >
          <PickersDay
            {...other}
            outsideCurrentMonth={outsideCurrentMonth}
            day={day}
          />
        </Badge>
      </Tooltip>
    </>
  );
};
