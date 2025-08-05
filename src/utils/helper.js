import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string()
    .required("Enter an name is necessary")
    .min(3, "The name must have at least 3 letters.")
    .max(10, "The name must have a maximum of 10 characters"),

  lastName: Yup.string()
    .required("Enter a lastName is necessary")
    .min(5, "The lastName must have at least 5 letters.")
    .max(15, "The lastName must have a maximum of 15 characters"),

  email: Yup.string()
    .email("Email in not valid")
    .required("Enter an email is necessary"),

  phone: Yup.string()
    .required("Phone number is necessary")
    .matches(/^09\d{9}$/, "The phone number is not valid"),
});

// const editValidateData = (data) => {
//   if (
//     !data.name ||
//     data.name.length > 8 ||
//     data.lastName.length > 12 ||
//     !data.lastName ||
//     data.phone.length !== 11 ||
//     !data.phone ||
//     !data.email ||
//     !data.email.includes("@")
//   ) {
//     alert("enter valid data");
//     return;
//   }
// };

// const addValidate = (contact) => {
//   if (!contact.name) return "Name is required!";
//   if (contact.name.length > 10) return "Name must be less than 10 characters!";
//   if (!contact.lastName) return "Last name is required!";
//   if (contact.lastName.length > 12)
//     return "Last name must be less than 12 characters!";
//   if (!contact.phone) return "Phone number is required!";
//   if (contact.phone.length !== 11) return "Phone number must be 11 digits!";
//   if (!contact.email) return "Email is required!";
//   if (!contact.email.includes("@")) return "Invalid email address!";

//   return "";
// };

// export {editValidateData};

export default schema
