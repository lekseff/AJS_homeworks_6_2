// const validateNumber = (tel) => {
//   const prefix = '+7'
//   let number = tel.match(/[+\d]/g);
//   if (!tel.startsWith('+')) {
//     number[0] = prefix;
//   }
//   return number.join('')
// }

const validateNumber = (tel) => {
  const number = tel.replace(/^8/, '+7');
  return number.match(/[+\d]/g).join('');
};

export default validateNumber;
