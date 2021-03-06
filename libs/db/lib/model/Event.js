const mongoose = require("mongoose")
const shortid = require("./shortid")
const { DateTime } = require("luxon")

mongoose.set("useCreateIndex", true)

const schemaDefinition = {
  shortId: {
    type: String,
    unique: true,
    default: shortid.generate,
  },

  /* The events title */
  title: {
    type: String,
  },
  /* List of artists involved with the event */
  artists: {
    type: [String],
  },
  /* Where is it happening? */
  location: {
    type: String,
    required: true,
  },
  /* An optional description of the event */
  description: {
    type: String,
  },
  /* An optional url, used for tickets or approval */
  url: {
    type: String,
  },
  /* Has the event been approved by an admin? */
  approved: {
    type: Boolean,
    default: false,
  },
  /* Wether or not he event has been canceled */
  canceled: { type: Boolean, default: false },
  /* Wether or not he event has been postponed */
  postponed: { type: Boolean, default: false },
  /* When does the event start? */
  from: {
    type: Date,
    index: true,
    required: true,
  },
  /* When does the event end? Defaults to 2 hours after "from" */
  to: {
    type: Date,
    validate: {
      validator: function toValidator(to) {
        return DateTime.fromJSDate(to) > DateTime.fromJSDate(this.from)
      },
      message: "To date {VALUE} must be after from-date",
    },
    default: function setEventToDateDefault() {
      const from = DateTime.fromJSDate(this.from)

      return from.plus({ hours: 2 }).toJSDate()
    },
  },
  created: {
    type: Date,
    default: Date.now,
  },
  /* Who authored this? Can be null, due to possible anonymous submissions */
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  /* Who has the event in his list? */
  bookmarkedBy: { type: [mongoose.Schema.Types.ObjectId], ref: "User" },
}

exports.schemaDefinition = schemaDefinition

const Schema = new mongoose.Schema(schemaDefinition)

Schema.index({ title: "text" })

exports.Schema = Schema

exports.Model = mongoose.model("Event", Schema)
