const Wrapper = require("./wrapper");

const userDomain = require("./domains/user");
const assignmentDomain = require("./domains/assignments");
const courseDomain = require("./domains/courses");
const calendarDomain = require("./domains/calendar");


class MoodleJS extends Wrapper {
    constructor(baseURL, token) {
        super(baseURL, token);

        this.user = userDomain(this);
        this.assignments = assignmentDomain(this);
        this.courses = courseDomain(this);
        this.calendar = calendarDomain(this);
    }
}

module.exports = MoodleJS;