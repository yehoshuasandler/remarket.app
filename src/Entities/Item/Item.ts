import IItem from '../../Interfaces/Entities/Item/IItem'
import ItemConstructor from '../../Interfaces/Contructors/ItemConstructor'

class Item implements IItem {
  readonly id: string
  public brand: string | undefined
  public type: string | undefined
  public cost: number | undefined
  public label: string | undefined
  public descriptiveTags: string[]
  public imageUri: string | undefined

  constructor(props: ItemConstructor) {
    this.id = props.id
    this.brand = props.brand
    this.type = props.type
    this.cost = props.cost
    this.label = props.label
    this.descriptiveTags = props.descriptiveTags || []
    this.imageUri = props.imageUri
  }

  addDescriptiveTag = (tag: string): void => {
    if (this.descriptiveTags.includes(tag)) return

    this.descriptiveTags.push(tag)
  }

  removeDescriptiveTag = (tag: string): void => {
    if (!this.descriptiveTags.includes(tag)) return

    const tagIndex = this.descriptiveTags.findIndex(t => t === tag)
    this.descriptiveTags.splice(tagIndex, 1)
  }
}

export default Item