import type { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({patient} : PatientDetailsProps) {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">

      <PatientDetailItem label="Name" data={patient.name} />
      <PatientDetailItem label="Owner" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Admition date" data={patient.date.toString()} />
      <PatientDetailItem label="symptoms" data={patient.symptoms} />

      <div className="flex justify-between gap-2 mt-10">
        <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">
        Edit Pet
        </button>

        <button className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">
        Delete Pet
        </button>
      </div>
     
    </div>
  )
}
