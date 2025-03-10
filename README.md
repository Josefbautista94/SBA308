Function Breakdown

doesItBelongToCourse()

Ensures the assignments belong to the correct course by checking the course_id.

findingAssignment(submission, assignments)

Searches for a submitted assignment in the assignment list.

Skips assignments with points_possible === 0 and throws an error if the assignment doesn't exist.

isWorkLate(submittedAt, dueAt)

Compares the submission time with the due date to determine if an assignment was submitted late.

penalizedOrNot(score, isLate)

Applies a 10% deduction of the total possible points if the submission is late.

average(learner, assignments)

Calculates the weighted average score for a student based on their graded assignments.

getLearnerData(submissions, assignments)

Processes all student submissions, applies penalties, calculates scores, and aggregates data for final reporting.

