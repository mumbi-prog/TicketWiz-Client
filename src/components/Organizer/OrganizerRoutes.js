import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateEvent from './organizer/CreateEvent';
import TicketSales from './organizer/TicketSales';
import OrganizerProfile from './organizer/OrganizerProfile'


const OrganizerRoutes = () => {
    return (
        <Switch>
            <Route path="/organizer/create-event" component={CreateEvent} />
            <Route path="/organizer/ticket-sales" component={TicketSales} />
            <Route path="/organizer/profile" component={OrganizerProfile} />
        </Switch>
    );
};

export default OrganizerRoutes;