module.exports = (client) => ({

    // Get Moodle upcoming calendar view
    async getUpcoming() {
        return client.request(
            "core_calendar_get_calendar_upcoming_view"
        );
    },

    // Get action events sorted by time
    // timesortfrom = Unix timestamp (required)
    // timesortto = Unix timestamp (optional)
    // limitnum = number of events to return
    async getActionEvents(timesortfrom, timesortto = null, limitnum = 20) {
        const params = {
            timesortfrom,
            limitnum
        };

        if (timesortto) {
            params.timesortto = timesortto;
        }

        return client.request(
            "core_calendar_get_action_events_by_timesort",
            params
        );
    },

    // Get calendar events using Moodle filters
    // events example:
    // {
    //   "events[courseids][0]": 5
    // }
    async getCalendarEvents(events = {}, options = {}) {
        return client.request(
            "core_calendar_get_calendar_events",
            {
                ...events,
                ...options
            }
        );
    },

    // Get monthly calendar view
    async getMonthlyView(year, month) {
        return client.request(
            "core_calendar_get_calendar_monthly_view",
            {
                year,
                month
            }
        );
    },

    // Get daily calendar view
    async getDayView(year, month, day) {
        return client.request(
            "core_calendar_get_calendar_day_view",
            {
                year,
                month,
                day
            }
        );
    },

    // Get single event by ID
    async getEventById(eventid) {
        return client.request(
            "core_calendar_get_calendar_event_by_id",
            {
                eventid
            }
        );
    }

});