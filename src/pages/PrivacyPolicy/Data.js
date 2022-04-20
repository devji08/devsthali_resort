import Room_1 from '../../images/Room_1.jpg';

export const BreadcrumbProps = {
    img: Room_1,
    alt: 'Image',
    title: 'Privacy Policy',
    path: [
        {
            name: 'Privacy Policy',
            url: '/privacy-policy'
        },
    ]
};

export const PolicyProp = {
    title: 'Privacy Policy',
    content: [
        {
            content: 'Devsthali Brar Resort makes a completely safe & secure method for you to protect your and your family’s private information while you are using our website.  Personal Identification Information, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context.'
        },
        {
            content: 'When you use or visit our website, we collect your personal information automatically, including the type of browser you use, access times, pages viewed, your IP address and the page you visited before navigating to our Site.'
        },
        {
            title: 'Device Information:',
            content: 'We may gather your information about the computer or mobile device you use to access our Site, including the hardware model, operating system and version, unique device identifiers (such as, IP address, IMEI number, the address of the device`s wireless network interface, or mobile phone number used by the device) and mobile network information'
        },
        {
            title: 'Location Information:',
            content: 'We may collect your information about the location/place of your device each time when you access or use one our website or otherwise consent to the collection of this information. You can turn off location services for a device at any time, but this may turn off some useful features'
        },
        {
            content: 'Where you give personal data of third parties (for example, names and contact details of your family members in connection with bookings or family memberships), you confirm that you have their consent to provide their personal data to us. We recommend you show them this Privacy Policy.'
        },
        {
            title: 'Information from other Sources:',
            content: 'We may also get your personal information from our hotels and from our third party service providers like, booking agents, travel agents and corporate accounts (such as information relating to the credit of guests) and we merge that with information we collect through our resorts/hotels and website where we believe that it is necessary to help manage our relationship with you.'
        }
    ],
    commingSoon: 'More Comming Soon...'
}