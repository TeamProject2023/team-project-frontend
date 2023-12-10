export interface IUpcomingAppointment {
  _id: string,
  patientRef: string,
  doctorRef: string,
  date: string,
  time: string,
  field: string,
  appointmentType: string,
  status: string,
}
