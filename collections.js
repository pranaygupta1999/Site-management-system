db.projects.remove({});
db.activities.remove({});
db.users.remove({});
db.users.insertMany([
    {
        "_id": ObjectId("5ee8670e80a8b76200fd67d1"),
        "name": "Pranay",
        "email": "pranaygupta1999@gmail.com",
        "role": "master-admin",
        "password": "masteradmin",
        "dateCreated": new Date()
    },
    {
        "role": "guest",
        "name": "Pranay Test",
        "email": "pranay@edunomics.in",
        "password": "$2b$10$24ClcSV4a1YFJ9jKktMZpeuTpGOWRSemSroo3DKtKHuk8xMKQjRTi",
        "dateCreated": new Date()
    }
]);

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
db.expenses.remove({});
db.expenses.insertMany([
    {
        type: "Food",
        detail: "Lunch with the client",
        amount: 500,
        status: "due",
        project: db.projects.findOne({ name: "Gupta towers" }, { _id: 1 })._id,
        image: "cash",
        date: new Date("2019-05-06"),
        dateCreated: new Date()
    },
    {
        type: "Order",
        detail: "Ordering Iron ores",
        amount: 5000,
        status: "paid",
        project: db.projects.findOne({ name: "Gupta towers" }, { _id: 1 })._id,
        image: "cash",
        date: new Date("2018-03-06"),
        dateCreated: new Date()
    },
    {
        type: "Order",
        detail: "Ordering 2 trucks",
        amount: 2500000,
        status: "due",
        project: db.projects.findOne({ name: "Gupta towers" }, { _id: 1 })._id,
        image: "check",
        date: new Date("2016-03-20"),
        dateCreated: new Date()
    },
    {
        type: "Order",
        detail: "Ordering 2 van",
        amount: 2000000,
        status: "paid",
        project: db.projects.findOne({ name: "Pratik Consultancy" }, { _id: 1 })._id,
        image: "check",
        date: new Date("2019-02-25"),
        dateCreated: new Date()
    },
    {
        type: "Repair",
        detail: "Repairing building structure",
        amount: 50000,
        status: "paid",
        project: db.projects.findOne({ name: "Pratik Consultancy" }, { _id: 1 })._id,
        image: "neft",
        date: new Date("2020-02-02"),
        dateCreated: new Date()
    },
    {
        type: "Order",
        detail: "Order weight cables",
        amount: 25000,
        status: "paid",
        project: db.projects.findOne({ name: "Pratik Consultancy" }, { _id: 1 })._id,
        image: "cash",
        date: new Date("2019-12-06"),
        dateCreated: new Date()
    },
    {
        type: "Repair",
        detail: "Repairing Wall structure",
        amount: 20000,
        status: "paid",
        project: db.projects.findOne({ name: "Pranay mount" }, { _id: 1 })._id,
        image: "check",
        date: new Date("2019-06-30"),
        dateCreated: new Date()
    },
    {
        type: "Order",
        detail: "Order 2 ton cement",
        amount: 100000,
        status: "paid",
        project: db.projects.findOne({ name: "Pranay mount" }, { _id: 1 })._id,
        image: "neft",
        date: new Date(),
        dateCreated: new Date()
    }
]);