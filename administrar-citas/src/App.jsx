import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import PatientList from './components/PatientList';

function App() {

  const [pacientes, setPacientes] = useState([]);

  return (
    <div className='container mx-auto mt-20'>
      <Header 
        numeros={1}
      />
      <div className='mt-12 md:flex'>
        <Form />
        <PatientList />
      </div>
    </div>
  );
};

export default App;
