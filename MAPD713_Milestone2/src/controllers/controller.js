import mongoose from 'mongoose'
import { PatientSchema } from '../models/model'

const Patient = mongoose.model('Patient', PatientSchema)

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