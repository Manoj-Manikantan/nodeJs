import mongoose from 'mongoose'
import { PatientSchema, SignUpSchema, PatientRecordSchema } from '../models/model'

const Patient = mongoose.model('Patient', PatientSchema)
const SignUp = mongoose.model('SignUp', SignUpSchema)
const PatientRecord = mongoose.model('PatientRecord', PatientRecordSchema)

/* Add a new patient */
export const addNewPatient = (req, res) => {
    let newPatient = new Patient(req.body)
    newPatient.save((err, patient) => {
        console.log(`Request from: ${req.originalUrl} || Request type: ${req.method}`)
        if (err) {
            res.send(err)
        }
        res.json({ statusCode: 200, patient })
    })
}

/* Get list of all patients */
export const getAllPatients = (req, res) => {
    Patient.find({}, (err, patient) => {
        console.log(`Request from: ${req.originalUrl} || Request type: ${req.method}`)
        if (err) {
            res.send(err)
        }
        res.json({ statusCode: 200, patient })
    })
}

/* Get a patient's information */
export const getPatientById = (req, res) => {
    Patient.findById(req.body.patientId, (err, patient) => {
        console.log(`Request from: ${req.originalUrl} || Request type: ${req.method}`)
        if (err) {
            res.send(err)
        }
        res.json({ statusCode: 200, patient })
    })
}

/* SignUp a doctor
Checks if email already exists, if not signup doctor */
export const signUp = (req, res) => {
    let newDoctor = new SignUp(req.body)
    var findDoctorByDetail = SignUp.find({ email: newDoctor.email });

    findDoctorByDetail.then(function (doctors) {
        console.log(`Request doctors.length: ${doctors.length}`)
        if (doctors.length == 0) {
            newDoctor.save((err, doctor) => {
                console.log(`Request from: ${req.originalUrl} || Request type: ${req.method}`)
                if (err) {
                    res.send(err)
                }
                res.json({ statusCode: 200, doctor })
            })
        } else {
            res.json({ statusCode: 201, error: "Email already in use" })
        }
    })
}

/* Login doctor
Two checks 1. Username and password matches 2. Username exist or not */
export const login = (req, res) => {
    var findDoctorByDetail = SignUp.find({ userName: req.body.userName });
    findDoctorByDetail.then(function (doctors) {
        console.log(`Request doctors.length: ${doctors.length}`)
        if (doctors.length == 1) {
            let doctor = doctors[0]
            if (doctor.password == req.body.password) {
                res.json({ statusCode: 200, doctor })
            } else {
                res.json({ statusCode: 201, rror: "Invalid credentials" })
            }
        } else {
            res.json({ statusCode: 202, error: "Username does not exist, Please signUp" })
        }
    })
}

/* Add a patient record */
export const addPatientRecord = (req, res) => {
    let newPatientRecord = new PatientRecord(req.body)
    newPatientRecord.save((err, record) => {
        console.log(`Request from: ${req.originalUrl} || Request type: ${req.method}`)
        if (err) {
            res.send(err)
        }
        res.json({ statusCode: 200, record })
    })
}

/* Get list of patients record  */
export const getPatientRecords = (req, res) => {
    PatientRecord.find({}, (err, record) => {
        console.log(`Request from: ${req.originalUrl} || Request type: ${req.method}`)
        if (err) {
            res.send(err)
        }
        res.json({ statusCode: 200, record })
    })
}