import { toast } from 'react-toastify'
import type { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { usePatientStore } from "../store"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({patient} : PatientDetailsProps) {

   const deletePatient = usePatientStore((state) => state.deletePatient)
   const getPatientById = usePatientStore((state) => state.getPatientById)

   const handleClick = () => {
    deletePatient(patient.id)
    toast.error('Patient Removed')
   }
   


  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">

      <PatientDetailItem label="Name" data={patient.name} />
      <PatientDetailItem label="Owner" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Admition date" data={patient.date.toString()} />
      <PatientDetailItem label="symptoms" data={patient.symptoms} />

      <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
        <button 
        type="button"
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        onClick={() => getPatientById(patient.id)}
        >
        Edit Pet
        </button>

        <button 
        type="button"
        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        onClick={handleClick}
        >
        Delete Pet
        </button>
      </div>
     
    </div>
  )
}
