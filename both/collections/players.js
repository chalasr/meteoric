Schemas.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        optional: true
    },
    lastName: {
        type: String,
        optional: true
    },
    birthday: {
        type: Date,
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    },
    picture: {
        type: String,
        optional: true

    },
    photos: {
        type:[Object],
        optional:true,
        blackbox: false

    },
    "photos.$.image": {
        type: String
    },
    "photos.$.active": {
        type: Boolean
    },

    firstTour: {
        type:Number,
        optional:true
    },

    sports:{
        type:[Number],
        optional:true
    },

    rates: {
        type:[Object],
        optional:true

    },

    rateAverage: {
        type: Number,
        decimal:true,
        optional:true
    },

    "rates.$.created_at": {
        type: Date
    },

    "rates.$.rate": {
        type: Number
    },

    comments: {
        type:[Object],
        optional:true

    },

    "comments.$.created_at": {
        type: Date
    },

    "comments.$.user": {
        type: String
    },

    "comments.$.comment": {
        type: String
    },

    /*country: {
     type: Schema.UserCountry,
     optional: true
     }*/
});

var userSchemaObj = {
    _id: {
        type: String,
        optional: true
    },
    emails: {
        type: [Object],
        optional: true // TODO :need fix for facebook login

    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },

    "roles": {
        type: [String],
        optional: true
    },

    createdAt: {
        type: Date
    },
    profile: {
        type: Schemas.UserProfile,
        optional: true
    },

    services: {
        type: Object,
        optional: true,
        blackbox: true
    },

    teams: {
        type: [Object],
        minCount: 0,
        maxCount: 3,
        optional: true
    },

    friends:{
        type: [String],
        optional: true,
        blackbox: true

    },

    status: {
        type: Object,
        optional: true,
        blackbox: true
    }



};


Schemas.User = new SimpleSchema(userSchemaObj);

Meteor.users.attachSchema(Schemas.User);
