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
            due_at: "2025-03-06T23:59:59.000Z",
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
            due_at: "2025-03-08T23:59:59.000Z",
            points_possible: 25
        },
        {
            id: 207,
            name: "Graphs",
            due_at: "2025-03-09T23:59:59.000Z",
            points_possible: 75
        }

    ],


}

const learnerSubmissions = [
    {
        learner_id: 159, // The students ID
        assignment_id: 201, // The Assignment this submission is for
        submission: {
            submitted_at: "2025-03-06T19:45:59.000Z", // Submitted on time
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
            submitted_at: "2025-03-06T19:45:59.000Z",
            score: 90
        }
    },
    {
        learner_id: 145,
        assignment_id: 203,
        submission: {
            submitted_at: "2025-03-05T17:28:49.405Z", // Late submission
            score: 40
        }
    }
];

function doesItBelongToCourse() {
    try {
        if (assignmentGroup.course_id !== courseInfo.id) {

            throw new Error(`This assignment: ${assignmentGroup.course_id} isn't for this course!`) // 
        }

        return `${assignmentGroup.course_id} belongs to this course!`; // If there's no problem return true!
    }
    catch (error) {
        console.error(error.message);
        return false; // will throw false if there is an error

    }
}

console.log(doesItBelongToCourse())


function isAssignmentDue(submission, assignments) {
    try {

        let foundAssignment = null; // storing the assignment here if its found

        // Looping to see if the assignment exists so we can store it in the assignment variable
        for (let i = 0; i < assignments.length; i++) {
            if (assignments[i].id === submission.assignment_id) {
                foundAssignment = assignments[i]
                break; //once we find the assignment it stops the loop
            }
        }

        if (!foundAssignment) {
            throw new Error(`The assignment: ${submission.assignment_id} doesn't exist, Maybe the wrong class? 🤔`)
        }

        //conveeritng the due date and sub date to date objects
        const whenItsDue = new Date(foundAssignment.due_at)
        const submittedAt = new Date(submission.submission.submitted_at)
        // console.log(whenItsDue)
        // console.log(submittedAt)

        //Working on the logic to see if the assignment is late

        let lateWork = submittedAt > whenItsDue;

        return {
            assignment: foundAssignment,
            late: lateWork,
            whenSubmitted: submittedAt,
            dueAt: whenItsDue


        }

    }

    catch (error) {
        console.error(error.message)
        return false;
    }

}

function findingAssignment(submission, assignment) {

    try {
        let foundAssignment = null;
        for (let i = 0; i < assignment.length; i++) {
            if (assignment[i].id == submission.assignment_id) {
                foundAssignment = assignment[i];
                break; //once we find the assignment it stops the loop
            }
        }
        if (!foundAssignment) {
            throw new Error(`The assignment: ${submission.assignment_id} doesn't exist, Maybe the wrong class? 🤔`)
        }
        return foundAssignment;
    }
    catch (error) {
        console.error(error.message)
        return false;
    }


}
for (let i = 0; i < learnerSubmissions.length; i++) {
    console.log(findingAssignment(learnerSubmissions[i], assignmentGroup.assignments))

}
//checking if work is late by returning a true or false statement
function isWorkLate(submittedAt, dueAt) {
    return submittedAt > dueAt;
}

// looping through the array of objects to look at the submissions
for (let i = 0; i < learnerSubmissions.length; i++) {
    let submissions = learnerSubmissions[i]
    let assignments = findingAssignment(submissions, assignmentGroup.assignments)
    if (assignments) {
        console.log(` Is Student ${submissions.learner_id} late?:`, isWorkLate(new Date(submissions.submission.submitted_at), new Date(assignments.due_at)));
        //converting date strings to date objects to be able to compare them in the function
    }
}