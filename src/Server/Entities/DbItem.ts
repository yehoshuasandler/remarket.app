import Record from '../Interfaces/Database/Record'
import IItemRequest from '../../Interfaces/RequestObjects/IItemRequest'

class DbItem implements Record {
  private readonly _id: string
  private readonly shoppingSessionId?: string
  private readonly label?: string
  private readonly brand?: string
  private readonly type?: string
  private readonly cost?: number
  private readonly descriptiveTags?: string[]
  private readonly imageUri?: string
  private _createdDate?: Date
  private isProcessed: boolean
  private isSold: boolean

  constructor (item: IItemRequest) {
    this._id = item.id
    this.shoppingSessionId = item.shoppingSessionId
    this.label = item.label
    this.brand = item.brand
    this.type = item.type
    this.cost = item.cost
    this.descriptiveTags = item.descriptiveTags
    this.imageUri = item.imageUri
    this._createdDate = item.createdDate
    this.isProcessed = item.isProccessed || false
    this.isSold = item.isSold || false
  }

  public get createdDate () {
    if(this._createdDate) return this._createdDate
    return new Date()
  }

  public get modifiedDate () {
    return new Date()
  }

  public get record () {
    return {
      _id: this._id,
      shoppingSessionId: this.shoppingSessionId,
      label: this.label,
      brand: this.brand,
      type: this.type,
      cost: this.cost,
      descriptiveTags: this.descriptiveTags,
      imageUri: this.imageUri,
      createdDate: this.createdDate,
      modifiedDate: this.modifiedDate,
      isProcessed: this.isProcessed,
      isSold: this.isSold
    }
  }
}

export default DbItem