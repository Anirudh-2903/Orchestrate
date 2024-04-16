"use server"

import { CreateEventParams } from "@/types";
import { handleError } from "../utils";
import { connectDB } from "../database";
import User from "../database/models/user.model";
import Event from "../database/models/event.model";
import Category from "../database/models/category.model";
import { model } from "mongoose";

const populateEvent = async (query: any) => {
    return query.populate({path: 'organizer',model: User,select: '_id firstName lastName'})
                .populate({path: 'category', model: Category,select: '_id name'});
};

export const createEvent = async ({event,userId,path}: CreateEventParams) => {
    try {
        await connectDB();
        const organizer = await User.findById(userId);
        if (!organizer) {
            throw new Error("Organizer not found");
        }
        const newEvent = await Event.create({...event, organizer: userId,category: event.categoryId });
        return JSON.parse(JSON.stringify(newEvent));
    } catch (error) {
        handleError(error);
    }
};

export const getEventById = async (eventId: string) => {
    try {
        await connectDB();
        const event = await populateEvent(Event.findById(eventId));
        if (!event) {
            throw new Error("Event not found");
        }
        return JSON.parse(JSON.stringify(event));
    } catch (error) {
        handleError(error);
    }
};