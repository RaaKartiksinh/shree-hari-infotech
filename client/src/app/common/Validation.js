const validate = (data, type) => {
  const errors = {};

  const {
    email,
    password,
    confirmPassword,
    sitename,
    siteid,
    sitephoto,
    houseno,
    apartmentname,
    addressline1,
    pincode,
    city,
    state,
    country,
    longitude,
    latitude,
    supervisorphoto,
    firstname,
    lastname,
    supervisoremail,
    supervisorpassword,
    phonenumber,
    emergencynumber,
    employeeid,
    dateofbirth,
    addressline2,
    landmark,
    joiningdate,
  } = data;

  if (type === "register") {
    // Email validation
    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    // Password validation
    if (!password) {
      errors.password = "Password is required";
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password)
    ) {
      errors.password =
        "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, and 1 number";
    } else {
      // Confirm password validation
      if (!confirmPassword) {
        errors.confirmPassword = "Confirm password is required";
      } else if (confirmPassword !== password) {
        errors.confirmPassword = "Passwords do not match";
      }
    }
  } else if (type === "login") {
    // Email validation
    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    // Password validation
    if (!password) {
      errors.password = "Password is required";
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password)
    ) {
      errors.password =
        "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, and 1 number";
    }
  } else if (type === "forgotPassword") {
    // Email validation
    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
  } else if (type === "createSite") {
    // Create Site validation
    if (!sitename) {
      errors.sitename = "Sitename is required";
    } else if (sitename.length < 2 || sitename.length > 64) {
      errors.sitename =
        "Sitename must contain only letters and have 2 to 64 characters";
    }

    if (!siteid) {
      errors.siteid = "Siteid is required";
    } else if (!/^\d{4,10}$/.test(siteid)) {
      errors.siteid =
        "Siteid must contain only numbers and be between 4 and 10 characters long";
    }

    if (!sitephoto) {
      errors.sitephoto = "sitephoto is required";
    }
  } else if (type === "createSite1") {
    if (!addressline1) {
      errors.addressline1 = "addressline1 is required";
    }
    if (!pincode) {
      errors.pincode = "Pin code is required";
    } else if (!/^\d{6}$/.test(pincode)) {
      errors.pincode = "Pin code must be a 5-digit number";
    }

    if (!city) {
      errors.city = "city is required";
    }
    if (!state) {
      errors.state = "state is required";
    }
    if (!country) {
      errors.country = "country is required";
    }
    if (!longitude) {
      errors.longitude = "longitude is required";
    }
    if (!latitude) {
      errors.latitude = "latitude is required";
    }
  } else if (type === "createSupervisor") {
    //create Supervisor validation
    if (!supervisorphoto) {
      errors.supervisorphoto = "supervisorphoto is required";
    }
    if (!firstname) {
      errors.firstname = "firstname is required";
    }
    if (!lastname) {
      errors.lastname = "lastname is required";
    }
    // if (!supervisoremail) {
    //   errors.supervisoremail = "email is required";
    // }
    if (!supervisoremail) {
      errors.supervisoremail = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(supervisoremail)) {
      errors.supervisoremail = "Invalid email address";
    }
    // if (!supervisorpassword) {
    //   errors.supervisorpassword = "password is required";
    // }
    if (!supervisorpassword) {
      errors.supervisorpassword = "Password is required";
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(supervisorpassword)
    ) {
      errors.supervisorpassword =
        "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, and 1 number";
    }
    if (!phonenumber) {
      errors.phonenumber = "phonenumber is required";
    } else if (
      !/^\+?\d{1,3}?\s?\d{10}$/.test(phonenumber)
    )
    if (!emergencynumber) {
      errors.emergencynumber = "emergencynumber is required";
    }
  } else if (type === "createSupervisor1") {
    if (!employeeid) {
      errors.employeeid = "employeeid is required";
    }
    if (!dateofbirth) {
      errors.dateofbirth = "dateofbirth is required";
    }
    if (!addressline1) {
      errors.addressline1 = "addressline1 is required";
    }
    if (!addressline2) {
      errors.addressline2 = "addressline2 is required";
    }
    if (!landmark) {
      errors.landmark = "landmark is required";
    }
    // if (!pincode) {
    //   errors.pincode = "pincode is required";
    // }
    if (!pincode) {
      errors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(pincode)) {
      errors.pincode = "Pin code must be a 5-digit number";
    }
    if (!city) {
      errors.city = "city is required";
    }
    if (!state) {
      errors.state = "state is required";
    }
    if (!country) {
      errors.country = "country is required";
    }
    if (!joiningdate) {
      errors.joiningdate = "joiningdate is required";
    }
  }
  console.log(errors, "errors");
  return errors;
};

export default validate;
