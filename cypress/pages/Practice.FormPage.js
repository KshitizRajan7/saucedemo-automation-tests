import 'cypress-file-upload';
const page = {
  firstName: '#firstName',
  lastName: '#lastName',
  email: '#userEmail',
  genderMale: 'label[for="gender-radio-1"]',
  gender: '#gender-radio-1',
  phone: '#userNumber',
  dob: '#dateOfBirthInput',
  subjects: '#subjectsInput',
  hobbiesSports: 'label[for="hobbies-checkbox-1"]',
  picture: '#uploadPicture',
  address: '#currentAddress',
  state: '#state',
  city: '#city',
  dropdownOption: 'div[id^="react-select"][id*="-option-"]',
  submit: '#submit'
};

export default page;
