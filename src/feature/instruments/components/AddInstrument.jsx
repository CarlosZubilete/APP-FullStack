import { useEffect } from 'react';
import { useNavigate,Link , useParams} from 'react-router';
import { Formik, Form , Field , ErrorMessage} from 'formik';
import '../styles/AddInstrument.css'
import useNewInstrumet from '../hooks/useNewInstrument';


const ErrorBack = () => {
  return <h2 style={{fontSize:'1.2rem', color:'red'}}>BackEnd says: "Error Bad Request" </h2>;
}

const ErrorOne = ({children}) => {
  return <span style={{fontSize:'.6rem', color:'red' , fontWeight:'bold'}}> {children} </span>
}


function AddInstrument(){

  // const {id} = useParams();
  const params = useParams();
  
  const{handleSubmitForm,error,success,InstrumentSchema,instrument} = useNewInstrumet(params.id);
  

  const navigate = useNavigate();
  
  useEffect(()=>{
    if(success){
      navigate('/instrumentsPage')
    }
  },[success])

  if(params?.id && instrument == null) return <p>Cargando...</p>

  return(<>
    <span>{error && <ErrorBack/>}</span>
    <Formik 
        // initialValues={{name:'', price:'',description:'', type:''}}
        initialValues={{
          name: instrument?.name || '', 
          price: instrument?.price || '',
          description: instrument?.description || '',
          type: instrument?.type || '',
        }}
        onSubmit={handleSubmitForm} 
        // validate={validateFormik}
        validationSchema={InstrumentSchema}
        >
        {({isSubmitting}) =>
          <Form className='AddInstrument'>
            <div>
              <label htmlFor='name' className='AddInstrument__label'>Name: 
                <Field type='text' className='AddInstrument__input' id='name' name='name'/>
                <ErrorMessage name='name' component={ ErrorOne }/>
              </label>
              <label htmlFor='price' className='AddInstrument__label'>Price:
                <Field type='number' className='AddInstrument__input' id='price' name='price'/>
                <ErrorMessage name='price' component={ErrorOne}/>
              </label>
              <label htmlFor='description' className='AddInstrument__label'>Description:
                <Field type='text' className='AddInstrument__input' id='description' name='description'/>
                <ErrorMessage name='description' component={ErrorOne}/>
              </label>
              <label htmlFor='type' className='AddInstrument__label'>Type:
                <Field type='text' className='AddInstrument__input' id='type' name='type'/>
                <ErrorMessage name='type' component={ErrorOne}/>
              </label>
            </div>
            <button type='submit'  disabled={isSubmitting}
              className='AddInstrument__button'> {isSubmitting ? 'Enviando...' : 'Enviar'} 
            </button>
          </Form>
      }
    </Formik>
    <Link to='/instrumentsPage' className='AddInstrument__contenedor__button'>
      <button>Back</button>
    </Link>
  </>
  )
}

export default AddInstrument;
