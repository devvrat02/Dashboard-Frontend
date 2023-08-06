import { faker } from '@faker-js/faker';
export const fake=({limit=10})=>{
  let x=[]
  for (let i = 0;i<limit;++i){
      x.push({ 
      sno: i+1,
      no: faker.datatype.number({min:0,max:100}),
      id: faker.datatype.number({min:0,max:100}),
      name:faker.person.fullName(),
      itemsName:faker.commerce.productName(),
      orderDate:faker.date.anytime(),
      status:faker.helpers.arrayElement(['paid','pending','overdue']),
      prices:faker.commerce.price({min:500,max:1000}),
      email:faker.internet.email(),
      date:faker.date.anytime().toISOString,
      invoice:faker.finance.transactionDescription() ,
      payment:faker.finance.transactionType(),
      orderid:faker.helpers.fromRegExp(/000[0-9]{2}/)
     })
  }
  return x;
}

