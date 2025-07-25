import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"

export default function PatientList() {

    const patients = usePatientStore((state) => state.patients)

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
        {patients.length ? (
            <>
                <h2 className="font-black text-3xl text-center">Patients List</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                Manage your {''}
                    <span className="text-indigo-600 font-bold">patients and appointments</span>
                </p>
                {patients.map( patient => (
                    <PatientDetails 
                        key={patient.id}
                        patient={patient}
                    />
                ))}
            </>
        ) : (

            <> 
                <h2 className="font-black text-3xl text-center">There are no patients yet.</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                Once you add patients, {''}
                    <span className="text-indigo-600 font-bold">they’ll show up here</span>
                </p>
            </>

        )}
      
    </div>
  )
}
