db.projects.remove({});
db.activities.remove({});
db.projects.insertMany([
    {
        name: "Gupta towers",
        address: "Champa",
        startDate: new Date(),
        completionDate: new Date(Date.now() + 85 * 24 * 60 * 60 * 1000),
        expectedCompletionDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
        dateCreated: new Date(Date.now())
    },
    {
        name: "Pratik Consultancy",
        address: "Raipur",
        startDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        completionDate: new Date(Date.now() + 115 * 24 * 60 * 60 * 1000),
        expectedCompletionDate: new Date(Date.now() + 110 * 24 * 60 * 60 * 1000),
        dateCreated: new Date(Date.now())
    },
    {
        name: "Pranay mount",
        address: "Nagpur",
        startDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        completionDate: new Date(Date.now() + 115 * 24 * 60 * 60 * 1000),
        expectedCompletionDate: new Date(Date.now() + 160 * 24 * 60 * 60 * 1000),
        dateCreated: new Date(Date.now())
    }
]);
db.activities.insertMany([
    {
        name: "Installing crane",
        type: "installation",
        timeFrom: new Date(),
        timeTo: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        detail: "Crane has to be installed on the top",
        project: db.projects.findOne({ name: "Gupta towers" }, { _id: 1 })._id,
        dateCreated: new Date(Date.now())
    },
    {
        name: "Installing pipes",
        type: "installation",
        timeFrom: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        timeTo: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        detail: "Cement pipe will be laid off",
        project: db.projects.findOne({ name: "Gupta towers" }, { _id: 1 })._id,
        dateCreated: new Date(Date.now())
    },
    {
        name: "Installing base",
        type: "installation",
        timeFrom: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        timeTo: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        detail: "Planning of base size and installation",
        project: db.projects.findOne({ name: "Gupta towers" }, { _id: 1 })._id,
        dateCreated: new Date(Date.now())
    },
    {
        name: "Meeting clients",
        type: "Meeting",
        timeFrom: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        timeTo: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        detail: "Meeting about the architecture",
        project: db.projects.findOne({ name: "Gupta towers" }, { _id: 1 })._id,
        dateCreated: new Date(Date.now())
    },

    {
        name: "Installing crane",
        type: "installation",
        timeFrom: new Date(),
        timeTo: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        detail: "Crane has to be installed on the top",
        project: db.projects.findOne({ name: "Pratik Consultancy" }, { _id: 1 })._id,
        dateCreated: new Date(Date.now())
    },
    {
        name: "Installing pipes",
        type: "installation",
        timeFrom: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        timeTo: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        detail: "Cement pipe will be laid off",
        project: db.projects.findOne({ name: "Pratik Consultancy" }, { _id: 1 })._id,
        dateCreated: new Date(Date.now())
    },
    {
        name: "Installing base",
        type: "installation",
        timeFrom: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        timeTo: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        detail: "Planning of base size and installation",
        project: db.projects.findOne({ name: "Pratik Consultancy" }, { _id: 1 })._id,
        dateCreated: new Date(Date.now())
    },
    {
        name: "Meeting clients",
        type: "Meeting",
        timeFrom: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        timeTo: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        detail: "Meeting about the architecture",
        project: db.projects.findOne({ name: "Pratik Consultancy" }, { _id: 1 })._id,
        dateCreated: new Date(Date.now())
    },
    {
        name: "Installing crane",
        type: "installation",
        timeFrom: new Date(),
        timeTo: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        detail: "Crane has to be installed on the top",
        project: db.projects.findOne({ name: "Pranay mount" }, { _id: 1 })._id,
        dateCreated: new Date(Date.now())
    },
    {
        name: "Installing pipes",
        type: "installation",
        timeFrom: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        timeTo: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        detail: "Cement pipe will be laid off",
        project: db.projects.findOne({ name: "Pranay mount" }, { _id: 1 })._id,
        dateCreated: new Date(Date.now())
    },
    {
        name: "Installing base",
        type: "installation",
        timeFrom: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        timeTo: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        detail: "Planning of base size and installation",
        project: db.projects.findOne({ name: "Pranay mount" }, { _id: 1 })._id,
        dateCreated: new Date(Date.now())
    },
    {
        name: "Meeting clients",
        type: "Meeting",
        timeFrom: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        timeTo: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        detail: "Meeting about the architecture",
        project: db.projects.findOne({ name: "Pranay mount" }, { _id: 1 })._id,
        dateCreated: new Date(Date.now())
    },
]);