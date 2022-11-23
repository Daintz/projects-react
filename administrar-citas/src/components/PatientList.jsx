import Patient from "./Patient";

function PatientList() {
    return (
      <div className="md:w-1/2 lg:w-3/5">
        <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
        <p className="text-xl mb-5 mt-10 text-center">
          Administra tus {''}
          <span className="text-red-600 font-bold">pacientes y citas</span>
        </p>
        <div className="md:h-screen md:overflow-y-scroll">
          <Patient />
          <Patient />
          <Patient />
        </div>
      </div>
    )
}

export default PatientList;    