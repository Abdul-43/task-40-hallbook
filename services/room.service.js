import { client } from '../index.js';

export async function addRoom(data) {
    return await client.db('b41wd2').collection('roomcreate').insertMany(data);
}
export async function getRoom() {
    return await client.db('b41wd2').collection('roomcreate').find().toArray();
}
