import Realm from 'realm';
import { UserSchema } from './schemas';
const schemaVersion = 2

export const createUser = async (name,surname,picture,email,done) => {
    const realm = await Realm.open({
        schema: [UserSchema],
        schemaVersion
      });

    let task1;
    await realm.write(async () => {
        task1 = await realm.create("User", {
            id: new Date().getTime(),
            name: name,
            surname: surname,
            picture: picture,
            gmail: email
        });  
    });

    var userObj = await JSON.stringify(task1) // the later one when filtered is used on realmObject.

    await realm.close()

    await done(JSON.parse(userObj))
}


export const getUser = async (done) => {
    const realm = await Realm.open({
        schema: [UserSchema],
        schemaVersion
      });

    var user = await realm.objects("User");

    var userObj = await JSON.stringify(await user); // the later one when filtered is used on realmObject.

    await realm.close()

    await done(await JSON.parse(await userObj)[0])
}

export const deleteUser = async (done) => {
    const realm = await Realm.open({
        schema: [UserSchema],
        schemaVersion
      });

    realm.write(() => {
        // Delete the dog from the realm.
        
        realm.deleteAll()
        // Discard the reference.
        user = null;
      });

    await realm.close()

    await done(true)
}