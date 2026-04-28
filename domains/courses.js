module.exports = (client) => ({

    async getContents(courseid) {
        return client.request(
            "core_course_get_contents",
            { courseid }
        );
    }

});