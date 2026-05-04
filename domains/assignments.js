module.exports = (client) => ({

    async getAssignments() {
    const data = await client.request("mod_assign_get_assignments");
    assignments = data.courses.flatMap(course =>
        (course.assignments || []).map(assign => ({
            course: course.fullname,
            courseId: course.id,
            assignmentId: assign.id, // Added assignment ID
            assignmentName: assign.name,
            dueDate: assign.duedate
                ? new Date(assign.duedate * 1000)
                : "No due date",
            openDate: assign.allowsubmissionsfromdate
                ? new Date(assign.allowsubmissionsfromdate * 1000)
                : "No open date",
            closeDate: assign.cutoffdate // Corrected from 'No due date' to 'No close date'
                ? new Date(assign.cutoffdate * 1000)
                : "No close date",
            intro: assign.intro
                ? assign.intro.replace(/<\/?[^>]+(>|$)/g, "").trim()
                : "No description",
            submissions: {
                disabled: assign.nosubmissions === 1, // Indicates if submissions are disabled for this assignment
                enabled: assign.submissionsenabled === 1, // Indicates if submissions are generally enabled for this assignment
            },
                maxGrade: assign.gradingsummary?.maxgrade || null, // Maximum grade for the assignment
            }))
        );
    return assignments;
    },

    async getSubmissionStatus(assignid) {
        return client.request(
            "mod_assign_get_submission_status",
            { assignid }
        );
    }

});