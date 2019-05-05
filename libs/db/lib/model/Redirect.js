const mongoose = require("mongoose")

const schemaDefinition = {
  url: { type: String, required: true },
  to: { type: String, required: true },
}

exports.schemaDefinition = schemaDefinition

const Schema = new mongoose.Schema(schemaDefinition)

exports.Schema = Schema

exports.Model = mongoose.model("Redirect", Schema)
