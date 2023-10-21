import {z} from "zod";

const numbersArraySchema = z.array(z.number());

type numbersArrayType = z.infer<typeof numbersArraySchema>

const numbersArray = [1, 2, 3]

const result = numbersArraySchema.safeParse(numbersArray)

console.log(result);


// -----------------------

const usersDataSchema = z.array(z.object({
  userName: z.string(), 
  email: z.string().email(),
  phone: z.number()
}))

type usersDataType = z.infer<typeof usersDataSchema>

// -----------------------

const personSchema = z.object({
  name: z.string(),
  age: z.number(),
})

const personsSchema = z.array(personSchema);


const persons = [
  {
    name: "mememe", 
    age: 30,
  },
  {
    name: "momomo", 
    age: 20
  }
]


const res = personsSchema.parse(persons)

console.log(res);

// type personsType = z.infer<typeof personsSchema>


// ---------------------------

const stringSchema1 = z.string().array();
const stringSchema2 = z.string().array().optional();

type String1 = z.infer<typeof stringSchema1>
type String2 = z.infer<typeof stringSchema2>
