"use strict"
Object.defineProperty(exports, "__esModule", {value: true})
const mongoose_1 = require("mongoose")
const todoSchema = new mongoose_1.Schema({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String
  },
  status: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  }
}, {timestamps: true})
exports.default = mongoose_1.model('Todo', todoSchema)
