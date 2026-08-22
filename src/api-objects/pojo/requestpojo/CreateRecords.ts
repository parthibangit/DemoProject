import { createRecordPayloadTypes } from  '../../../types/payloadType';

export class CreateRecords {

  // Define private fields
  private name = '';
  private price = 0;
  private category = '';
  private in_stock = true;

  
  set setName(value: string) {
    this.name = value;
  };

  get getName() {
    return this.name;
  };

  set setPrice(value: number) {
    this.price = value;
  };

  get getPrice() {
    return this.price;
  };

  set setCategory(value: string) {
    this.category = value;
  };

  get getCategory() {
    return this.category;
  };

  set setInStock(value: boolean) {
    this.in_stock = value;
  };

  get getInStock() {
    return this.in_stock;
  };

  public toJson(): createRecordPayloadTypes {
    return {
      data: {
        name: this.name,
        price: this.price,
        category: this.category,
        in_stock: this.in_stock
      }
    };
  };

}