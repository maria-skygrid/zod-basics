import { z } from "zod"

//期待している値
const userSchema = z.object({
  email: z.string().email(),
  userName: z.string(),
  phone: z.number().optional(),
  isProgrammer: z.boolean().optional()
})


//データvalidation
const response = userSchema.parse({
  email: "email@email.com", 
  userName: "wewe00",
  phone: 12345012345,
  isProgrammer: true
})

console.log(response);

// --------- 