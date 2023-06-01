import { Realm } from '@realm/react'

export type ClockPunchParams = {
  entrance: Date
  exit: Date
}

export class ClockPunch extends Realm.Object<ClockPunch> {
  _id: Realm.BSON.ObjectId = new Realm.BSON.ObjectId()

  entrance!: Date

  exit!: Date

  createdAt: Date = new Date()

  static primaryKey = '_id'

  static generate(params: ClockPunchParams) {
    return {
      _id: new Realm.BSON.ObjectId(),
      createdAt: new Date(),
      ...params
    }
  }

  constructor(realm: Realm, params: ClockPunchParams) {
    super(realm, { ...params })
  }
}
