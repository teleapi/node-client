module.exports = {
    create: {
        code: 200,
        status: "success",
        data: {
            id: 42,
            did_id: 15,
            did_number: 5555555555,
            full_name: "Bob McFrob",
            address: "333 Some Street",
            city: "Englewood",
            state: "CO",
            zip: "80112",
            unit_type: "SUITE",
            unit_number: "16B",
            create_dt: "2016-02-05 12:22:06",
            modify_dt: "2016-02-05 12:22:06"
        }
    },
    info: {
        code: 200,
        status: "success",
        data: {
            id: 42,
            did_id: 15,
            did_number: 5555555555,
            full_name: "Bob McFrob",
            address: "333 Some Street",
            city: "Englewood",
            state: "CO",
            zip: "80112",
            unit_type: "SUITE",
            unit_number: "16B",
            create_dt: "2016-02-05 12:22:06",
            modify_dt: "2016-02-05 12:22:06"
        }
    },
    fetch_list: {
        code: 200,
        status: "success",
        data: [
            {
                id: 42,
                did_id: 15,
                did_number: 5555555555,
                full_name: "Bob McFrob",
                address: "333 Some Street",
                city: "Englewood",
                state: "CO",
                zip: "80112",
                unit_type: "SUITE",
                unit_number: "16B",
                create_dt: "2016-02-05 12:22:06",
                modify_dt: "2016-02-05 12:22:06"
            },
            {
                id: 42,
                did_id: 15,
                did_number: 5555555555,
                full_name: "Bob McFrob",
                address: "333 Some Street",
                city: "Englewood",
                state: "CO",
                zip: "80112",
                unit_type: "SUITE",
                unit_number: "16B",
                create_dt: "2016-02-05 12:22:06",
                modify_dt: "2016-02-05 12:22:06"
            }
        ]
    },
    update: {
        code: 200,
        status: "success",
        data: {
            id: 42,
            did_id: 15,
            did_number: 5555555555,
            full_name: "Bob McFrob",
            address: "333 Some Street",
            city: "Englewood",
            state: "CO",
            zip: "80112",
            unit_type: "SUITE",
            unit_number: "16B",
            create_dt: "2016-02-05 12:22:06",
            modify_dt: "2016-02-05 12:22:06"
        }
    },
    remove: {
        code: 200,
        status: "success",
        data: "Successfully removed 911 information"
    },
    validate: {
        code: 200,
        status: "success",
        data: "Address is validated"
    },
    validate_error: {
        code: 300,
        status: "suggest",
        data: {
            address: "123 Some Street",
            city: "Englewood",
            error: "newaddress",
            state: "CO",
            status: "invalid",
            zip: "80112"
        }
    },
    create_alert_group: {
        code: 200,
        status: "success",
        data: {
            id: "175",
            user_id: "01234",
            group_name: "Test 911 Group",
            enable_conference: "yes",
            create_dt: "2016-02-05 12:22:06",
            modify_dt: "2016-02-05 12:22:06"
        }
    },
    list_alert_groups: {
        code: 200,
        status: "success",
        data: [
            {
                id: "175",
                user_id: "01234",
                group_name: "Test 911 Group",
                enable_conference: "yes",
                create_dt: "2016-02-05 12:22:06",
                modify_dt: "2016-02-05 12:22:06",
                endpoints: []
            }
        ]
    },
    lookup_alert_group: {
        code: 200,
        status: "success",
        data: {
            id: "175",
            user_id: "01234",
            group_name: "Test 911 Group",
            enable_conference: "yes",
            create_dt: "2016-02-05 12:22:06",
            modify_dt: "2016-02-05 12:22:06",
            endpoints: []
        }
    },
    remove_alert_group: {
        code: 200,
        status: "success",
        data: "Successfully removed group from 911 service"
    },
    assign_number_to_group: {
        code: 200,
        status: "success",
        data: "Successfully associated 911 service with group"
    },
    assign_number_to_group_error: {
        code: 400,
        status: "error",
        data: "Must provide e911_id or did_id or did_number"
    },
    unassign_number_from_group: {
        code: 200,
        status: "success",
        data: "Successfully removed group from 911 service"
    },
	add_notification_to_group: {
        code: 200,
        status: "success",
        data: "Successfully added endpoint to group"
    },
	remove_notification_from_group: {
        code: 200,
        status: "success",
        data: "Successfully removed endpoint from group"
    },
	set_alert_group_conference_setting: {
        code: 200,
        status: "success",
        data: "Successfully set conferences for the group"
    }
};
