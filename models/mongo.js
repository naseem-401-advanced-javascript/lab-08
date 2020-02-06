/* eslint-disable new-cap */
/* eslint-disable indent */
/* eslint-disable strict */
'use strict';

// we put here the 4 main CRUD oprations
/** Class representing a generic mongo model. */

class Model {
    constructor(schema) {
        this.schema = schema;
    }
    jsonSchema() {
        console.log(typeof this.schema.jsonSchema);
        return typeof this.schema.jsonSchema === 'function' ? this.schema.jsonSchema() : {};
    }
    get(_id) {
        let queryObject = _id ? { _id } : {};
        return this.schema.find(queryObject);// monogoos metheod return promis find ()
    }
    create(record) {
        console.log('mongo.js',record);
        let newRecord = new this.schema(record);
        console.log('mogo.js///',newRecord);
        return newRecord.save();
    }
    update(_id, record) {
        return this.schema.findByIdAndUpdate(_id, record, { new: true });
    }
    delete(_id) {
        return this.schema.findByIdAndDelete(_id);
    }
}

module.exports = Model;
