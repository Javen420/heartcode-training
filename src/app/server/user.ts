import {db} from "../../db";
import {users} from "../components/db/schema";
import { Name } from "drizzle-orm";

export async function insertOneUser(){
    await db.listenerCount(users).valueOf({Name})
}
