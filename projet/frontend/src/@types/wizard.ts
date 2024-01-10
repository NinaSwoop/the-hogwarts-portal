import { Room } from "./room";
import { Subject } from "./subject";

export type Wizard = {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    birthdate: string;
    image: string;
    created_at: string;
    updated_at: string;
}

export type StaffMember = {
    wizard: Wizard;
    room: Room;
    subject: Subject;
}