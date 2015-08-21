(function (env) {
    "use strict";
    env.ddg_spice_open_nic = function(api_result){

        if (!api_result) {
            return Spice.failed('open_nic');
        }

        Spice.add({
            id: "open_nic",
            name: "OpenNIC DNS",
            data: {
                list: api_result
            },
            meta: {
                sourceName: "OpenNIC",
                sourceUrl: 'https://www.opennicproject.org'
            },
            templates: {
                group: 'list',
                options: {
                    list_content: Spice.open_nic.content,
                    moreAt: true
                }
            }
        });
    };
}(this));
