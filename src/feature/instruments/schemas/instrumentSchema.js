import * as Yup from 'yup';
  
  
const InstrumentSchema = Yup.object({
  name: Yup.string().min(4,`The field Name is too short`).required(`The field Name can't be blank`),
  price: Yup.number().min(0,`The field Price needs to be postive`).required(`The field Name can't be blank`),
  description: Yup.string().min(9,`The field Name is too short`).required(`The field Name can't be blank`), 
  type: Yup.string().min(4,`The field Name is too short`).required(`The field Name can't be blank`), 
})

export {InstrumentSchema};