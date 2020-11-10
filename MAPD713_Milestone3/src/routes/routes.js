import {
    addNewPatient,
    getAllPatients,
    getPatientById, signUp, login, addPatientRecord, getPatientRecords
} from '../controllers/controller'

const routes = (app) => {
    app.route('/patients')
        .get(getAllPatients)
        .post(addNewPatient)

    app.route('/patients/detail')
        .post(getPatientById)

    app.route('/doctor/signup')
        .post(signUp)

    app.route('/doctor/login')
        .post(login)

    app.route('/patients/addRecord')
        .post(addPatientRecord)

    app.route('/patients/getRecords')
        .get(getPatientRecords)

}

export default routes;