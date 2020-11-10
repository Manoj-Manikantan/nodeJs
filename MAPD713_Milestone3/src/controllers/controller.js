import mongoose from 'mongoose'
import { PatientSchema, SignUpSchema } from '../models/model'

const Patient = mongoose.model('Patient', PatientSchema)
const SignUp = mongoose.model('SignUp', SignUpSchema)

export const addNewPatient = (req, res) => {
    let newPatient = new Patient(req.body)
    newPatient.save((err, patient) => {
        console.log(`Request from: ${req.originalUrl} || Request type: ${req.method}`)
        if (err) {
            res.send(err)
        }
        res.json(patient)
    })
}

export const getAllPatients = (req, res) => {
    Patient.find({}, (err, patient) => {
        console.log(`Request from: ${req.originalUrl} || Request type: ${req.method}`)
        if (err) {
            res.send(err)
        }
        res.json(patient)
    })
}

export const getPatientById = (req, res) => {
    Patient.findById(req.body.patientId, (err, patient) => {
        console.log(`Request from: ${req.originalUrl} || Request type: ${req.method}`)
        if (err) {
            res.send(err)
        }
        res.json(patient)
    })
}

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

