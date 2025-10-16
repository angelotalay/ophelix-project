import React from "react";

interface navMenuItem {
    title: string;
    href: string;
    icon?: React.ReactElement;
};

const navMenuItems: Array<navMenuItem> = [
    {
        "title": "The Hidden Truth",
        "href": "/"
    },
    {
        "title": "Why We Exist",
        "href": "/"
    },
    {
        "title": "Tested, Proven, Trusted",
        "href": "/"
    }
];

export default navMenuItems;