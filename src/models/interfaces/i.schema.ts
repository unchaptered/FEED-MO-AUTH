import { ObjectId } from 'mongoose';
import { TDocument } from '../types/t.document';

export interface IAccount extends TDocument {

    email: string;
    username: string;

}

export interface IFeedback extends TDocument {

    ownerId: ObjectId;

}