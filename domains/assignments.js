module.exports = (client) => ({

    async getAssignments() {
        return client.request("mod_assign_get_assignments");
    },

    async getSubmissionStatus(assignid) {
        return client.request(
            "mod_assign_get_submission_status",
            { assignid }
        );
    }

});