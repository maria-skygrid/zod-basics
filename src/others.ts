import {z} from "zod";

const userSchema = z.object({
  name: z.string().min(3),
  age: z.number().gt(18),
  phone: z.number().optional(),
  isProgrammer: z.boolean().default(true), 
  hobbies: z.enum(["photography", "coding", "dogs"])
})

type userType = z.infer<typeof userSchema>

const user: userType = {
  name: "mimi", 
  age: 20, 
  isProgrammer: true,
  hobbies: "dogs"
}

const result = userSchema.parse(user)
console.log(result);
