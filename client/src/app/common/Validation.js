const validate = (data, type) => {
  const errors = {};

  const {
    supervisor_id,
    email,
    password,
    confirmPassword,
    site_name,
    site_photo,
    address_line1,
    pincode,
    city,
    state,
    country,
    contry,
    longitude,
    latitude,
    supervisor_photo,
    firstname,
    lastname,
    supervisor_email,
    supervisor_password,
    phonenumber,
    phone_number,
    emergency_number,
    dateofbirth,
    landmark,
    joining_date,
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
    if (!site_name) {
      errors.site_name = "site_name is required";
    } else if (!/^[a-zA-Z\s]{2,30}$/.test(site_name)) {
      errors.site_name =
        "site_name must contain only letters and have 2 to 30 characters";
    } else if (!/[a-zA-Z]/.test(site_name)) {
      errors.site_name = "site_name must contain at least one letter";
    }

    if (!supervisor_id) {
      errors.supervisor_id = "supervisor_id is required";
    }

    if (!site_photo) {
      errors.site_photo = "site_photo is required";
    }
  } else if (type === "createSite1") {
    if (!address_line1) {
      errors.address_line1 = "Address is required";
    } else if (!/^[a-zA-Z0-9\s,-]{2,70}$/.test(address_line1)) {
      errors.address_line1 =
        "Address can only contain letters and numbers (2-70 characters)";
    }

    if (!pincode) {
      errors.pincode = "Pin Code is required";
    } else if (!/^\d{6}$/.test(pincode)) {
      errors.pincode = "Pin Code must be a 6-digit number";
    }

    if (!city) {
      errors.city = "City is required";
    } else if (!/^[a-zA-Z\s]{2,25}$/.test(city)) {
      errors.city =
        "City must contain only letters and be 2-25 characters long";
    }

    if (!state) {
      errors.state = "State is required";
    } else if (!/^[a-zA-Z\s]{2,15}$/.test(state)) {
      errors.state =
        "State must contain only letters and be 2-15 characters long";
    }

    if (!contry) {
      errors.contry = "Country is required";
    } else if (!/^[a-zA-Z\s]{2,20}$/.test(contry)) {
      errors.contry =
        "Country must contain only letters and be 2-20 characters long";
    }

    if (!longitude) {
      errors.longitude = "Longitude is required";
    } else if (isNaN(longitude) || longitude < -180 || longitude > 180) {
      errors.longitude =
        "Longitude must be a number between -180 and 180 degrees";
    }

    if (!latitude) {
      errors.latitude = "Latitude is required";
    } else if (isNaN(latitude) || latitude < -90 || latitude > 90) {
      errors.latitude = "Latitude must be a number between -90 and 90 degrees";
    }
  } else if (type === "createSupervisor") {
    //create Supervisor validation
    if (!supervisor_photo) {
      errors.supervisor_photo = "supervisor photo is required";
    }
    if (!firstname) {
      errors.firstname = "firstname is required";
    } else if (!/^[a-zA-Z\s]{2,50}$/.test(firstname)) {
      errors.firstname = "Invalid first name";
    }
    if (!lastname) {
      errors.lastname = "lastname is required";
    } else if (!/^[a-zA-Z\s]{2,50}$/.test(lastname)) {
      errors.lastname = "Invalid last name";
    }
    if (!supervisor_email) {
      errors.supervisor_email = "Email is required";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/i.test(supervisor_email)
    ) {
      errors.supervisor_email = "Invalid email address";
    }
    if (!supervisor_password) {
      errors.supervisor_password = "Password is required";
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
        supervisor_password
      )
    ) {
      errors.supervisor_password =
        "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, and 1 number";
    }
    if (!phone_number) {
      errors.phone_number = "phonenumber is required";
    } else if (!/^\d{10}$/.test(phone_number)) {
      errors.phone_number = "Invalid phonenumber";
    }
    if (!emergency_number) {
      errors.emergency_number = "Emergency number is required";
    } else if (!/^\d{10}$/.test(emergency_number)) {
      errors.emergency_number = "Emergency number must be 10 digits long";
    } else if (phonenumber === emergency_number) {
      errors.emergency_number =
        "Emergency number cannot be the same as phone number";
    }
  } else if (type === "createSupervisor1") {
    if (!dateofbirth) {
      errors.dateofbirth = "dateofbirth is required";
    }

    if (!address_line1) {
      errors.address_line1 = "Address is required";
    } else if (!/^[a-zA-Z0-9\s,-]{2,70}$/.test(address_line1)) {
      errors.address_line1 =
        "Address can only contain letters and numbers (2-70 characters)";
    }

    // if (!landmark) {
    //   errors.landmark = "landmark is required";
    // } else if (!/^[a-zA-Z\s]{2,40}$/.test(landmark)) {
    //   errors.landmark = "Invalid landmark";
    // }

    if (!pincode) {
      errors.pincode = "Pin Code is required";
    } else if (!/^\d{6}$/.test(pincode)) {
      errors.pincode = "Pin Code must be a 6-digit number";
    }

    if (!city) {
      errors.city = "City is required";
    } else if (!/^[a-zA-Z\s]{2,30}$/.test(city)) {
      errors.city =
        "City must contain only letters and be 2-25 characters long";
    }

    if (!state) {
      errors.state = "State is required";
    } else if (!/^[a-zA-Z\s]{2,15}$/.test(state)) {
      errors.state =
        "State must contain only letters and be 2-15 characters long";
    }

    if (!country) {
      errors.country = "Country is required";
    } else if (!/^[a-zA-Z\s]{2,20}$/.test(country)) {
      errors.country =
        "Country must contain only letters and be 2-20 characters long";
    }

    if (!joining_date) {
      errors.joining_date = "Joining date is required";
    }
  }
  return errors;
};

export default validate;
