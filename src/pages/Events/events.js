import React from 'react';

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import InfoSection from '../../components/InfoSection/InfoSection';
import { BreadcrumbProps, eventObj } from './Data';

const Events = () => {
    return (
        <>
            <Breadcrumb props={BreadcrumbProps}/>
            {
                eventObj.map((event) => {
                    return <InfoSection {...event} key = {event.headline}/>
                })
            }
        </>
        
    );
}

export default Events;