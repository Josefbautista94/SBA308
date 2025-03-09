const courseInfo = { // hold course details such as id and name
    id: 338,
    name: "Data Structures and Algorithms"
}

const assignmentGroup = {
    id: 1,
    name: "Homework", // Name of assignment group
    course_id: 338, // Should match courseInfo.id 
    group_weight: 60, // Weight percentage
    assignments: [
        {
            id: 200,
            name: "Stacks",
            due_at: "2025-03-06T23:59:59.000Z",
            points_possible: 50
        },
        {
            id: 201,
            name: "Arrays",
            due_at: "2025-02-06T23:59:59.000Z",
            points_possible: 100
        },
        {
            id: 202,
            name: "Linked List",
            due_at: "2025-03-05T23:59:59.000Z",
            points_possible: 50
        },
        {
            id: 203,
            name: "Queues",
            due_at: "2025-03-06T23:59:59.000Z",
            points_possible: 50
        },
        {
            id: 204,
            name: "Binary Search Trees",
            due_at: "2025-03-06T23:59:59.000Z",
            points_possible: 25
        },
        {
            id: 205,
            name: "Heaps",
            due_at: "2025-03-06T23:59:59.000Z",
            points_possible: 25
        },
        {
            id: 206,
            name: "Hash Tables",
            due_at: "2025-03-06T23:59:59.000Z",
            points_possible: 25
        },
        {
            id: 207,
            name: "Graphs",
            due_at: "2025-03-06T23:59:59.000Z",
            points_possible: 75
        }

    ]
}

const learnerSubmissions = [
    {
        learner_id: 159, // The students ID
        assignment_id: 201, // The Assignment this submission is for
        submission: {
            submitted_at: "2025-02-06T19:45:59.000Z", // Submitted on time
            score: 90
        }
    },
    {
        learner_id: 160,
        assignment_id: 201,
        submission: {
            submitted_at: "2025-03-07T17:28:49.405Z", // Late submission
            score: 80
        }
    },
    {
        learner_id: 179,
        assignment_id: 201,
        submission: {
            submitted_at: "2025-03-02T17:28:49.405Z", // Late submission
            score: 100
        }
    },
    {
        learner_id: 161,
        assignment_id: 201,
        submission: {
            submitted_at: "2025-03-04T17:28:49.405Z", // Late submission
            score: 75
        }
    },
    {
        learner_id: 145,
        assignment_id: 201,
        submission: {
            submitted_at: "2025-03-05T17:28:49.405Z", // Late submission
            score: 40
        }
    },
    {
        learner_id: 181, 
        assignment_id: 720, // This ID does not exist, should throw an error
        submission: {
            submitted_at: "2025-02-06T19:45:59.000Z",
            score: 90
        }
    }
];

function doesItBelongToCourse() {
    try {
        if (assignmentGroup.course_id !== courseInfo.id) {

            throw new Error(`This assignment isn't for this course!`) // 
        }
        return true; // If there's no problem return true!
    }
    catch(error){
        console.error(error.message);
        return false; // will throw false if there is an error

    }
}

function isAssignmentDue(submission, assignment) {
    try {

        let assignment = null; // storing the assignment here if its found
        for (let i = 0; i < assignment.length; i++) {

        }

    }
    catch {

    }

}

console.log(isAssignmentDue(assignmentGroup))